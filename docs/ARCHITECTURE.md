# Wise Words Architecture & Detailed Package Documentation

Wise Words is a provider-agnostic Meta-AI gateway built with Node.js microservice workspace packages and an Angular web application frontend.

---

## 1. System Topology & Architecture Diagram

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

## 2. Directory Structure & NPM Workspaces

```
wisewords/
├── config.json                     # Primary centralized runtime config
├── config.schema.json              # Validation JSON schema
├── config.example.json            # Reference configuration template
├── package.json                    # Root workspace declaration
├── Dockerfile                      # Gateway container build
├── docker-compose.yml              # Multi-container stack (Engine, Postgres, Ollama)
├── docs/                           # Technical documentation
├── backend/
│   ├── shared/                     # 9 Reusable shared packages
│   │   ├── config-loader
│   │   ├── llm-contracts
│   │   ├── search-contracts
│   │   ├── circuit-breaker
│   │   ├── rate-limiter
│   │   ├── logger
│   │   ├── http-client
│   │   ├── metrics
│   │   └── db-client
│   ├── orchestration/             # Routing engines
│   │   ├── llm-router
│   │   └── search-router
│   ├── gateway/                    # Entrypoint Express microservice
│   │   └── wisewords-engine
│   ├── extensions/                 # RAG and MCP feature adapters
│   │   ├── rag-service
│   │   └── mcp-service
│   ├── llm-services/               # 30 LLM Provider packages
│   └── search-services/            # 17 Search Provider packages
└── frontend/                       # Web application interface
```

---

## 3. Detailed Component Breakdown

### 3.1 Shared Microservice Libraries (`backend/shared/`)

1. **`@wisewords/config-loader`**
   - **Purpose:** Loads, parses, validates, caches, and hot-reloads `config.json`.
   - **Step-by-step Execution:**
     1. Resolves path from `WISE_WORDS_CONFIG` env var or defaults to `./config.json`.
     2. Reads JSON file and validates top-level sections (`engine`, `routing`, `llm`, `search`).
     3. Returns cached object; `reloadConfig()` clears memory cache for hot reloading.

2. **`@wisewords/llm-contracts`**
   - **Purpose:** Standardizes the interface for all LLM providers.
   - **Interfaces:** `ILlmProvider`, `LlmRequest`, `LlmResponse`, `LlmMessage`.
   - **Error Taxonomy:** `LlmError`, `RateLimitedError`, `AuthError`, `ProviderDownError`, `ModelNotFoundError`.

3. **`@wisewords/search-contracts`**
   - **Purpose:** Standardizes search engine integration interfaces.
   - **Interfaces:** `ISearchProvider`, `SearchRequest`, `SearchResponse`, `SearchResult`.

4. **`@wisewords/circuit-breaker`**
   - **Purpose:** Implements state machine (`closed` → `open` → `half-open`) to stop hammering failing providers.
   - **Step-by-step Execution:**
     1. Records consecutive failures on HTTP/API errors.
     2. Trips to `open` when threshold (default 5) is reached.
     3. Transitions to `half-open` after timeout (default 30s) to run probe requests.

5. **`@wisewords/rate-limiter`**
   - **Purpose:** Tracks per-provider request counts across minute and daily sliding windows.
   - **Step-by-step Execution:**
     1. Checks `canProceed(providerName, rpmLimit, rpdLimit)`.
     2. Increments counters on `consume(providerName)`.

6. **`@wisewords/logger`**
   - **Purpose:** Structured JSON logging with key redaction.
   - **Behavior:** Automatically redacts `apiKey`, `authorization`, `password`, and `secret`.

7. **`@wisewords/http-client`**
   - **Purpose:** Fetch client wrapper with retries, backoff, and timeouts.

8. **`@wisewords/metrics`**
   - **Purpose:** Prometheus metrics collector exposing request counters and latency histograms.

9. **`@wisewords/db-client`**
   - **Purpose:** PostgreSQL interface for storing request logs, quota logs, and `pgvector` embeddings.

---

### 3.2 Orchestration Routers (`backend/orchestration/`)

1. **`@wisewords/llm-router`**
   - **Step-by-step Execution Flow:**
     1. If `type === 'paid'`, finds exact named provider and model, executing call directly.
     2. If `type === 'free'`, filters healthy enabled candidate providers.
     3. Walks candidate providers using an atomic round-robin cursor.
     4. Checks circuit breaker state and rate limiter for each candidate.
     5. On failure, records circuit failure and proceeds to next candidate.
     6. If all candidates fail or are rate-limited, invokes fallback provider (`ollama-local`) returning `fallback: true`.

2. **`@wisewords/search-router`**
   - **Step-by-step Execution Flow:**
     1. If `type === 'paid'`, routes query to named search provider.
     2. If `type === 'free'`, round-robins across enabled free search providers.
     3. On failure or exhaustion, invokes `duckduckgo` fallback with global 60-second throttle enforcement.

---

### 3.3 Gateway Service (`backend/gateway/wisewords-engine`)

- **Endpoints:**
  - `POST /v1/query`: Main unified query endpoint.
  - `GET /v1/health`: Liveness & health check.
  - `GET /v1/providers`: Lists enabled free and paid providers.
  - `GET /v1/providers/:provider/models`: Returns supported models for a specific provider.
  - `GET /metrics`: Prometheus metrics scrape endpoint.
