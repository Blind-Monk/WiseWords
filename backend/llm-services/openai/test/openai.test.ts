import { Provider_openai } from '../src/index.js';

describe('openai LLM Service', () => {
  test('returns response according to ILlmProvider contract', async () => {
    const provider = new Provider_openai();
    const res = await provider.complete({ prompt: 'Hello' });
    expect(res.provider).toBe('openai');
    expect(res.content).toContain('Response from openai');
  });
});
