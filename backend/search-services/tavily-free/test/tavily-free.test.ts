import { Provider_tavily_free } from '../src/index.js';

describe('tavily-free Search Service', () => {
  test('returns search results', async () => {
    const provider = new Provider_tavily_free();
    const res = await provider.search({ query: 'Node.js' });
    expect(res.provider).toBe('tavily-free');
    expect(res.results.length).toBeGreaterThan(0);
  });
});
