# Wise Words Step-by-Step Production Deployment Command Guide

This guide provides step-by-step commands for deploying Wise Words using Docker, Docker Compose, or standalone Node.js environments.

---

## 1. Docker Compose Deployment (Recommended)

### Step 1: Prepare Production Configuration
Create `config.json` at repo root (`/app/config.json` inside container):
```bash
cp config.example.json config.json
```

### Step 2: Set Environment Secrets
Export API keys into your terminal or `.env` file:
```bash
export GROQ_API_KEY="your-groq-api-key"
export GOOGLE_AI_STUDIO_API_KEY="your-google-ai-key"
export OPENAI_API_KEY="your-openai-api-key"
export ANTHROPIC_API_KEY="your-anthropic-key"
```

### Step 3: Launch Containers in Background
Run `docker-compose` to build images and spawn PostgreSQL, Ollama, and Gateway:
```bash
docker-compose up -d --build
```

### Step 4: Verify Running Services
```bash
# List container health
docker-compose ps

# Output:
# Name                 Command                  State    Ports
# wisewords-engine     npm run dev              Up       0.0.0.0:8080->8080/tcp
# wisewords-postgres   docker-entrypoint.sh     Up       0.0.0.0:5432->5432/tcp
# wisewords-ollama     /bin/ollama serve        Up       0.0.0.0:11434->11434/tcp
```

### Step 5: Test Endpoint Health
```bash
curl -X GET http://localhost:8080/v1/health
# Response: {"status":"ok","service":"wisewords-engine"}
```

---

## 2. Standalone Docker Image Build & Run Commands

If you wish to run only the API Gateway container separately:

```bash
# Build standalone Docker image
docker build -t wisewords-engine:1.0.0 .

# Run container binding port 8080 and mounting config.json
docker run -d \
  --name wisewords-gateway \
  -p 8080:8080 \
  -v $(pwd)/config.json:/app/config.json \
  -e PORT=8080 \
  -e GROQ_API_KEY="your-key" \
  wisewords-engine:1.0.0
```

---

## 3. Stopping and Cleaning Container Resources

```bash
# Stop and remove containers
docker-compose down

# Stop, remove containers, and purge PostgreSQL / Ollama data volumes
docker-compose down -v
```
