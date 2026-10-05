import { Provider_vertex_ai_search } from '../src/index.js';

describe('vertex-ai-search Search Service', () => {
  test('returns search results', async () => {
    const provider = new Provider_vertex_ai_search();
    const res = await provider.search({ query: 'Node.js' });
    expect(res.provider).toBe('vertex-ai-search');
    expect(res.results.length).toBeGreaterThan(0);
  });
});
