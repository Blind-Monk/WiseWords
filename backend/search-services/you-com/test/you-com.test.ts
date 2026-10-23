import { Provider_you_com } from '../src/index.js';

describe('you-com Search Service', () => {
  test('returns search results', async () => {
    const provider = new Provider_you_com();
    const res = await provider.search({ query: 'Node.js' });
    expect(res.provider).toBe('you-com');
    expect(res.results.length).toBeGreaterThan(0);
  });
});
