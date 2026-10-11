import { Provider_google_cse_paid } from '../src/index.js';

describe('google-cse-paid Search Service', () => {
  test('returns search results', async () => {
    const provider = new Provider_google_cse_paid();
    const res = await provider.search({ query: 'Node.js' });
    expect(res.provider).toBe('google-cse-paid');
    expect(res.results.length).toBeGreaterThan(0);
  });
});
