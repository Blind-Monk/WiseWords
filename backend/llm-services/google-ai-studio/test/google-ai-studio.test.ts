import { Provider_google_ai_studio } from '../src/index.js';

describe('google-ai-studio LLM Service', () => {
  test('returns response according to ILlmProvider contract', async () => {
    const provider = new Provider_google_ai_studio();
    const res = await provider.complete({ prompt: 'Hello' });
    expect(res.provider).toBe('google-ai-studio');
    expect(res.content).toContain('Response from google-ai-studio');
  });
});
