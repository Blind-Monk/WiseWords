# Wise Words Shared Library: @wisewords/config-loader

Core shared microservice library providing config-loader utilities.

---

## 1. Directory Path
`backend/shared/config-loader`

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
bun run backend/shared/config-loader/src/index.ts

# Using npm script:
npm run dev --workspace=@wisewords/config-loader
```

---

## 4. Running Unit & Contract Tests

```bash
# Run tests for this package using Bun:
bun test backend/shared/config-loader/

# OR using Jest:
npx jest backend/shared/config-loader/
```

---

## 5. Integration Guide

Import this microservice package into other microservices or orchestration routers using ES Modules (`"type": "module"`):

```typescript
import { Provider_config_loader } from '@wisewords/config-loader';

const provider = new Provider_config_loader();
```

---

## 6. Deployment & Configuration

Configure this service in the central `config.json` at the repository root. Inject relevant API keys via environment variables specified in `apiKeyEnv`.
