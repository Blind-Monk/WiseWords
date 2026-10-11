# Wise Words RAG Extension Service

Retrieval-Augmented Generation service providing chunking, embeddings, and vector retrieval.

---

## 1. Directory Path
`backend/extensions/rag-service`

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
bun run backend/extensions/rag-service/src/index.ts

# Using npm script:
npm run dev --workspace=@wisewords/rag-service
```

---

## 4. Running Unit & Contract Tests

```bash
# Run tests for this package using Bun:
bun test backend/extensions/rag-service/

# OR using Jest:
npx jest backend/extensions/rag-service/
```

---

## 5. Integration Guide

Import this microservice package into other microservices or orchestration routers using ES Modules (`"type": "module"`):

```typescript
import { Provider_rag_service } from '@wisewords/rag-service';

const provider = new Provider_rag_service();
```

---

## 6. Deployment & Configuration

Configure this service in the central `config.json` at the repository root. Inject relevant API keys via environment variables specified in `apiKeyEnv`.
