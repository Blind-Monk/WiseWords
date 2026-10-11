# Wise Words API Gateway Engine

Primary Express API gateway microservice orchestrating LLM, Search, RAG, and MCP operations.

---

## 1. Directory Path
`backend/gateway/wisewords-engine`

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
bun run backend/gateway/wisewords-engine/src/index.ts

# Using npm script:
npm run dev --workspace=@wisewords/wisewords-engine
```

---

## 4. Running Unit & Contract Tests

```bash
# Run tests for this package using Bun:
bun test backend/gateway/wisewords-engine/

# OR using Jest:
npx jest backend/gateway/wisewords-engine/
```

---

## 5. Integration Guide

Import this microservice package into other microservices or orchestration routers using ES Modules (`"type": "module"`):

```typescript
import { Provider_wisewords_engine } from '@wisewords/wisewords-engine';

const provider = new Provider_wisewords_engine();
```

---

## 6. Deployment & Configuration

Configure this service in the central `config.json` at the repository root. Inject relevant API keys via environment variables specified in `apiKeyEnv`.
