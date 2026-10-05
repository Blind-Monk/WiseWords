import { Provider_brave_free } from '../src/index.js';

describe('brave-free Search Service', () => {
  test('returns search results', async () => {
    const provider = new Provider_brave_free();
    const res = await provider.search({ query: 'Node.js' });
    expect(res.provider).toBe('brave-free');
    expect(res.results.length).toBeGreaterThan(0);
  });
});
