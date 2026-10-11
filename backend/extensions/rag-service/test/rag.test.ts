import { RagService } from '../src/index.js';

describe('RagService', () => {
  test('chunks text into specified size with overlap', () => {
    const rag = new RagService();
    const text = 'a'.repeat(1200);
    const chunks = rag.chunkText(text, 500, 50);
    expect(chunks.length).toBeGreaterThan(2);
    expect(chunks[0].length).toBe(500);
  });

  test('adds and retrieves document chunks', async () => {
    const rag = new RagService();
    await rag.addDocument('kb', 'doc-1', 'Sample document content for vector search retrieval');
    const results = await rag.retrieve('sample', 'kb', 2);
    expect(results.length).toBe(1);
    expect(results[0].content).toContain('Sample document content');
  });
});
