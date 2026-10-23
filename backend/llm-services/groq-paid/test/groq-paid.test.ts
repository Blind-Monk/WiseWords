import { Provider_groq_paid } from '../src/index.js';

describe('groq-paid LLM Service', () => {
  test('returns response according to ILlmProvider contract', async () => {
    const provider = new Provider_groq_paid();
    const res = await provider.complete({ prompt: 'Hello' });
    expect(res.provider).toBe('groq-paid');
    expect(res.content).toContain('Response from groq-paid');
  });
});
