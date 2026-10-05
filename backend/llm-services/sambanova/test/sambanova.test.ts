import { Provider_sambanova } from '../src/index.js';

describe('sambanova LLM Service', () => {
  test('returns response according to ILlmProvider contract', async () => {
    const provider = new Provider_sambanova();
    const res = await provider.complete({ prompt: 'Hello' });
    expect(res.provider).toBe('sambanova');
    expect(res.content).toContain('Response from sambanova');
  });
});
