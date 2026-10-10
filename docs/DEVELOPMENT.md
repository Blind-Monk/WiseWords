# Wise Words Development Guide (Bun & Node.js Support)

This step-by-step guide details how to develop, test, and run every microservice and package in Wise Words using either **Bun** or **Node.js/npm**.

---

## 1. Environment Prerequisites

You can use either **Bun** (recommended for speed) or **Node.js/npm**:
- **Bun:** v1.1.0 or higher (`bun -v`)
- **Node.js:** v20.x or higher (`node -v`)

---

## 2. Monorepo Setup Commands

### Step 1: Install Workspace Dependencies
```bash
# Using Bun (Fastest)
bun install

# Using Node.js/npm
npm install
```

### Step 2: Configure Central Runtime File
- File Path: `config.json` (Repository Root)
```bash
cp config.example.json config.json
```

### Step 3: Build Monorepo Workspaces
```bash
# Using Bun
bun run build

# Using Node.js/npm
npm run build
```

---

## 3. Running Services in Development Mode with Bun & Node.js

### 3.1 Running the Main Gateway (`backend/gateway/wisewords-engine/src/index.ts`)

```bash
# Using Bun (Instant TS Execution without build)
bun run backend/gateway/wisewords-engine/src/index.ts

# Or using npm workspace script
npm run dev
```

---

### 3.2 Running & Testing Individual Microservices One-by-One

#### Shared Packages (`backend/shared/`)
- **Config Loader:** `backend/shared/config-loader/src/index.ts`
  ```bash
  bun test backend/shared/config-loader/
  # or: npx jest backend/shared/config-loader/
  ```

- **Circuit Breaker:** `backend/shared/circuit-breaker/src/index.ts`
  ```bash
  bun test backend/shared/circuit-breaker/
  # or: npx jest backend/shared/circuit-breaker/
  ```

- **Rate Limiter:** `backend/shared/rate-limiter/src/index.ts`
  ```bash
  bun test backend/shared/rate-limiter/
  # or: npx jest backend/shared/rate-limiter/
  ```

#### LLM Microservices (`backend/llm-services/`)
- **Google AI Studio:** `backend/llm-services/google-ai-studio/src/index.ts`
  ```bash
  bun test backend/llm-services/google-ai-studio/
  ```

- **Groq:** `backend/llm-services/groq/src/index.ts`
  ```bash
  bun test backend/llm-services/groq/
  ```

- **OpenAI:** `backend/llm-services/openai/src/index.ts`
  ```bash
  bun test backend/llm-services/openai/
  ```

#### Search Microservices (`backend/search-services/`)
- **Google CSE Search:** `backend/search-services/google-cse/src/index.ts`
  ```bash
  bun test backend/search-services/google-cse/
  ```

---

## 4. Serving the Web Frontend (`frontend/src/index.html`)

```bash
# Using Bun to serve static frontend on port 4200
bun run --hot serve frontend/src --port 4200

# Or using npx
npx serve frontend/src -p 4200
```
Access the application at `http://localhost:4200`.
