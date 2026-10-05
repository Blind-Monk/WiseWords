# Wise Words Configuration Guide

All configuration is central and managed via a single `config.json` at the repository root.

## Hot-Reload & Hierarchy
1. `config.json` provides structural definitions, defaults, timeouts, and rate limits.
2. Environment variables dynamically populate API keys (e.g. `GROQ_API_KEY`, `GOOGLE_AI_STUDIO_API_KEY`).
3. Validation is automatically enforced against `config.schema.json`.

## Enabling/Disabling Providers
Set `"enabled": true` or `"enabled": false` inside `config.json` for any LLM or search provider under the `"llm"` or `"search"` sections.
