# Wise Words Complete Providers & Services Reference

This document lists every service package along with dev launch, testing, and deployment details.

---

## 1. Free LLM Services (11 Services + 1 Fallback)

1. **`google-ai-studio`** (`backend/llm-services/google-ai-studio`)
   - Dev: `bun run backend/llm-services/google-ai-studio/src/index.ts`
   - Test: `bun test backend/llm-services/google-ai-studio/`

2. **`groq`** (`backend/llm-services/groq`)
   - Dev: `bun run backend/llm-services/groq/src/index.ts`
   - Test: `bun test backend/llm-services/groq/`

3. **`cerebras`** (`backend/llm-services/cerebras`)
   - Dev: `bun run backend/llm-services/cerebras/src/index.ts`
   - Test: `bun test backend/llm-services/cerebras/`

4. **`nvidia-nim`** (`backend/llm-services/nvidia-nim`)
   - Dev: `bun run backend/llm-services/nvidia-nim/src/index.ts`
   - Test: `bun test backend/llm-services/nvidia-nim/`

5. **`mistral`** (`backend/llm-services/mistral`)
   - Dev: `bun run backend/llm-services/mistral/src/index.ts`
   - Test: `bun test backend/llm-services/mistral/`

6. **`openrouter-free`** (`backend/llm-services/openrouter-free`)
   - Dev: `bun run backend/llm-services/openrouter-free/src/index.ts`
   - Test: `bun test backend/llm-services/openrouter-free/`

7. **`cohere`** (`backend/llm-services/cohere`)
   - Dev: `bun run backend/llm-services/cohere/src/index.ts`
   - Test: `bun test backend/llm-services/cohere/`

8. **`llm7`** (`backend/llm-services/llm7`)
   - Dev: `bun run backend/llm-services/llm7/src/index.ts`
   - Test: `bun test backend/llm-services/llm7/`

9. **`z-ai`** (`backend/llm-services/z-ai`)
   - Dev: `bun run backend/llm-services/z-ai/src/index.ts`
   - Test: `bun test backend/llm-services/z-ai/`

10. **`requesty`** (`backend/llm-services/requesty`)
    - Dev: `bun run backend/llm-services/requesty/src/index.ts`
    - Test: `bun test backend/llm-services/requesty/`

11. **`ollama-local`** (`backend/llm-services/ollama-local`)
    - Dev: `bun run backend/llm-services/ollama-local/src/index.ts`
    - Test: `bun test backend/llm-services/ollama-local/`

---

## 2. Paid LLM Services (19 Services)

- `groq-paid`, `cerebras-paid`, `sambanova`, `together`, `fireworks`, `deepinfra`, `baseten`, `openai`, `anthropic`, `google-gemini-paid`, `xai`, `mistral-paid`, `deepseek`, `openrouter-paid`, `requesty-paid`, `poe`, `bedrock`, `azure-ai`, `nebius`, `coreweave`
- **Test:** `bun test backend/llm-services/<service-name>/`

---

## 3. Search Services (17 Services)

- **Free Tier:** `google-cse`, `tavily-free`, `firecrawl-free`, `brave-free`, `serpapi`, `duckduckgo`
- **Paid Tier:** `tavily-paid`, `exa-ai`, `firecrawl-paid`, `perplexity-sonar`, `brave-paid`, `google-cse-paid`, `bing-search`, `vertex-ai-search`, `you-com`, `linkup`, `parallel-ai`
- **Test:** `bun test backend/search-services/<service-name>/`
