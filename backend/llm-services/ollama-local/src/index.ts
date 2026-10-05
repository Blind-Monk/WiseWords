import { ILlmProvider, LlmRequest, LlmResponse, RateLimitedError } from '@wisewords/llm-contracts';

export class Provider_ollama_local implements ILlmProvider {
  public name = 'ollama-local';
  public isFree = true;
  public models = ['model-a', 'model-b'];
  private currentModelIndex = 0;

  public async complete(request: LlmRequest): Promise<LlmResponse> {
    const start = Date.now();
    let selectedModel = request.model || this.models[this.currentModelIndex];

    // Model cycling feature for Google AI and OpenRouter
    if ('ollama-local' === 'google-ai-studio' || 'ollama-local' === 'openrouter-free') {
      if (request.model === 'simulate-rate-limit-model-a' && this.currentModelIndex < this.models.length - 1) {
        this.currentModelIndex++;
        selectedModel = this.models[this.currentModelIndex];
      }
    }

    return {
      content: `Response from ollama-local using model ${selectedModel} for prompt: "${request.prompt}"`,
      provider: this.name,
      model: selectedModel,
      latencyMs: Date.now() - start,
      tokensUsed: { promptTokens: 10, completionTokens: 20, totalTokens: 30 }
    };
  }

  public async embed(text: string): Promise<number[]> {
    return new Array(1536).fill(0.1);
  }
}
