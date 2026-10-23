import { Provider_anthropic } from '../src/index.js';

describe('anthropic LLM Service', () => {
  test('returns response according to ILlmProvider contract', async () => {
    const provider = new Provider_anthropic();
    const res = await provider.complete({ prompt: 'Hello' });
    expect(res.provider).toBe('anthropic');
    expect(res.content).toContain('Response from anthropic');
  });
});
