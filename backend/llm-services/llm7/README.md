# Wise Words LLM Service: llm7

LLM provider microservice implementing the ILlmProvider contract for llm7.

---

## 1. Directory Path
`backend/llm-services/llm7`

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
bun run backend/llm-services/llm7/src/index.ts

# Using npm script:
npm run dev --workspace=@wisewords/llm7
```

---

## 4. Running Unit & Contract Tests

```bash
# Run tests for this package using Bun:
bun test backend/llm-services/llm7/

# OR using Jest:
npx jest backend/llm-services/llm7/
```

---

## 5. Integration Guide

Import this microservice package into other microservices or orchestration routers using ES Modules (`"type": "module"`):

```typescript
import { Provider_llm7 } from '@wisewords/llm7';

const provider = new Provider_llm7();
```

---

## 6. Deployment & Configuration

Configure this service in the central `config.json` at the repository root. Inject relevant API keys via environment variables specified in `apiKeyEnv`.
