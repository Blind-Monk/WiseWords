import { Provider_xai } from '../src/index.js';

describe('xai LLM Service', () => {
  test('returns response according to ILlmProvider contract', async () => {
    const provider = new Provider_xai();
    const res = await provider.complete({ prompt: 'Hello' });
    expect(res.provider).toBe('xai');
    expect(res.content).toContain('Response from xai');
  });
});
