import { Provider_nebius } from '../src/index.js';

describe('nebius LLM Service', () => {
  test('returns response according to ILlmProvider contract', async () => {
    const provider = new Provider_nebius();
    const res = await provider.complete({ prompt: 'Hello' });
    expect(res.provider).toBe('nebius');
    expect(res.content).toContain('Response from nebius');
  });
});
