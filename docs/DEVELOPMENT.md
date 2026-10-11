# Wise Words Development & Execution Guide

---

## 1. Single Command Setup & Monorepo Installation

All 30 LLM microservices, 17 Search microservices, 9 shared libraries, gateway engine, extensions, and frontend are configured as npm workspaces in the root `package.json`.

```bash
# Path: / (Repository Root)
bun install
# OR:
npm install

# Initialize Config at Repository Root
cp config.example.json config.json

# Build Workspace Packages
bun run build
# OR:
npm run build
```

---

## 2. Running Backend Gateway & Frontend Interface

```bash
# Start API Gateway Server (Port 8080)
bun run backend/gateway/wisewords-engine/src/index.ts
# OR:
npm run dev

# Start Frontend UI (Port 4200)
npx serve frontend/src -p 4200
```

---

## 3. End-to-End Verification Command

```bash
curl -X POST http://localhost:8080/v1/query \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "Hello Wise Words Meta-AI Gateway",
    "llmType": "free",
    "search": false
  }'
```
