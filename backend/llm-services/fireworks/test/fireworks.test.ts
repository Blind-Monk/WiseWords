import { Provider_fireworks } from '../src/index.js';

describe('fireworks LLM Service', () => {
  test('returns response according to ILlmProvider contract', async () => {
    const provider = new Provider_fireworks();
    const res = await provider.complete({ prompt: 'Hello' });
    expect(res.provider).toBe('fireworks');
    expect(res.content).toContain('Response from fireworks');
  });
});
