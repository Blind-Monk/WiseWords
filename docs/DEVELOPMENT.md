# Wise Words Monorepo Setup & Comprehensive Backend Service Command Reference

This document provides explicit step-by-step setup, build, test, and dev commands for **every backend service package** across the Wise Words monorepo.

---

## 1. Single Command Monorepo Root Installation

Because Wise Words is configured as a native monorepo workspace (declared in root `package.json`), you **do not need to enter individual directories to install dependencies**.

Running a single command at the repository root automatically installs and links dependencies across **all 30 LLM microservices, 17 Search services, 9 shared libraries, extension modules, API gateway, and frontend**:

```bash
# SINGLE COMMAND: Install all packages and services across the entire monorepo
bun install

# OR using npm:
npm install
```

### Full Root Setup Sequence:
```bash
# Step 1: Clone Repository
git clone https://github.com/your-org/wisewords.git
cd wisewords

# Step 2: SINGLE COMMAND Installation for ALL packages and services
bun install

# Step 3: Initialize Central Configuration
cp config.example.json config.json

# Step 4: SINGLE COMMAND Build for ALL packages and services
bun run build
```

---

## 2. Backend Shared Libraries (`backend/shared/`)

### 2.1 `@wisewords/config-loader` (`backend/shared/config-loader`)
- **Build:** `bun run build --workspace=@wisewords/config-loader` (or `npm run build --workspace=@wisewords/config-loader`)
- **Test:** `bun test backend/shared/config-loader/` (or `npx jest backend/shared/config-loader/`)

### 2.2 `@wisewords/llm-contracts` (`backend/shared/llm-contracts`)
- **Build:** `bun run build --workspace=@wisewords/llm-contracts`
- **Test:** `bun test backend/shared/llm-contracts/`

### 2.3 `@wisewords/search-contracts` (`backend/shared/search-contracts`)
- **Build:** `bun run build --workspace=@wisewords/search-contracts`
- **Test:** `bun test backend/shared/search-contracts/`

### 2.4 `@wisewords/circuit-breaker` (`backend/shared/circuit-breaker`)
- **Build:** `bun run build --workspace=@wisewords/circuit-breaker`
- **Test:** `bun test backend/shared/circuit-breaker/`

### 2.5 `@wisewords/rate-limiter` (`backend/shared/rate-limiter`)
- **Build:** `bun run build --workspace=@wisewords/rate-limiter`
- **Test:** `bun test backend/shared/rate-limiter/`

### 2.6 `@wisewords/logger` (`backend/shared/logger`)
- **Build:** `bun run build --workspace=@wisewords/logger`
- **Test:** `bun test backend/shared/logger/`

### 2.7 `@wisewords/http-client` (`backend/shared/http-client`)
- **Build:** `bun run build --workspace=@wisewords/http-client`
- **Test:** `bun test backend/shared/http-client/`

### 2.8 `@wisewords/metrics` (`backend/shared/metrics`)
- **Build:** `bun run build --workspace=@wisewords/metrics`
- **Test:** `bun test backend/shared/metrics/`

### 2.9 `@wisewords/db-client` (`backend/shared/db-client`)
- **Build:** `bun run build --workspace=@wisewords/db-client`
- **Test:** `bun test backend/shared/db-client/`

---

## 3. Orchestration & Gateway Services

### 3.1 LLM Router (`@wisewords/llm-router` -> `backend/orchestration/llm-router`)
- **Build:** `bun run build --workspace=@wisewords/llm-router`
- **Test:** `bun test backend/orchestration/llm-router/`

### 3.2 Search Router (`@wisewords/search-router` -> `backend/orchestration/search-router`)
- **Build:** `bun run build --workspace=@wisewords/search-router`
- **Test:** `bun test backend/orchestration/search-router/`

### 3.3 Gateway Engine (`wisewords-engine` -> `backend/gateway/wisewords-engine`)
- **Build:** `bun run build --workspace=wisewords-engine`
- **Run Dev Mode:** `bun run backend/gateway/wisewords-engine/src/index.ts` (or `npm run dev --workspace=wisewords-engine`)
- **Test:** `bun test backend/gateway/wisewords-engine/`

---

## 4. Extensions (`backend/extensions/`)

### 4.1 RAG Extension (`@wisewords/rag-service` -> `backend/extensions/rag-service`)
- **Build:** `bun run build --workspace=@wisewords/rag-service`
- **Test:** `bun test backend/extensions/rag-service/`

### 4.2 MCP Extension (`@wisewords/mcp-service` -> `backend/extensions/mcp-service`)
- **Build:** `bun run build --workspace=@wisewords/mcp-service`
- **Test:** `bun test backend/extensions/mcp-service/`

---

## 5. Free LLM Services (11 Services + 1 Fallback)

1. **`@wisewords/service-google-ai-studio` (`backend/llm-services/google-ai-studio`)**
   - Build: `bun run build --workspace=@wisewords/service-google-ai-studio`
   - Test: `bun test backend/llm-services/google-ai-studio/`

2. **`@wisewords/service-groq` (`backend/llm-services/groq`)**
   - Build: `bun run build --workspace=@wisewords/service-groq`
   - Test: `bun test backend/llm-services/groq/`

3. **`@wisewords/service-cerebras` (`backend/llm-services/cerebras`)**
   - Build: `bun run build --workspace=@wisewords/service-cerebras`
   - Test: `bun test backend/llm-services/cerebras/`

4. **`@wisewords/service-nvidia-nim` (`backend/llm-services/nvidia-nim`)**
   - Build: `bun run build --workspace=@wisewords/service-nvidia-nim`
   - Test: `bun test backend/llm-services/nvidia-nim/`

5. **`@wisewords/service-mistral` (`backend/llm-services/mistral`)**
   - Build: `bun run build --workspace=@wisewords/service-mistral`
   - Test: `bun test backend/llm-services/mistral/`

6. **`@wisewords/service-openrouter-free` (`backend/llm-services/openrouter-free`)**
   - Build: `bun run build --workspace=@wisewords/service-openrouter-free`
   - Test: `bun test backend/llm-services/openrouter-free/`

7. **`@wisewords/service-cohere` (`backend/llm-services/cohere`)**
   - Build: `bun run build --workspace=@wisewords/service-cohere`
   - Test: `bun test backend/llm-services/cohere/`

8. **`@wisewords/service-llm7` (`backend/llm-services/llm7`)**
   - Build: `bun run build --workspace=@wisewords/service-llm7`
   - Test: `bun test backend/llm-services/llm7/`

9. **`@wisewords/service-z-ai` (`backend/llm-services/z-ai`)**
   - Build: `bun run build --workspace=@wisewords/service-z-ai`
   - Test: `bun test backend/llm-services/z-ai/`

10. **`@wisewords/service-requesty` (`backend/llm-services/requesty`)**
    - Build: `bun run build --workspace=@wisewords/service-requesty`
    - Test: `bun test backend/llm-services/requesty/`

11. **`@wisewords/service-ollama-local` (`backend/llm-services/ollama-local`)**
    - Build: `bun run build --workspace=@wisewords/service-ollama-local`
    - Test: `bun test backend/llm-services/ollama-local/`

---

## 6. Paid LLM Services (19 Services)

1. `@wisewords/service-groq-paid`: `bun test backend/llm-services/groq-paid/`
2. `@wisewords/service-cerebras-paid`: `bun test backend/llm-services/cerebras-paid/`
3. `@wisewords/service-sambanova`: `bun test backend/llm-services/sambanova/`
4. `@wisewords/service-together`: `bun test backend/llm-services/together/`
5. `@wisewords/service-fireworks`: `bun test backend/llm-services/fireworks/`
6. `@wisewords/service-deepinfra`: `bun test backend/llm-services/deepinfra/`
7. `@wisewords/service-baseten`: `bun test backend/llm-services/baseten/`
8. `@wisewords/service-openai`: `bun test backend/llm-services/openai/`
9. `@wisewords/service-anthropic`: `bun test backend/llm-services/anthropic/`
10. `@wisewords/service-google-gemini-paid`: `bun test backend/llm-services/google-gemini-paid/`
11. `@wisewords/service-xai`: `bun test backend/llm-services/xai/`
12. `@wisewords/service-mistral-paid`: `bun test backend/llm-services/mistral-paid/`
13. `@wisewords/service-deepseek`: `bun test backend/llm-services/deepseek/`
14. `@wisewords/service-openrouter-paid`: `bun test backend/llm-services/openrouter-paid/`
15. `@wisewords/service-requesty-paid`: `bun test backend/llm-services/requesty-paid/`
16. `@wisewords/service-poe`: `bun test backend/llm-services/poe/`
17. `@wisewords/service-bedrock`: `bun test backend/llm-services/bedrock/`
18. `@wisewords/service-azure-ai`: `bun test backend/llm-services/azure-ai/`
19. `@wisewords/service-nebius`: `bun test backend/llm-services/nebius/`
20. `@wisewords/service-coreweave`: `bun test backend/llm-services/coreweave/`

---

## 7. Search Microservices (17 Services)

- **Free Tier Services:**
  - `@wisewords/service-google-cse`: `bun test backend/search-services/google-cse/`
  - `@wisewords/service-tavily-free`: `bun test backend/search-services/tavily-free/`
  - `@wisewords/service-firecrawl-free`: `bun test backend/search-services/firecrawl-free/`
  - `@wisewords/service-brave-free`: `bun test backend/search-services/brave-free/`
  - `@wisewords/service-serpapi`: `bun test backend/search-services/serpapi/`
  - `@wisewords/service-duckduckgo`: `bun test backend/search-services/duckduckgo/`

- **Paid Tier Services:**
  - `tavily-paid`, `exa-ai`, `firecrawl-paid`, `perplexity-sonar`, `brave-paid`, `google-cse-paid`, `bing-search`, `vertex-ai-search`, `you-com`, `linkup`, `parallel-ai`
  - Run test command: `bun test backend/search-services/<service-name>/`
