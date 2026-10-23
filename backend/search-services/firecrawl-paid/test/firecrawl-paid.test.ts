import { Provider_firecrawl_paid } from '../src/index.js';

describe('firecrawl-paid Search Service', () => {
  test('returns search results', async () => {
    const provider = new Provider_firecrawl_paid();
    const res = await provider.search({ query: 'Node.js' });
    expect(res.provider).toBe('firecrawl-paid');
    expect(res.results.length).toBeGreaterThan(0);
  });
});
