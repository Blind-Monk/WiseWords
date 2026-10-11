import { Provider_mistral_paid } from '../src/index.js';

describe('mistral-paid LLM Service', () => {
  test('returns response according to ILlmProvider contract', async () => {
    const provider = new Provider_mistral_paid();
    const res = await provider.complete({ prompt: 'Hello' });
    expect(res.provider).toBe('mistral-paid');
    expect(res.content).toContain('Response from mistral-paid');
  });
});
