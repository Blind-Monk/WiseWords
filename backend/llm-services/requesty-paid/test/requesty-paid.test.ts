import { Provider_requesty_paid } from '../src/index.js';

describe('requesty-paid LLM Service', () => {
  test('returns response according to ILlmProvider contract', async () => {
    const provider = new Provider_requesty_paid();
    const res = await provider.complete({ prompt: 'Hello' });
    expect(res.provider).toBe('requesty-paid');
    expect(res.content).toContain('Response from requesty-paid');
  });
});
