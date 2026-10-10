# Wise Words Production Deployment Guide (Bun & Docker)

This guide describes step-by-step production deployment using **Bun** and **Docker Compose**.

---

## 1. Bun Production Launch Commands

### Step 1: Set Central Config Path & Environment Variables
- Primary Configuration File: `config.json` (Repository Root)
```bash
cp config.example.json config.json
export WISE_WORDS_CONFIG="$(pwd)/config.json"
export GROQ_API_KEY="your-groq-key"
export GOOGLE_AI_STUDIO_API_KEY="your-google-key"
```

### Step 2: Install Production Dependencies with Bun
```bash
bun install --production
```

### Step 3: Start Gateway Service via Bun
Entrypoint File Path: `backend/gateway/wisewords-engine/src/index.ts`
```bash
bun run backend/gateway/wisewords-engine/src/index.ts
```

---

## 2. Docker & Docker Compose Deployment

### Step 1: Multi-Container Stack Launch
File Path: `docker-compose.yml` (Repository Root)
```bash
docker-compose up -d --build
```

### Step 2: Health Check
```bash
curl http://localhost:8080/v1/health
```
