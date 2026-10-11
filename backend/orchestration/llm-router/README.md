# Wise Words LLM Router

Intelligent LLM router applying round-robin, circuit breaking, rate limit checks, and Ollama fallback.

---

## 1. Directory Path
`backend/orchestration/llm-router`

---

## 2. Monorepo Setup & Installation
Dependencies for this workspace package are automatically installed when running `bun install` or `npm install` at the repository root.

```bash
# Install from root (installs all workspace packages)
bun install
```

---

## 3. Development Launch & Execution

To launch or develop this package individually:

```bash
# Using Bun (Instant Execution)
bun run backend/orchestration/llm-router/src/index.ts

# Using npm script:
npm run dev --workspace=@wisewords/llm-router
```

---

## 4. Running Unit & Contract Tests

```bash
# Run tests for this package using Bun:
bun test backend/orchestration/llm-router/

# OR using Jest:
npx jest backend/orchestration/llm-router/
```

---

## 5. Integration Guide

Import this microservice package into other microservices or orchestration routers using ES Modules (`"type": "module"`):

```typescript
import { Provider_llm_router } from '@wisewords/llm-router';

const provider = new Provider_llm_router();
```

---

## 6. Deployment & Configuration

Configure this service in the central `config.json` at the repository root. Inject relevant API keys via environment variables specified in `apiKeyEnv`.
