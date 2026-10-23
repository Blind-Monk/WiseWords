import { Provider_mistral } from '../src/index.js';

describe('mistral LLM Service', () => {
  test('returns response according to ILlmProvider contract', async () => {
    const provider = new Provider_mistral();
    const res = await provider.complete({ prompt: 'Hello' });
    expect(res.provider).toBe('mistral');
    expect(res.content).toContain('Response from mistral');
  });
});
