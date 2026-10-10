# Wise Words Configuration Reference Guide

The platform reads its runtime setup from a single `config.json` located at the repository root.

---

## 1. Schema Structure (`config.schema.json`)

The config file is validated on startup by `@wisewords/config-loader`.

```json
{
  "engine": {
    "port": 8080,
    "host": "0.0.0.0",
    "logLevel": "info",
    "timeoutMs": 30000
  },
  "routing": {
    "llm": {
      "strategy": "round-robin",
      "maxRetries": 3,
      "circuitBreaker": {
        "failureThreshold": 5,
        "resetTimeoutMs": 30000,
        "halfOpenTrials": 2
      },
      "fallbackChain": ["ollama-local"]
    },
    "search": {
      "strategy": "round-robin",
      "maxRetries": 3,
      "fallbackChain": ["duckduckgo"],
      "duckduckgoThrottleMs": 60000
    }
  },
  "database": {
    "host": "localhost",
    "port": 5432,
    "user": "postgres",
    "password": "postgres",
    "database": "llm_platform"
  }
}
```

---

## 2. Environment Variables Overrides

API keys should be passed through environment variables named in `config.json` (`apiKeyEnv`):

| Provider | Environment Variable |
|---|---|
| Google AI Studio | `GOOGLE_AI_STUDIO_API_KEY` |
| Groq | `GROQ_API_KEY` |
| OpenAI | `OPENAI_API_KEY` |
| Anthropic | `ANTHROPIC_API_KEY` |
| Google CSE | `GOOGLE_CSE_API_KEY` |
| Tavily | `TAVILY_API_KEY` |
