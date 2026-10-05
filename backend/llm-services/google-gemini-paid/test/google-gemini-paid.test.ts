import { Provider_google_gemini_paid } from '../src/index.js';

describe('google-gemini-paid LLM Service', () => {
  test('returns response according to ILlmProvider contract', async () => {
    const provider = new Provider_google_gemini_paid();
    const res = await provider.complete({ prompt: 'Hello' });
    expect(res.provider).toBe('google-gemini-paid');
    expect(res.content).toContain('Response from google-gemini-paid');
  });
});
