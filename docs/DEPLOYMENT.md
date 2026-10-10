# Wise Words Step-by-Step Production Deployment Guide

This guide describes how to deploy Wise Words in production using Docker Compose or Kubernetes.

---

## 1. Docker Compose Production Deployment

### Step 1: Configure Environment Variables
Copy `config.example.json` to `config.json` and set production API keys:
```bash
cp config.example.json config.json
export GROQ_API_KEY="your-key"
export GOOGLE_AI_STUDIO_API_KEY="your-key"
```

### Step 2: Build and Launch Containers
```bash
docker-compose up -d --build
```

### Step 3: Verify Container Health
```bash
docker-compose ps
curl http://localhost:8080/v1/health
```

---

## 2. PostgreSQL & Ollama Persistence

- PostgreSQL stores schema and vector extensions at `pgdata`.
- Ollama models persist at `ollama_data`.
