# Wise Words RAG & MCP Extensions Documentation

This document describes the RAG and MCP adapter extension packages.

---

## 1. RAG Extension (`backend/extensions/rag-service`)

- **File Path:** `backend/extensions/rag-service/src/index.ts`
- **Features:** Text chunking (`chunkText`), document storage (`addDocument`), and top-K vector search retrieval (`retrieve`).
- **Test Command:** `bun test backend/extensions/rag-service/` or `npx jest backend/extensions/rag-service/`

---

## 2. MCP Extension (`backend/extensions/mcp-service`)

- **File Path:** `backend/extensions/mcp-service/src/index.ts`
- **Features:** Tool listing (`listTools`) and tool invocation (`invokeTool`).
- **Test Command:** `bun test backend/extensions/mcp-service/` or `npx jest backend/extensions/mcp-service/`
