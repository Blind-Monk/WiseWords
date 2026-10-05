import { Provider_openrouter_free } from '../src/index.js';

describe('openrouter-free LLM Service', () => {
  test('returns response according to ILlmProvider contract', async () => {
    const provider = new Provider_openrouter_free();
    const res = await provider.complete({ prompt: 'Hello' });
    expect(res.provider).toBe('openrouter-free');
    expect(res.content).toContain('Response from openrouter-free');
  });
});
