# Wise Words Test Execution Guide

All test suites use Jest or Bun test runners.

---

## 1. Single Command Test Run (Entire Monorepo)

```bash
# Run all workspace test suites
npx jest
# OR using Bun:
bun test
```

---

## 2. Package-by-Package Test Execution

```bash
# Shared Packages
npx jest backend/shared/config-loader/
npx jest backend/shared/circuit-breaker/
npx jest backend/shared/rate-limiter/

# Orchestration & Gateway
npx jest backend/orchestration/
npx jest backend/gateway/wisewords-engine/

# Extensions
npx jest backend/extensions/
```
