# Wise Words Shared Library: @wisewords/db-client

Core shared microservice library providing db-client utilities.

---

## 1. Directory Path
`backend/shared/db-client`

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
bun run backend/shared/db-client/src/index.ts

# Using npm script:
npm run dev --workspace=@wisewords/db-client
```

---

## 4. Running Unit & Contract Tests

```bash
# Run tests for this package using Bun:
bun test backend/shared/db-client/

# OR using Jest:
npx jest backend/shared/db-client/
```

---

## 5. Integration Guide

Import this microservice package into other microservices or orchestration routers using ES Modules (`"type": "module"`):

```typescript
import { Provider_db_client } from '@wisewords/db-client';

const provider = new Provider_db_client();
```

---

## 6. Deployment & Configuration

Configure this service in the central `config.json` at the repository root. Inject relevant API keys via environment variables specified in `apiKeyEnv`.
