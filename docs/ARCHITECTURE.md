# Wise Words Architecture Overview

Wise Words is a provider-agnostic Meta-AI Gateway designed with Node.js backend microservices and an Angular frontend interface.

## High-Level Diagram

```
┌─────────────────────────────────────────────────────────┐
│                     ANGULAR FRONTEND                    │
│  Chat UI · Provider Picker · Search Toggle · Settings   │
└────────────────────────┬────────────────────────────────┘
                         │ HTTPS  /v1/query
┌────────────────────────▼────────────────────────────────┐
│              WISEWORDS ENGINE  (Node.js gateway)        │
│                                                         │
│  ┌──────────────┐  ┌──────────────┐  ┌───────────────┐  │
│  │ LLM Router   │  │Search Router │  │ RAG Adapter   │  │
│  │ (round-robin)│  │(round-robin) │  │ (optional)    │  │
│  └──────┬───────┘  └──────┬───────┘  └───────┬───────┘  │
│         │                 │                  │          │
│  ┌──────▼───────┐  ┌──────▼───────┐  ┌───────▼───────┐  │
│  │Circuit Break │  │Circuit Break │  │  MCP Adapter  │  │
│  │Rate Limiter  │  │Rate Limiter  │  │  (optional)   │  │
│  └──────┬───────┘  └──────┬───────┘  └───────────────┘  │
└─────────┼──────────────────┼───────────────────────────┘
          │                  │
   ┌──────▼───────┐    ┌─────▼────────┐
   │  LLM Services│    │ Search Svcs  │
   │  (11 free +  │    │ (6 free +    │
   │   19 paid)   │    │  11 paid)    │
   └──────┬───────┘    └─────┬────────┘
          │                  │
   ┌──────▼───────┐    ┌─────▼────────┐
   │ Ollama Local │    │ DuckDuckGo   │
   │  (fallback)  │    │  (fallback)  │
   └──────────────┘    └──────────────┘
```

## Key Modules
- **`backend/shared`**: Common libraries (`config-loader`, `llm-contracts`, `search-contracts`, `circuit-breaker`, `rate-limiter`, `logger`, `http-client`, `metrics`, `db-client`).
- **`backend/orchestration`**: Intelligent routers (`llm-router`, `search-router`).
- **`backend/llm-services`**: 30 provider microservices.
- **`backend/search-services`**: 17 search provider microservices.
- **`backend/extensions`**: `rag-service` and `mcp-service`.
- **`backend/gateway/wisewords-engine`**: Entrypoint HTTP server.
- **`frontend/`**: Web application interface.
