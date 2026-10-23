# Wise Words Frontend Application

Web chat interface supporting provider pickers, search grounding toggles, and fallback metadata.

---

## 1. Directory Path
`frontend`

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
bun run frontend/src/index.ts

# Using npm script:
npm run dev --workspace=@wisewords/frontend
```

---

## 4. Running Unit & Contract Tests

```bash
# Run tests for this package using Bun:
bun test frontend/

# OR using Jest:
npx jest frontend/
```

---

## 5. Integration Guide

Import this microservice package into other microservices or orchestration routers using ES Modules (`"type": "module"`):

```typescript
import { Provider_frontend } from '@wisewords/frontend';

const provider = new Provider_frontend();
```

---

## 6. Deployment & Configuration

Configure this service in the central `config.json` at the repository root. Inject relevant API keys via environment variables specified in `apiKeyEnv`.
