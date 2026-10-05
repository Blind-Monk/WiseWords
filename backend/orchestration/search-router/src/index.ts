import { ISearchProvider, SearchRequest, SearchResponse } from '@wisewords/search-contracts';

export class SearchRouter {
  private cursor = 0;
  private lastDdgTime = 0;

  constructor(
    private readonly freeProviders: ISearchProvider[],
    private readonly paidProviders: ISearchProvider[],
    private readonly fallbackProvider?: ISearchProvider,
    private readonly ddgThrottleMs: number = 60000
  ) {}

  public async execute(type: 'free' | 'paid' = 'free', request: SearchRequest, namedProvider?: string): Promise<SearchResponse> {
    if (type === 'paid') {
      if (!namedProvider) throw new Error('Paid search request requires provider name');
      const provider = this.paidProviders.find((p) => p.name === namedProvider);
      if (!provider) throw new Error(`Paid search provider '${namedProvider}' not found`);
      return provider.search(request);
    }

    const candidates = this.freeProviders.filter((p) => p.name !== 'duckduckgo');
    let attempts = 0;

    while (attempts < candidates.length) {
      const provider = candidates[this.cursor];
      this.cursor = (this.cursor + 1) % candidates.length;
      attempts++;

      try {
        return await provider.search(request);
      } catch (err: any) {
        // Skip on error
      }
    }

    // DuckDuckGo fallback with throttle enforcement
    if (this.fallbackProvider) {
      const now = Date.now();
      const elapsed = now - this.lastDdgTime;
      if (elapsed < this.ddgThrottleMs) {
        await new Promise((r) => setTimeout(r, this.ddgThrottleMs - elapsed));
      }
      this.lastDdgTime = Date.now();
      const res = await this.fallbackProvider.search(request);
      return { ...res, fallback: true };
    }

    throw new Error('All search providers exhausted');
  }
}
