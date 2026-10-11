# Wise Words Search Service: firecrawl-paid

Search provider microservice implementing the ISearchProvider contract for firecrawl-paid.

---

## 1. Directory Path
`backend/search-services/firecrawl-paid`

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
bun run backend/search-services/firecrawl-paid/src/index.ts

# Using npm script:
npm run dev --workspace=@wisewords/firecrawl-paid
```

---

## 4. Running Unit & Contract Tests

```bash
# Run tests for this package using Bun:
bun test backend/search-services/firecrawl-paid/

# OR using Jest:
npx jest backend/search-services/firecrawl-paid/
```

---

## 5. Integration Guide

Import this microservice package into other microservices or orchestration routers using ES Modules (`"type": "module"`):

```typescript
import { Provider_firecrawl_paid } from '@wisewords/firecrawl-paid';

const provider = new Provider_firecrawl_paid();
```

---

## 6. Deployment & Configuration

Configure this service in the central `config.json` at the repository root. Inject relevant API keys via environment variables specified in `apiKeyEnv`.
