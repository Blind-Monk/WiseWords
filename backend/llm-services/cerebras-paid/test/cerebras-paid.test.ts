import { Provider_cerebras_paid } from '../src/index.js';

describe('cerebras-paid LLM Service', () => {
  test('returns response according to ILlmProvider contract', async () => {
    const provider = new Provider_cerebras_paid();
    const res = await provider.complete({ prompt: 'Hello' });
    expect(res.provider).toBe('cerebras-paid');
    expect(res.content).toContain('Response from cerebras-paid');
  });
});
