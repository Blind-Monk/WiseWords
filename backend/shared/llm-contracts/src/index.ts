export interface LlmRequest {
  prompt: string;
  model?: string;
  tools?: any;
  context?: any;
}

export interface LlmResponse {
  content: string;
  provider: string;
  model: string;
  latencyMs: number;
  tokensUsed?: { promptTokens?: number; completionTokens?: number; totalTokens?: number };
  fallback?: boolean;
}

export interface ILlmProvider {
  name: string;
  isFree: boolean;
  models: string[];
  complete(request: LlmRequest): Promise<LlmResponse>;
  embed?(text: string): Promise<number[]>;
}

export class RateLimitedError extends Error {
  constructor(message?: string) {
    super(message || 'Rate limited');
    this.name = 'RateLimitedError';
  }
}
