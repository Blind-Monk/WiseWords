import { Provider_linkup } from '../src/index.js';

describe('linkup Search Service', () => {
  test('returns search results', async () => {
    const provider = new Provider_linkup();
    const res = await provider.search({ query: 'Node.js' });
    expect(res.provider).toBe('linkup');
    expect(res.results.length).toBeGreaterThan(0);
  });
});
