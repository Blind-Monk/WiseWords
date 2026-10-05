import { Provider_ollama_local } from '../src/index.js';

describe('ollama-local LLM Service', () => {
  test('returns response according to ILlmProvider contract', async () => {
    const provider = new Provider_ollama_local();
    const res = await provider.complete({ prompt: 'Hello' });
    expect(res.provider).toBe('ollama-local');
    expect(res.content).toContain('Response from ollama-local');
  });
});
