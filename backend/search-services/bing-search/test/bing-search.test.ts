import { Provider_bing_search } from '../src/index.js';

describe('bing-search Search Service', () => {
  test('returns search results', async () => {
    const provider = new Provider_bing_search();
    const res = await provider.search({ query: 'Node.js' });
    expect(res.provider).toBe('bing-search');
    expect(res.results.length).toBeGreaterThan(0);
  });
});
