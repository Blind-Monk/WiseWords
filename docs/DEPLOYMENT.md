# Wise Words Production Deployment Guide

---

## 1. Monorepo Architecture Overview for Deployment

All microservices (30 LLM services, 17 Search services, 9 shared libraries, gateway engine, orchestration routers, RAG & MCP extensions) under `backend/` share a common Bun/Node.js entry point:
`backend/gateway/wisewords-engine/src/index.ts`.

When deployed, this single lightweight gateway process coordinates all workspace packages, handles routing, health checks, list APIs (`/api/v1/list/llm`, `/api/v1/list/searchapi`), circuit breaking, and query execution.

---

## 2. Production Launch Options

### Method 1: Standalone Bun Execution
For direct VM or server deployments:

```bash
# Install root monorepo workspace dependencies
bun install

# Start production gateway engine
NODE_ENV=production PORT=8080 bun run backend/gateway/wisewords-engine/src/index.ts
```

### Method 2: Docker Container Deployment

```bash
# Build multi-stage production Docker image
docker build -t wisewords-engine:latest .

# Run Docker container with environment variable secret injections
docker run -d \
  --name wisewords-gateway \
  -p 8080:8080 \
  -e NODE_ENV=production \
  -e PORT=8080 \
  -e OPENAI_API_KEY="your-openai-key" \
  -e ANTHROPIC_API_KEY="your-anthropic-key" \
  wisewords-engine:latest
```

### Method 3: Docker Compose Cluster
For complete production stack including PostgreSQL database and fallback Ollama service:

```bash
# Launch production compose stack
docker-compose up -d --build

# Verify running services
docker-compose ps
```

---

## 3. Production Health Checks & Monitoring

```bash
# Health Check Verification
curl http://localhost:8080/v1/health

# Prometheus Metrics Endpoint
curl http://localhost:8080/metrics
```
