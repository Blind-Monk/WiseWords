# Wise Words Production Deployment Reference

---

## 1. Docker Compose Production Launch

```bash
# Path: / (Repository Root)
docker-compose up -d --build
```

### Services Launched:
- `wisewords-engine`: Express Gateway listening on port 8080
- `wisewords-postgres`: PostgreSQL 16 on port 5432 with `backend/shared/db/schema.sql` initialized
- `wisewords-ollama`: Ollama server listening on port 11434

---

## 2. Health Verification

```bash
curl http://localhost:8080/v1/health
```
