import { Provider_perplexity_sonar } from '../src/index.js';

describe('perplexity-sonar Search Service', () => {
  test('returns search results', async () => {
    const provider = new Provider_perplexity_sonar();
    const res = await provider.search({ query: 'Node.js' });
    expect(res.provider).toBe('perplexity-sonar');
    expect(res.results.length).toBeGreaterThan(0);
  });
});
