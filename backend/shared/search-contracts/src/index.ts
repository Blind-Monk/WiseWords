export interface SearchRequest {
  query: string;
}

export interface SearchResultItem {
  title: string;
  url: string;
  snippet: string;
}

export interface SearchResponse {
  provider: string;
  latencyMs: number;
  results: SearchResultItem[];
  fallback?: boolean;
}

export interface ISearchProvider {
  name: string;
  isFree: boolean;
  search(request: SearchRequest): Promise<SearchResponse>;
}
