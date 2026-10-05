import { Provider_serpapi } from '../src/index.js';

describe('serpapi Search Service', () => {
  test('returns search results', async () => {
    const provider = new Provider_serpapi();
    const res = await provider.search({ query: 'Node.js' });
    expect(res.provider).toBe('serpapi');
    expect(res.results.length).toBeGreaterThan(0);
  });
});
