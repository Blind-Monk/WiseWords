# Wise Words Search Router

Search engine router with round-robin candidate selection and DuckDuckGo throttled fallback.

---

## 1. Directory Path
`backend/orchestration/search-router`

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
bun run backend/orchestration/search-router/src/index.ts

# Using npm script:
npm run dev --workspace=@wisewords/search-router
```

---

## 4. Running Unit & Contract Tests

```bash
# Run tests for this package using Bun:
bun test backend/orchestration/search-router/

# OR using Jest:
npx jest backend/orchestration/search-router/
```

---

## 5. Integration Guide

Import this microservice package into other microservices or orchestration routers using ES Modules (`"type": "module"`):

```typescript
import { Provider_search_router } from '@wisewords/search-router';

const provider = new Provider_search_router();
```

---

## 6. Deployment & Configuration

Configure this service in the central `config.json` at the repository root. Inject relevant API keys via environment variables specified in `apiKeyEnv`.
