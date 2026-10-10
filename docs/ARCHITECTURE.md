# Wise Words Comprehensive File Paths & Command Reference

This document provides exact file paths, directory structures, and step-by-step terminal commands for every microservice, package, development process, and deployment scenario.

---

## 1. Absolute & Relative File Path Map

### 1.1 Central Configuration Paths
- **Primary Runtime Config:** `config.json` (Repository Root)
- **JSON Validation Schema:** `config.schema.json` (Repository Root)
- **Reference Example Config:** `config.example.json` (Repository Root)
- **Monorepo Workspace Definition:** `package.json` (Repository Root)
- **PostgreSQL Schema Initialization Script:** `backend/shared/db/schema.sql`

---

### 1.2 Shared Libraries (`backend/shared/`)
1. **Config Loader:** `backend/shared/config-loader/src/index.ts`
2. **LLM Contracts:** `backend/shared/llm-contracts/src/index.ts`
3. **Search Contracts:** `backend/shared/search-contracts/src/index.ts`
4. **Circuit Breaker:** `backend/shared/circuit-breaker/src/index.ts`
5. **Rate Limiter:** `backend/shared/rate-limiter/src/index.ts`
6. **Logger:** `backend/shared/logger/src/index.ts`
7. **HTTP Client:** `backend/shared/http-client/src/index.ts`
8. **Metrics:** `backend/shared/metrics/src/index.ts`
9. **Database Client:** `backend/shared/db-client/src/index.ts`

---

### 1.3 Orchestration & Gateway Paths
- **API Gateway Engine:** `backend/gateway/wisewords-engine/src/index.ts`
- **LLM Router:** `backend/orchestration/llm-router/src/index.ts`
- **Search Router:** `backend/orchestration/search-router/src/index.ts`

---

### 1.4 Extension Modules Paths
- **RAG Extension Service:** `backend/extensions/rag-service/src/index.ts`
- **MCP Extension Service:** `backend/extensions/mcp-service/src/index.ts`

---

### 1.5 Frontend Application Paths
- **Frontend Entrypoint HTML:** `frontend/src/index.html`
- **Frontend Package Definition:** `frontend/package.json`

---

### 1.6 LLM Microservices File Paths (`backend/llm-services/`)

#### Free Tier Services (11 Services + 1 Fallback)
1. `google-ai-studio`: `backend/llm-services/google-ai-studio/src/index.ts`
2. `groq`: `backend/llm-services/groq/src/index.ts`
3. `cerebras`: `backend/llm-services/cerebras/src/index.ts`
4. `nvidia-nim`: `backend/llm-services/nvidia-nim/src/index.ts`
5. `mistral`: `backend/llm-services/mistral/src/index.ts`
6. `openrouter-free`: `backend/llm-services/openrouter-free/src/index.ts`
7. `cohere`: `backend/llm-services/cohere/src/index.ts`
8. `llm7`: `backend/llm-services/llm7/src/index.ts`
9. `z-ai`: `backend/llm-services/z-ai/src/index.ts`
10. `requesty`: `backend/llm-services/requesty/src/index.ts`
11. `ollama-local`: `backend/llm-services/ollama-local/src/index.ts`

#### Paid Tier Services (19 Services)
1. `groq-paid`: `backend/llm-services/groq-paid/src/index.ts`
2. `cerebras-paid`: `backend/llm-services/cerebras-paid/src/index.ts`
3. `sambanova`: `backend/llm-services/sambanova/src/index.ts`
4. `together`: `backend/llm-services/together/src/index.ts`
5. `fireworks`: `backend/llm-services/fireworks/src/index.ts`
6. `deepinfra`: `backend/llm-services/deepinfra/src/index.ts`
7. `baseten`: `backend/llm-services/baseten/src/index.ts`
8. `openai`: `backend/llm-services/openai/src/index.ts`
9. `anthropic`: `backend/llm-services/anthropic/src/index.ts`
10. `google-gemini-paid`: `backend/llm-services/google-gemini-paid/src/index.ts`
11. `xai`: `backend/llm-services/xai/src/index.ts`
12. `mistral-paid`: `backend/llm-services/mistral-paid/src/index.ts`
13. `deepseek`: `backend/llm-services/deepseek/src/index.ts`
14. `openrouter-paid`: `backend/llm-services/openrouter-paid/src/index.ts`
15. `requesty-paid`: `backend/llm-services/requesty-paid/src/index.ts`
16. `poe`: `backend/llm-services/poe/src/index.ts`
17. `bedrock`: `backend/llm-services/bedrock/src/index.ts`
18. `azure-ai`: `backend/llm-services/azure-ai/src/index.ts`
19. `nebius`: `backend/llm-services/nebius/src/index.ts`
20. `coreweave`: `backend/llm-services/coreweave/src/index.ts`

---

### 1.7 Search Microservices File Paths (`backend/search-services/`)

#### Free Tier Services (6 Services)
1. `google-cse`: `backend/search-services/google-cse/src/index.ts`
2. `tavily-free`: `backend/search-services/tavily-free/src/index.ts`
3. `firecrawl-free`: `backend/search-services/firecrawl-free/src/index.ts`
4. `brave-free`: `backend/search-services/brave-free/src/index.ts`
5. `serpapi`: `backend/search-services/serpapi/src/index.ts`
6. `duckduckgo`: `backend/search-services/duckduckgo/src/index.ts`

#### Paid Tier Services (11 Services)
1. `tavily-paid`: `backend/search-services/tavily-paid/src/index.ts`
2. `exa-ai`: `backend/search-services/exa-ai/src/index.ts`
3. `firecrawl-paid`: `backend/search-services/firecrawl-paid/src/index.ts`
4. `perplexity-sonar`: `backend/search-services/perplexity-sonar/src/index.ts`
5. `brave-paid`: `backend/search-services/brave-paid/src/index.ts`
6. `google-cse-paid`: `backend/search-services/google-cse-paid/src/index.ts`
7. `bing-search`: `backend/search-services/bing-search/src/index.ts`
8. `vertex-ai-search`: `backend/search-services/vertex-ai-search/src/index.ts`
9. `you-com`: `backend/search-services/you-com/src/index.ts`
10. `linkup`: `backend/search-services/linkup/src/index.ts`
11. `parallel-ai`: `backend/search-services/parallel-ai/src/index.ts`

---

## 2. Command Reference

### 2.1 Installing & Building Monorepo Workspaces
```bash
# Command 1: Install all npm dependencies across monorepo workspaces
npm install

# Command 2: Build all TypeScript workspace packages
npm run build
```

---

### 2.2 Running Individual Microservices & Services in Development Mode

#### Running the Main API Gateway Engine
```bash
# Command to start the main API gateway in dev mode
npm run dev
# OR navigate to package directory and start:
cd backend/gateway/wisewords-engine && npm run dev
```

#### Building an Individual Shared Module or Service
```bash
# Build specific shared package (e.g. config-loader)
npm run build --workspace=@wisewords/config-loader

# Build specific LLM provider service (e.g. google-ai-studio)
npm run build --workspace=@wisewords/service-google-ai-studio

# Build specific Search provider service (e.g. google-cse)
npm run build --workspace=@wisewords/service-google-cse
```

---

### 2.3 Running Specific Tests Service-by-Service

```bash
# Test all packages
npx jest

# Test specific shared module
npx jest backend/shared/circuit-breaker/
npx jest backend/shared/rate-limiter/

# Test specific LLM service
npx jest backend/llm-services/google-ai-studio/
npx jest backend/llm-services/groq/

# Test specific Search service
npx jest backend/search-services/google-cse/

# Test Orchestration Routers
npx jest backend/orchestration/

# Test API Gateway
npx jest backend/gateway/wisewords-engine/
```

---

### 2.4 Deploying Services Step-by-Step

#### Step 1: Docker Build Command
```bash
docker build -t wisewords-engine:latest .
```

#### Step 2: Docker Compose Full Stack Launch
```bash
docker-compose up -d --build
```

#### Step 3: Checking Container Status
```bash
docker-compose ps
```

#### Step 4: Viewing Logs
```bash
docker-compose logs -f wisewords-engine
```

#### Step 5: Stopping Stack
```bash
docker-compose down
```
