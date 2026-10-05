import { Provider_google_cse } from '../src/index.js';

describe('google-cse Search Service', () => {
  test('returns search results', async () => {
    const provider = new Provider_google_cse();
    const res = await provider.search({ query: 'Node.js' });
    expect(res.provider).toBe('google-cse');
    expect(res.results.length).toBeGreaterThan(0);
  });
});
