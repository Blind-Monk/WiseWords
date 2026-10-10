# Wise Words Complete End-to-End Development & Execution Guide

This document provides explicit, step-by-step instructions on **installing, configuring, launching, and verifying all microservices end-to-end** using Bun or Node.js/npm.

---

## 1. Directory Path Quick Reference

| Action / File | Directory Path |
|---|---|
| **Repository Root** | `/` (e.g. `/app` or `wisewords/`) |
| **Monorepo Workspace Install** | `/` (Repository Root) |
| **Config Creation** | Copy `config.example.json` → `config.json` at `/` (Repository Root) |
| **Database Schema** | `backend/shared/db/schema.sql` |
| **API Gateway Entrypoint** | `backend/gateway/wisewords-engine/src/index.ts` |
| **Frontend Web UI Entrypoint** | `frontend/src/index.html` |
| **Docker Stack File** | `docker-compose.yml` at `/` (Repository Root) |

---

## 2. Step-by-Step End-to-End Setup & Launch

### Step 1: Install All Monorepo Workspaces in One Command
Navigate to the repository root directory (`/`) and execute `bun install`. This single command installs and links dependencies for all 30 LLM services, 17 Search services, 9 shared packages, orchestration routers, extensions, gateway engine, and frontend.

```bash
# Path: / (Repository Root)
cd /path/to/wisewords

# Command: Single command install across all packages and microservices
bun install
# OR using npm:
npm install
```

---

### Step 2: Initialize Runtime Configuration File
From the repository root (`/`), copy `config.example.json` to `config.json`:

```bash
# Path: / (Repository Root)
cp config.example.json config.json
```

---

### Step 3: Build Monorepo Workspace Packages
Build all TypeScript source files across shared libraries and microservices:

```bash
# Path: / (Repository Root)
bun run build
# OR using npm:
npm run build
```

---

### Step 4: Start Backend Database & Fallback Services (Optional Docker Mode)
If you wish to run PostgreSQL (`pgvector`) and local Ollama server:

```bash
# Path: / (Repository Root)
docker-compose up -d postgres ollama
```

---

### Step 5: Launch the Wise Words API Gateway Engine
Start the central gateway engine microservice on port `8080`:

```bash
# Path: / (Repository Root)
bun run backend/gateway/wisewords-engine/src/index.ts

# OR using npm from root:
npm run dev

# OR directly from gateway directory:
cd backend/gateway/wisewords-engine && npm run dev
```

---

### Step 6: Serve and Launch the Frontend Application
To launch the Angular web user interface on port `4200`:

```bash
# Path: / (Repository Root)
bun run --hot serve frontend/src --port 4200

# OR using npx:
npx serve frontend/src -p 4200
```

---

## 3. End-to-End Functional Verification

### Verification Option A: Browser Frontend
1. Open your browser and navigate to `http://localhost:4200` (or double click `frontend/src/index.html`).
2. Type a prompt query (e.g. *"Explain quantum computing in simple terms"*).
3. Select **Free** or **Paid** LLM tier.
4. Toggle **Enable Grounding Search** if web grounding is required.
5. Click **Send Query** and verify response content, provider badge, latency metadata, and fallback indicators.

---

### Verification Option B: cURL CLI Command
Execute an end-to-end API test request against the API Gateway:

```bash
curl -X POST http://localhost:8080/v1/query \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "What are the key benefits of Node.js microservices?",
    "llmType": "free",
    "search": true,
    "searchType": "free"
  }'
```

**Expected Response JSON:**
```json
{
  "content": "Response from google-ai-studio using model gemini-1.5-flash-lite...",
  "provider": "google-ai-studio",
  "model": "gemini-1.5-flash-lite",
  "latencyMs": 14,
  "fallback": false,
  "tokensUsed": { "promptTokens": 10, "completionTokens": 20, "totalTokens": 30 },
  "context": {
    "search": {
      "provider": "google-cse",
      "results": [...]
    }
  }
}
```
