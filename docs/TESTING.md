# Wise Words Testing Strategy

The test suite contains unit and integration tests across all microservices and shared packages:

```bash
# Run all workspace tests
npm test

# Run tests for shared libraries
npx jest backend/shared/

# Run tests for orchestration routers
npx jest backend/orchestration/

# Run tests for API gateway
npx jest backend/gateway/wisewords-engine/
```
