import { ISearchProvider, SearchRequest, SearchResponse } from '@wisewords/search-contracts';

export class Provider_bing_search implements ISearchProvider {
  public name = 'bing-search';
  public isFree = false;

  public async search(request: SearchRequest): Promise<SearchResponse> {
    const start = Date.now();
    return {
      provider: this.name,
      latencyMs: Date.now() - start,
      results: [
        { title: `Search Result 1 for ${request.query}`, url: 'https://example.com/1', snippet: 'Snippet 1' },
        { title: `Search Result 2 for ${request.query}`, url: 'https://example.com/2', snippet: 'Snippet 2' }
      ]
    };
  }
}
