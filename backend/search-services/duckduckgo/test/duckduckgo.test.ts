import { Provider_duckduckgo } from '../src/index.js';

describe('duckduckgo Search Service', () => {
  test('returns search results', async () => {
    const provider = new Provider_duckduckgo();
    const res = await provider.search({ query: 'Node.js' });
    expect(res.provider).toBe('duckduckgo');
    expect(res.results.length).toBeGreaterThan(0);
  });
});
