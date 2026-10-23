import { Provider_deepseek } from '../src/index.js';

describe('deepseek LLM Service', () => {
  test('returns response according to ILlmProvider contract', async () => {
    const provider = new Provider_deepseek();
    const res = await provider.complete({ prompt: 'Hello' });
    expect(res.provider).toBe('deepseek');
    expect(res.content).toContain('Response from deepseek');
  });
});
