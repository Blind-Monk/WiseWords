import { Provider_azure_ai } from '../src/index.js';

describe('azure-ai LLM Service', () => {
  test('returns response according to ILlmProvider contract', async () => {
    const provider = new Provider_azure_ai();
    const res = await provider.complete({ prompt: 'Hello' });
    expect(res.provider).toBe('azure-ai');
    expect(res.content).toContain('Response from azure-ai');
  });
});
