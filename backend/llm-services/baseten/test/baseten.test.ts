import { Provider_baseten } from '../src/index.js';

describe('baseten LLM Service', () => {
  test('returns response according to ILlmProvider contract', async () => {
    const provider = new Provider_baseten();
    const res = await provider.complete({ prompt: 'Hello' });
    expect(res.provider).toBe('baseten');
    expect(res.content).toContain('Response from baseten');
  });
});
