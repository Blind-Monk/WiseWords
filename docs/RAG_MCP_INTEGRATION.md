# Wise Words RAG & MCP Extensions Guide

The platform includes modular extensions for Retrieval-Augmented Generation (RAG) and Model Context Protocol (MCP) tool integration.

---

## 1. RAG Service (`backend/extensions/rag-service`)

### 1.1 Step-by-Step Execution
1. **Document Ingestion & Chunking:**
   Call `addDocument(collection, docId, text)` to split raw text into configured chunk sizes with overlap (`chunkSize: 500`, `chunkOverlap: 50`).
2. **Embedding Generation:**
   Generates dense vector representations (1536 dimensions) using configured embedding models (e.g. `ollama-local`).
3. **Retrieval:**
   Call `retrieve(query, collection, topK)` to fetch top matching text chunks to assemble into LLM prompt context.

---

## 2. MCP Service (`backend/extensions/mcp-service`)

### 2.1 Step-by-Step Execution
1. **Tool Discovery:**
   `listTools()` retrieves active Model Context Protocol tools declared in `config.mcp.servers`.
2. **Gateway Injection:**
   The gateway includes tool definitions in LLM requests.
3. **Tool Execution:**
   Call `invokeTool(name, args)` to execute standard MCP tool calls and return results back to the LLM.
