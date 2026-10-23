import { Provider_firecrawl_free } from '../src/index.js';

describe('firecrawl-free Search Service', () => {
  test('returns search results', async () => {
    const provider = new Provider_firecrawl_free();
    const res = await provider.search({ query: 'Node.js' });
    expect(res.provider).toBe('firecrawl-free');
    expect(res.results.length).toBeGreaterThan(0);
  });
});
