# Wise Words Detailed Local Development & Command Guide

This step-by-step guide walks through developing and running every individual service and package in the Wise Words repository.

---

## 1. Prerequisites & System Installation

Ensure the following tools are installed on your machine:
- **Node.js:** v20.x or higher (`node -v`)
- **npm:** v10.x or higher (`npm -v`)
- **Docker & Docker Compose:** Optional for containerized deployment (`docker -v`)

---

## 2. Step-by-Step Monorepo Setup

### Step 1: Clone & Navigate to Repository
```bash
git clone https://github.com/your-org/wisewords.git
cd wisewords
```

### Step 2: Install Workspace Dependencies
Execute from root directory to install packages for all npm workspaces:
```bash
npm install
```

### Step 3: Configure Runtime Configuration
Copy reference template `config.example.json` to primary config file `config.json`:
```bash
cp config.example.json config.json
```
Edit `config.json` if necessary to configure port, log level, timeouts, or provider enablement.

### Step 4: Build TypeScript Workspaces
Build all TypeScript source files into `dist/`:
```bash
npm run build
```

---

## 3. Running Services Individually in Development Mode

### 3.1 Running the API Gateway Microservice
```bash
# Option A: From root directory
npm run dev

# Option B: Navigate directly to wisewords-engine package
cd backend/gateway/wisewords-engine
npm run dev
```
The API Gateway server starts on port `8080` (or `PORT` environment variable).

---

### 3.2 Testing & Building Individual Microservices One-by-One

#### Shared Packages (`backend/shared/`)
```bash
# Build & Test config-loader
npm run build --workspace=@wisewords/config-loader
npx jest backend/shared/config-loader/

# Build & Test circuit-breaker
npm run build --workspace=@wisewords/circuit-breaker
npx jest backend/shared/circuit-breaker/

# Build & Test rate-limiter
npm run build --workspace=@wisewords/rate-limiter
npx jest backend/shared/rate-limiter/
```

#### LLM Microservices (`backend/llm-services/`)
```bash
# Google AI Studio Service
npm run build --workspace=@wisewords/service-google-ai-studio
npx jest backend/llm-services/google-ai-studio/

# Groq Service
npm run build --workspace=@wisewords/service-groq
npx jest backend/llm-services/groq/

# OpenAI Service
npm run build --workspace=@wisewords/service-openai
npx jest backend/llm-services/openai/
```

#### Search Microservices (`backend/search-services/`)
```bash
# Google CSE Search Service
npm run build --workspace=@wisewords/service-google-cse
npx jest backend/search-services/google-cse/

# Tavily Free Search Service
npm run build --workspace=@wisewords/service-tavily-free
npx jest backend/search-services/tavily-free/
```

---

## 4. Serving the Frontend Web Interface

To serve the web UI on port `4200`:

```bash
# Option 1: Serve directly with static server
npx serve frontend/src -p 4200

# Option 2: Open directly in browser
# Open file path: frontend/src/index.html
```
Navigate to `http://localhost:4200` to interact with the Wise Words gateway interface.
