import { Provider_nvidia_nim } from '../src/index.js';

describe('nvidia-nim LLM Service', () => {
  test('returns response according to ILlmProvider contract', async () => {
    const provider = new Provider_nvidia_nim();
    const res = await provider.complete({ prompt: 'Hello' });
    expect(res.provider).toBe('nvidia-nim');
    expect(res.content).toContain('Response from nvidia-nim');
  });
});
