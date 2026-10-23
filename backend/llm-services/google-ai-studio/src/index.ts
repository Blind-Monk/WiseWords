import { ILlmProvider, LlmRequest, LlmResponse, RateLimitedError } from '@wisewords/llm-contracts';

export class Provider_google_ai_studio implements ILlmProvider {
  public name = 'google-ai-studio';
  public isFree = true;
  public models = ['model-a', 'model-b'];
  private currentModelIndex = 0;

  public async complete(request: LlmRequest): Promise<LlmResponse> {
    const start = Date.now();
    let selectedModel = request.model || this.models[this.currentModelIndex];

    // Model cycling feature for Google AI and OpenRouter
    if ('google-ai-studio' === 'google-ai-studio' || 'google-ai-studio' === 'openrouter-free') {
      if (request.model === 'simulate-rate-limit-model-a' && this.currentModelIndex < this.models.length - 1) {
        this.currentModelIndex++;
        selectedModel = this.models[this.currentModelIndex];
      }
    }

    return {
      content: `Response from google-ai-studio using model ${selectedModel} for prompt: "${request.prompt}"`,
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
