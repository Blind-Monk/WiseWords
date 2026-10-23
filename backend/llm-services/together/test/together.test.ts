import { Provider_together } from '../src/index.js';

describe('together LLM Service', () => {
  test('returns response according to ILlmProvider contract', async () => {
    const provider = new Provider_together();
    const res = await provider.complete({ prompt: 'Hello' });
    expect(res.provider).toBe('together');
    expect(res.content).toContain('Response from together');
  });
});
