import { Provider_groq } from '../src/index.js';

describe('groq LLM Service', () => {
  test('returns response according to ILlmProvider contract', async () => {
    const provider = new Provider_groq();
    const res = await provider.complete({ prompt: 'Hello' });
    expect(res.provider).toBe('groq');
    expect(res.content).toContain('Response from groq');
  });
});
