# Wise Words Shared Library: @wisewords/rate-limiter

Core shared microservice library providing rate-limiter utilities.

---

## 1. Directory Path
`backend/shared/rate-limiter`

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
bun run backend/shared/rate-limiter/src/index.ts

# Using npm script:
npm run dev --workspace=@wisewords/rate-limiter
```

---

## 4. Running Unit & Contract Tests

```bash
# Run tests for this package using Bun:
bun test backend/shared/rate-limiter/

# OR using Jest:
npx jest backend/shared/rate-limiter/
```

---

## 5. Integration Guide

Import this microservice package into other microservices or orchestration routers using ES Modules (`"type": "module"`):

```typescript
import { Provider_rate_limiter } from '@wisewords/rate-limiter';

const provider = new Provider_rate_limiter();
```

---

## 6. Deployment & Configuration

Configure this service in the central `config.json` at the repository root. Inject relevant API keys via environment variables specified in `apiKeyEnv`.
