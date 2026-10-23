# Wise Words Single Configuration Guide

The platform reads all runtime settings from `config.json` at the repository root.

---

## 1. Schema Validation (`config.schema.json`)

On startup, `@wisewords/config-loader` parses and validates `config.json` against `config.schema.json`.

Top-level sections:
- `engine`: port (default 8080), host, logLevel, timeoutMs
- `routing`: strategy (`round-robin`), maxRetries, circuitBreaker parameters, fallbackChain
- `database`: PostgreSQL connection settings
- `llm`: `free` and `paid` provider dictionaries
- `search`: `free` and `paid` provider dictionaries
- `rag`: enabled flag, embedding provider, vector store
- `mcp`: enabled flag, servers array

---

## 2. Environment Variables

API keys are injected via environment variables matching `apiKeyEnv` in `config.json`:
- `GOOGLE_AI_STUDIO_API_KEY`
- `GROQ_API_KEY`
- `OPENAI_API_KEY`
- `ANTHROPIC_API_KEY`
- `TAVILY_API_KEY`
