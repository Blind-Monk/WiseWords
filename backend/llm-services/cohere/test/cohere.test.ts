import { Provider_cohere } from '../src/index.js';

describe('cohere LLM Service', () => {
  test('returns response according to ILlmProvider contract', async () => {
    const provider = new Provider_cohere();
    const res = await provider.complete({ prompt: 'Hello' });
    expect(res.provider).toBe('cohere');
    expect(res.content).toContain('Response from cohere');
  });
});
