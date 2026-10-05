# Wise Words RAG & MCP Integration

## RAG Service (`backend/extensions/rag-service`)
- Text chunking with custom sizes and overlaps.
- Integrated vector embeddings via `ollama-local` or custom embedders.
- `pgvector` schema supported out-of-the-box.

## MCP Service (`backend/extensions/mcp-service`)
- Pluggable Model Context Protocol server client adapter.
- Tool discovery (`listTools()`) and execution (`invokeTool()`).
