# Wise Words MCP Extension Service

Model Context Protocol adapter service for discovering and executing external tools.

---

## 1. Directory Path
`backend/extensions/mcp-service`

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
bun run backend/extensions/mcp-service/src/index.ts

# Using npm script:
npm run dev --workspace=@wisewords/mcp-service
```

---

## 4. Running Unit & Contract Tests

```bash
# Run tests for this package using Bun:
bun test backend/extensions/mcp-service/

# OR using Jest:
npx jest backend/extensions/mcp-service/
```

---

## 5. Integration Guide

Import this microservice package into other microservices or orchestration routers using ES Modules (`"type": "module"`):

```typescript
import { Provider_mcp_service } from '@wisewords/mcp-service';

const provider = new Provider_mcp_service();
```

---

## 6. Deployment & Configuration

Configure this service in the central `config.json` at the repository root. Inject relevant API keys via environment variables specified in `apiKeyEnv`.
