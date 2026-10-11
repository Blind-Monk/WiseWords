import { Provider_deepinfra } from '../src/index.js';

describe('deepinfra LLM Service', () => {
  test('returns response according to ILlmProvider contract', async () => {
    const provider = new Provider_deepinfra();
    const res = await provider.complete({ prompt: 'Hello' });
    expect(res.provider).toBe('deepinfra');
    expect(res.content).toContain('Response from deepinfra');
  });
});
