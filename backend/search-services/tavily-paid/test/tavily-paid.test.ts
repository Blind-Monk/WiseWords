import { Provider_tavily_paid } from '../src/index.js';

describe('tavily-paid Search Service', () => {
  test('returns search results', async () => {
    const provider = new Provider_tavily_paid();
    const res = await provider.search({ query: 'Node.js' });
    expect(res.provider).toBe('tavily-paid');
    expect(res.results.length).toBeGreaterThan(0);
  });
});
