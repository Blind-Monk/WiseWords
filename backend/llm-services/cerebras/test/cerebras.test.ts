import { Provider_cerebras } from '../src/index.js';

describe('cerebras LLM Service', () => {
  test('returns response according to ILlmProvider contract', async () => {
    const provider = new Provider_cerebras();
    const res = await provider.complete({ prompt: 'Hello' });
    expect(res.provider).toBe('cerebras');
    expect(res.content).toContain('Response from cerebras');
  });
});
