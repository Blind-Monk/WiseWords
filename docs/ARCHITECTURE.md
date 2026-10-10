# Wise Words Architecture Reference

Wise Words is a provider-agnostic Meta-AI gateway built on Node.js ES Modules ("type": "module") with npm workspace microservices and an Angular frontend.

---

## 1. System Topology

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

---

## 2. Directory Structure & Exact Package File Paths

- **Root Package:** `package.json`
- **Root Configuration:** `config.json`
- **Configuration Schema:** `config.schema.json`
- **Example Configuration:** `config.example.json`

### Shared Libraries (`backend/shared/`)
- `@wisewords/config-loader`: `backend/shared/config-loader/src/index.ts`
- `@wisewords/llm-contracts`: `backend/shared/llm-contracts/src/index.ts`
- `@wisewords/search-contracts`: `backend/shared/search-contracts/src/index.ts`
- `@wisewords/circuit-breaker`: `backend/shared/circuit-breaker/src/index.ts`
- `@wisewords/rate-limiter`: `backend/shared/rate-limiter/src/index.ts`
- `@wisewords/logger`: `backend/shared/logger/src/index.ts`
- `@wisewords/http-client`: `backend/shared/http-client/src/index.ts`
- `@wisewords/metrics`: `backend/shared/metrics/src/index.ts`
- `@wisewords/db-client`: `backend/shared/db-client/src/index.ts`

### Orchestration & Gateway
- `@wisewords/llm-router`: `backend/orchestration/llm-router/src/index.ts`
- `@wisewords/search-router`: `backend/orchestration/search-router/src/index.ts`
- `wisewords-engine`: `backend/gateway/wisewords-engine/src/index.ts`

### Extensions & Frontend
- `@wisewords/rag-service`: `backend/extensions/rag-service/src/index.ts`
- `@wisewords/mcp-service`: `backend/extensions/mcp-service/src/index.ts`
- `wisewords-frontend`: `frontend/src/index.html`
