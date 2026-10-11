import { Provider_coreweave } from '../src/index.js';

describe('coreweave LLM Service', () => {
  test('returns response according to ILlmProvider contract', async () => {
    const provider = new Provider_coreweave();
    const res = await provider.complete({ prompt: 'Hello' });
    expect(res.provider).toBe('coreweave');
    expect(res.content).toContain('Response from coreweave');
  });
});
