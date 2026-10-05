import { Provider_openrouter_paid } from '../src/index.js';

describe('openrouter-paid LLM Service', () => {
  test('returns response according to ILlmProvider contract', async () => {
    const provider = new Provider_openrouter_paid();
    const res = await provider.complete({ prompt: 'Hello' });
    expect(res.provider).toBe('openrouter-paid');
    expect(res.content).toContain('Response from openrouter-paid');
  });
});
