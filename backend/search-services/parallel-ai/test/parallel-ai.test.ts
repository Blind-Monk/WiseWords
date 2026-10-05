import { Provider_parallel_ai } from '../src/index.js';

describe('parallel-ai Search Service', () => {
  test('returns search results', async () => {
    const provider = new Provider_parallel_ai();
    const res = await provider.search({ query: 'Node.js' });
    expect(res.provider).toBe('parallel-ai');
    expect(res.results.length).toBeGreaterThan(0);
  });
});
