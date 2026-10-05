# Production Deployment Guide

## Docker Compose Deployment

A complete production-ready stack is defined in `docker-compose.yml`:
- `wisewords-engine`: API Gateway Microservice
- `postgres`: PostgreSQL 16 with `pgvector`
- `ollama`: Fallback local LLM engine

### Launching Docker Stack
```bash
docker-compose up -d --build
```
