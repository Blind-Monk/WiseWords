# Wise Words Single Configuration & Environment Guide

The platform reads runtime settings from `config.json` at the repository root and merges environment variable overrides dynamically.

---

## 1. Central Configuration (`config.json`)

Top-level sections and detailed parameters:

- **`engine`**:
  - `port`: HTTP server listening port (default: `8080`). Overridden by `PORT` environment variable.
  - `host`: Host interface binding (default: `0.0.0.0`).
  - `logLevel`: Logging verbosity (`info`, `debug`, `warn`, `error`).
  - `timeoutMs`: Request handling timeout limit in milliseconds.

- **`llm`**:
  - `free`: Dictionary of enabled free LLM microservice providers and default model arrays.
  - `paid`: Dictionary of enabled paid LLM microservice providers and default model arrays.
  - `fallback`: Configuration for local Ollama fallback service (`baseUrl`, `defaultModel`).

- **`search`**:
  - `free`: Dictionary of enabled free grounding search providers (e.g. `google-cse`, `tavily-free`).
  - `paid`: Dictionary of enabled paid search API providers (e.g. `tavily-paid`, `serpapi`, `brave-paid`).

- **`rag`**:
  - `enabled`: Boolean flag enabling RAG document retrieval context injection.
  - `vectorStore`: Path or connection string for vector database.

- **`mcp`**:
  - `enabled`: Boolean flag enabling Model Context Protocol tool execution.
  - `servers`: List of configured MCP tool server endpoints.

---

## 2. Environment Variables & Secret Injections

No secrets are hardcoded in source code or `config.json`. Inject keys at runtime:

| Variable Name | Description | Default / Example |
| :--- | :--- | :--- |
| `PORT` | Engine HTTP Server Listening Port | `8080` |
| `NODE_ENV` | Environment state (`development` or `production`) | `development` |
| `OLLAMA_BASE_URL` | Local fallback Ollama endpoint URL | `http://localhost:11434` |
| `OLLAMA_DEFAULT_MODEL` | Local fallback Ollama model | `llama3` |
| `OPENAI_API_KEY` | OpenAI Paid Provider Key | `sk-...` |
| `ANTHROPIC_API_KEY` | Anthropic Paid Provider Key | `sk-ant-...` |
| `GOOGLE_AI_STUDIO_API_KEY` | Google AI Studio Free Provider Key | `AIzaSy...` |
| `GROQ_API_KEY` | Groq Provider Key | `gsk_...` |
| `TAVILY_API_KEY` | Tavily Search API Key | `tvly-...` |
