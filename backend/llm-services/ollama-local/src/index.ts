import { ILlmProvider, LlmRequest, LlmResponse } from '@wisewords/llm-contracts';

export class Provider_ollama_local implements ILlmProvider {
  public name = 'ollama-local';
  public isFree = true;
  public baseUrl: string;
  public defaultModel: string;
  public models: string[];

  constructor(options: { baseUrl?: string; defaultModel?: string; models?: string[] } = {}) {
    this.baseUrl = options.baseUrl || process.env.OLLAMA_BASE_URL || 'http://localhost:11434';
    this.defaultModel = options.defaultModel || process.env.OLLAMA_DEFAULT_MODEL || 'llama3.2';
    this.models = options.models && options.models.length > 0 ? options.models : [this.defaultModel, 'mistral'];
  }

  public async complete(request: LlmRequest): Promise<LlmResponse> {
    const start = Date.now();
    const selectedModel = request.model || this.defaultModel;

    return {
      content: `Response from ollama-local (URL: ${this.baseUrl}) using model ${selectedModel} for prompt: "${request.prompt}"`,
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
