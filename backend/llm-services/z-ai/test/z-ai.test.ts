import { Provider_z_ai } from '../src/index.js';

describe('z-ai LLM Service', () => {
  test('returns response according to ILlmProvider contract', async () => {
    const provider = new Provider_z_ai();
    const res = await provider.complete({ prompt: 'Hello' });
    expect(res.provider).toBe('z-ai');
    expect(res.content).toContain('Response from z-ai');
  });
});
