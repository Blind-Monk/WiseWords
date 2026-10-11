# Wise Words LLM Service: google-ai-studio

LLM provider microservice implementing the ILlmProvider contract for google-ai-studio.

---

## 1. Directory Path
`backend/llm-services/google-ai-studio`

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
bun run backend/llm-services/google-ai-studio/src/index.ts

# Using npm script:
npm run dev --workspace=@wisewords/google-ai-studio
```

---

## 4. Running Unit & Contract Tests

```bash
# Run tests for this package using Bun:
bun test backend/llm-services/google-ai-studio/

# OR using Jest:
npx jest backend/llm-services/google-ai-studio/
```

---

## 5. Integration Guide

Import this microservice package into other microservices or orchestration routers using ES Modules (`"type": "module"`):

```typescript
import { Provider_google_ai_studio } from '@wisewords/google-ai-studio';

const provider = new Provider_google_ai_studio();
```

---

## 6. Deployment & Configuration

Configure this service in the central `config.json` at the repository root. Inject relevant API keys via environment variables specified in `apiKeyEnv`.
