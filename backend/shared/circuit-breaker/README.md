# Wise Words Shared Library: @wisewords/circuit-breaker

Core shared microservice library providing circuit-breaker utilities.

---

## 1. Directory Path
`backend/shared/circuit-breaker`

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
bun run backend/shared/circuit-breaker/src/index.ts

# Using npm script:
npm run dev --workspace=@wisewords/circuit-breaker
```

---

## 4. Running Unit & Contract Tests

```bash
# Run tests for this package using Bun:
bun test backend/shared/circuit-breaker/

# OR using Jest:
npx jest backend/shared/circuit-breaker/
```

---

## 5. Integration Guide

Import this microservice package into other microservices or orchestration routers using ES Modules (`"type": "module"`):

```typescript
import { Provider_circuit_breaker } from '@wisewords/circuit-breaker';

const provider = new Provider_circuit_breaker();
```

---

## 6. Deployment & Configuration

Configure this service in the central `config.json` at the repository root. Inject relevant API keys via environment variables specified in `apiKeyEnv`.
