import { Provider_brave_paid } from '../src/index.js';

describe('brave-paid Search Service', () => {
  test('returns search results', async () => {
    const provider = new Provider_brave_paid();
    const res = await provider.search({ query: 'Node.js' });
    expect(res.provider).toBe('brave-paid');
    expect(res.results.length).toBeGreaterThan(0);
  });
});
