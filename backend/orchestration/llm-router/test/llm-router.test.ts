import { LlmRouter } from '../src/index.js';
import { ILlmProvider } from '@wisewords/llm-contracts';

describe('LlmRouter', () => {
  const p1: ILlmProvider = {
    name: 'groq',
    isFree: true,
    models: ['llama3'],
    complete: async (req) => ({ content: 'groq response', provider: 'groq', model: 'llama3', latencyMs: 10 })
  };

  const p2: ILlmProvider = {
    name: 'cerebras',
    isFree: true,
    models: ['llama3'],
    complete: async (req) => ({ content: 'cerebras response', provider: 'cerebras', model: 'llama3', latencyMs: 10 })
  };

  const ollama: ILlmProvider = {
    name: 'ollama-local',
    isFree: true,
    models: ['llama3.2'],
    complete: async (req) => ({ content: 'ollama response', provider: 'ollama-local', model: 'llama3.2', latencyMs: 5 })
  };

  test('round-robin distributes free LLM requests', async () => {
    const router = new LlmRouter([p1, p2], [], ollama);
    const res1 = await router.execute('free', { prompt: 'hi' });
    const res2 = await router.execute('free', { prompt: 'hi' });
    expect(res1.provider).toBe('groq');
    expect(res2.provider).toBe('cerebras');
  });

  test('falls back to Ollama when free providers fail or rate limited', async () => {
    const failingP: ILlmProvider = {
      name: 'failing',
      isFree: true,
      models: ['m'],
      complete: async () => { throw new Error('Down'); }
    };
    const router = new LlmRouter([failingP], [], ollama);
    const res = await router.execute('free', { prompt: 'hi' });
    expect(res.provider).toBe('ollama-local');
    expect(res.fallback).toBe(true);
  });
});
