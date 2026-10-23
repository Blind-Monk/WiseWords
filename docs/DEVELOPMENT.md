# Wise Words Development, Configuration & Production Guide

---

## 1. Single Command Setup & Monorepo Monolith Structure

All microservices (30 LLM services, 17 Search services, 9 shared libraries, gateway engine, orchestration routers, and frontend) are organized as npm/bun workspaces under `backend/` and `frontend/`.

```bash
# Path: / (Repository Root)
bun install
# OR:
npm install

# Build Workspace Packages
bun run build
# OR:
npm run build
```

---

## 2. Running Backend Gateway & Frontend Interface

### Common Backend Entry Point
Although the backend is organized into multiple service folders under `backend/llm-services/`, `backend/search-services/`, `backend/orchestration/`, and `backend/shared/`, they are all imported, instantiated, and coordinated via a single unified entry point:
`backend/gateway/wisewords-engine/src/index.ts`.

#### Running Backend Standalone
The backend is completely standalone and does NOT require the frontend.

```bash
# Start Backend API Gateway (Port 8080)
bun run backend/gateway/wisewords-engine/src/index.ts
# OR using npm script:
npm run dev:backend
```

### Frontend Execution
To run the web chat interface on port 4200:

```bash
# Using bunx / serve:
bunx serve ./frontend/src -l 4200
# OR using npx:
npx serve ./frontend/src -p 4200

# Running frontend via package script (auto-launches backend gateway in parallel):
npm run dev
# OR:
npm run dev:frontend
```

---

## 3. Comprehensive Configuration Guide (`config.json`)

Runtime settings are controlled via `config.json` at the root directory (copied from `config.example.json`).

### Key Sections:
- **`engine`**: Gateway port (default 8080), host (`0.0.0.0`), log level (`info`), timeout (`30000ms`).
- **`llm`**: Dict of `free` and `paid` LLM providers and model defaults.
- **`search`**: Dict of `free` and `paid` search API providers.
- **`rag`**: RAG grounding toggle (`enabled: true/false`), vector store path, embedding provider.
- **`mcp`**: Model Context Protocol tool integrations toggle and server definitions.

### Environment Variable Overrides & API Keys
API keys and runtime ports can be overridden without code changes:
- `PORT`: Gateway listening port (default: `8080`).
- `OLLAMA_BASE_URL`: Local Ollama fallback base URL (default: `http://localhost:11434`).
- `OLLAMA_DEFAULT_MODEL`: Default fallback Ollama model name (default: `llama3`).
- `OPENAI_API_KEY`: API key for OpenAI paid provider.
- `ANTHROPIC_API_KEY`: API key for Anthropic paid provider.
- `GOOGLE_AI_STUDIO_API_KEY`: API key for Google AI Studio provider.
- `GROQ_API_KEY`: API key for Groq provider.
- `TAVILY_API_KEY`: API key for Tavily paid search.

---

## 4. Detailed Production Deployment Guide

### Option A: Standalone Bun/Node Production Service
Run the compiled or TS entry point with production environment variables:

```bash
export NODE_ENV=production
export PORT=8080
bun run backend/gateway/wisewords-engine/src/index.ts
```

### Option B: Single Docker Container
Build and run the Docker image packaging all workspace services and the gateway engine:

```bash
# Build Docker image
docker build -t wisewords-engine .

# Run Docker container
docker run -d \
  -p 8080:8080 \
  -e NODE_ENV=production \
  -e OPENAI_API_KEY="your-key-here" \
  --name wisewords-gateway \
  wisewords-engine
```

### Option C: Production Docker Compose
Launch gateway, PostgreSQL database, and fallback Ollama container using Docker Compose:

```bash
# Launch production cluster
docker-compose up -d --build

# View container logs
docker-compose logs -f wisewords-engine
```

---

## 5. Gateway API Reference

### 1. List All LLM Providers & Models
- **Endpoint**: `GET /api/v1/list/llm` (also available at `GET /v1/list/llm`)
- **Description**: Returns single JSON payload with all configured `free`, `paid`, and `fallback` LLM providers and models.

### 2. List All Search APIs
- **Endpoint**: `GET /api/v1/list/searchapi` (also available at `GET /v1/list/searchapi`)
- **Description**: Returns single JSON payload with all configured `free`, `paid`, and `fallback` search API providers.

### 3. Query Execution
- **Endpoint**: `POST /v1/query`
- **Body Payload**:
  ```json
  {
    "prompt": "Explain quantum computing",
    "llmType": "paid",
    "llmProvider": "openai",
    "llmModel": "gpt-4o",
    "search": true,
    "searchType": "free",
    "searchProvider": "google-cse"
  }
  ```
