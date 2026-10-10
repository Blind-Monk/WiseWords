# Wise Words Comprehensive Testing Guide (Bun & Jest)

This guide details executing test suites across all monorepo packages using **Bun Test** or **Jest**.

---

## 1. Running Monorepo Tests with Bun

Bun includes a ultra-fast native test runner that supports TypeScript out of the box without compilation steps.

```bash
# Run all tests across the monorepo with Bun
bun test

# Run tests for all shared libraries
bun test backend/shared/

# Run tests for specific shared module
bun test backend/shared/config-loader/
bun test backend/shared/circuit-breaker/
bun test backend/shared/rate-limiter/

# Run tests for LLM microservices
bun test backend/llm-services/
bun test backend/llm-services/google-ai-studio/
bun test backend/llm-services/groq/

# Run tests for Search microservices
bun test backend/search-services/
bun test backend/search-services/google-cse/

# Run tests for Orchestration Routers
bun test backend/orchestration/

# Run tests for API Gateway
bun test backend/gateway/wisewords-engine/
```

---

## 2. Running Monorepo Tests with Node.js & Jest

```bash
# Run all tests with Jest
npx jest

# Run tests for specific directory
npx jest backend/shared/
npx jest backend/orchestration/
npx jest backend/gateway/wisewords-engine/
```
