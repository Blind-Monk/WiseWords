import { Provider_bedrock } from '../src/index.js';

describe('bedrock LLM Service', () => {
  test('returns response according to ILlmProvider contract', async () => {
    const provider = new Provider_bedrock();
    const res = await provider.complete({ prompt: 'Hello' });
    expect(res.provider).toBe('bedrock');
    expect(res.content).toContain('Response from bedrock');
  });
});
