export interface DocumentChunk {
  id: string;
  content: string;
  metadata?: any;
}

export class RagService {
  private chunks: Map<string, DocumentChunk[]> = new Map();

  public chunkText(text: string, chunkSize: number = 500, overlap: number = 50): string[] {
    const results: string[] = [];
    let start = 0;
    while (start < text.length) {
      const end = Math.min(start + chunkSize, text.length);
      results.push(text.slice(start, end));
      if (end === text.length) break;
      start += chunkSize - overlap;
    }
    return results;
  }

  public async addDocument(collection: string, docId: string, text: string): Promise<number> {
    const textChunks = this.chunkText(text);
    const docChunks: DocumentChunk[] = textChunks.map((c, i) => ({
      id: `${docId}-${i}`,
      content: c,
      metadata: { collection, docId, chunkIndex: i }
    }));

    const existing = this.chunks.get(collection) || [];
    this.chunks.set(collection, [...existing, ...docChunks]);
    return docChunks.length;
  }

  public async retrieve(query: string, collection: string = 'default', topK: number = 3): Promise<DocumentChunk[]> {
    const list = this.chunks.get(collection) || [];
    return list.slice(0, topK);
  }
}
