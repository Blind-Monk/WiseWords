# Wise Words Testing Step-by-Step Guide

This guide details how to execute unit, integration, and end-to-end tests across the Wise Words monorepo.

---

## 1. Running Unit Tests

Unit tests use Jest and TS-Jest with mocked HTTP responses (`nock`).

```bash
# Run all workspace test suites
npm test

# Test individual shared packages
npx jest backend/shared/config-loader/
npx jest backend/shared/circuit-breaker/
npx jest backend/shared/rate-limiter/

# Test LLM and Search microservices
npx jest backend/llm-services/
npx jest backend/search-services/
```

---

## 2. Running Router & Gateway Integration Tests

```bash
# Test LLM Router & Search Router orchestration
npx jest backend/orchestration/

# Test Express API Gateway endpoints
npx jest backend/gateway/wisewords-engine/
```

---

## 3. Frontend Verification with Playwright

Run visual UI test scripts in Playwright:

```bash
python3 /home/jules/verification/verify_frontend.py
```
