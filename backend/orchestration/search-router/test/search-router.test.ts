import { SearchRouter } from '../src/index.js';
import { ISearchProvider } from '@wisewords/search-contracts';

describe('SearchRouter', () => {
  const p1: ISearchProvider = {
    name: 'google-cse',
    isFree: true,
    search: async (req) => ({ provider: 'google-cse', latencyMs: 10, results: [{ title: 'res', url: 'http://a.com', snippet: 's' }] })
  };

  const ddg: ISearchProvider = {
    name: 'duckduckgo',
    isFree: true,
    search: async (req) => ({ provider: 'duckduckgo', latencyMs: 5, results: [{ title: 'ddg', url: 'http://ddg.com', snippet: 's' }] })
  };

  test('routes free search queries', async () => {
    const router = new SearchRouter([p1], [], ddg, 100);
    const res = await router.execute('free', { query: 'test' });
    expect(res.provider).toBe('google-cse');
  });

  test('falls back to DuckDuckGo when free search providers fail', async () => {
    const failing: ISearchProvider = {
      name: 'failing',
      isFree: true,
      search: async () => { throw new Error('Down'); }
    };
    const router = new SearchRouter([failing], [], ddg, 10);
    const res = await router.execute('free', { query: 'test' });
    expect(res.provider).toBe('duckduckgo');
    expect(res.fallback).toBe(true);
  });
});
