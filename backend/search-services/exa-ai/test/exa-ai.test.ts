import { Provider_exa_ai } from '../src/index.js';

describe('exa-ai Search Service', () => {
  test('returns search results', async () => {
    const provider = new Provider_exa_ai();
    const res = await provider.search({ query: 'Node.js' });
    expect(res.provider).toBe('exa-ai');
    expect(res.results.length).toBeGreaterThan(0);
  });
});
