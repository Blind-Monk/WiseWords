# Wise Words LLM Service: bedrock

LLM provider microservice implementing the ILlmProvider contract for bedrock.

---

## 1. Directory Path
`backend/llm-services/bedrock`

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
bun run backend/llm-services/bedrock/src/index.ts

# Using npm script:
npm run dev --workspace=@wisewords/bedrock
```

---

## 4. Running Unit & Contract Tests

```bash
# Run tests for this package using Bun:
bun test backend/llm-services/bedrock/

# OR using Jest:
npx jest backend/llm-services/bedrock/
```

---

## 5. Integration Guide

Import this microservice package into other microservices or orchestration routers using ES Modules (`"type": "module"`):

```typescript
import { Provider_bedrock } from '@wisewords/bedrock';

const provider = new Provider_bedrock();
```

---

## 6. Deployment & Configuration

Configure this service in the central `config.json` at the repository root. Inject relevant API keys via environment variables specified in `apiKeyEnv`.
