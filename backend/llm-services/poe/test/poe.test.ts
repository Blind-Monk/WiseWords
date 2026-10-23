import { Provider_poe } from '../src/index.js';

describe('poe LLM Service', () => {
  test('returns response according to ILlmProvider contract', async () => {
    const provider = new Provider_poe();
    const res = await provider.complete({ prompt: 'Hello' });
    expect(res.provider).toBe('poe');
    expect(res.content).toContain('Response from poe');
  });
});
