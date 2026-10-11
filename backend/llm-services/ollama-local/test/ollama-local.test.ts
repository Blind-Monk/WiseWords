import { Provider_ollama_local } from '../src/index.js';

describe('ollama-local LLM Service', () => {
  test('uses default configuration when options are omitted', async () => {
    const provider = new Provider_ollama_local();
    const res = await provider.complete({ prompt: 'Hello' });
    expect(res.provider).toBe('ollama-local');
    expect(res.model).toBe('llama3.2');
    expect(res.content).toContain('http://localhost:11434');
  });

  test('accepts custom baseUrl and defaultModel via options', async () => {
    const provider = new Provider_ollama_local({
      baseUrl: 'http://custom-ollama:11434',
      defaultModel: 'codellama',
      models: ['codellama', 'llama3']
    });
    const res = await provider.complete({ prompt: 'Write code' });
    expect(res.model).toBe('codellama');
    expect(res.content).toContain('http://custom-ollama:11434');
  });
});
