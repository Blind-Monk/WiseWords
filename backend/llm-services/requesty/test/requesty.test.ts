import { Provider_requesty } from '../src/index.js';

describe('requesty LLM Service', () => {
  test('returns response according to ILlmProvider contract', async () => {
    const provider = new Provider_requesty();
    const res = await provider.complete({ prompt: 'Hello' });
    expect(res.provider).toBe('requesty');
    expect(res.content).toContain('Response from requesty');
  });
});
