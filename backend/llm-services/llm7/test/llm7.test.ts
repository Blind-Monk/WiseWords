import { Provider_llm7 } from '../src/index.js';

describe('llm7 LLM Service', () => {
  test('returns response according to ILlmProvider contract', async () => {
    const provider = new Provider_llm7();
    const res = await provider.complete({ prompt: 'Hello' });
    expect(res.provider).toBe('llm7');
    expect(res.content).toContain('Response from llm7');
  });
});
