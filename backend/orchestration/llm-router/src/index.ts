import { ILlmProvider, LlmRequest, LlmResponse } from '@wisewords/llm-contracts';
import { CircuitBreaker } from '@wisewords/circuit-breaker';
import { RateLimiter } from '@wisewords/rate-limiter';

export class LlmRouter {
  private cursor = 0;
  private circuitBreakers: Map<string, CircuitBreaker> = new Map();
  private rateLimiter: RateLimiter = new RateLimiter();

  constructor(
    private readonly freeProviders: ILlmProvider[],
    private readonly paidProviders: ILlmProvider[],
    private readonly fallbackProvider?: ILlmProvider
  ) {
    for (const p of [...freeProviders, ...paidProviders]) {
      this.circuitBreakers.set(p.name, new CircuitBreaker(p.name));
    }
  }

  public async execute(type: 'free' | 'paid' = 'free', request: LlmRequest, namedProvider?: string): Promise<LlmResponse> {
    if (type === 'paid') {
      if (!namedProvider) throw new Error('Paid LLM request requires provider name');
      const provider = this.paidProviders.find((p) => p.name === namedProvider);
      if (!provider) throw new Error(`Paid provider '${namedProvider}' not found or disabled`);
      return provider.complete(request);
    }

    // Free round-robin routing logic
    const candidates = this.freeProviders.filter((p) => p.name !== 'ollama-local');
    if (candidates.length === 0 && this.fallbackProvider) {
      const res = await this.fallbackProvider.complete(request);
      return { ...res, fallback: true };
    }

    const startCursor = this.cursor;
    let attempts = 0;

    while (attempts < candidates.length) {
      const provider = candidates[this.cursor];
      this.cursor = (this.cursor + 1) % candidates.length;
      attempts++;

      const cb = this.circuitBreakers.get(provider.name);
      if (cb && !cb.isClosed()) continue;
      if (!this.rateLimiter.canProceed(provider.name)) continue;

      try {
        this.rateLimiter.consume(provider.name);
        const response = await provider.complete(request);
        if (cb) cb.recordSuccess();
        return response;
      } catch (err: any) {
        if (cb) cb.recordFailure();
      }
    }

    // Fallback to Ollama if all free candidates exhausted or rate limited
    if (this.fallbackProvider) {
      const res = await this.fallbackProvider.complete(request);
      return { ...res, fallback: true };
    }

    throw new Error('All LLM providers exhausted');
  }
}
