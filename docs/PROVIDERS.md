# Wise Words Individual Service Operations Guide

This guide provides explicit step-by-step instructions for **launching in development mode**, **testing**, and **deploying** every single microservice package in Wise Words.

---

## 1. LLM Microservices (`backend/llm-services/`)

### 1.1 Free LLM Services (11 Services + 1 Fallback)

#### 1. `google-ai-studio` (`backend/llm-services/google-ai-studio`)
- **Launch in Dev Mode:** `bun run backend/llm-services/google-ai-studio/src/index.ts` OR `npm run dev --workspace=@wisewords/service-google-ai-studio`
- **Run Tests:** `bun test backend/llm-services/google-ai-studio/` OR `npx jest backend/llm-services/google-ai-studio/`
- **Deploy:** Included in gateway container build (`npm run build --workspace=@wisewords/service-google-ai-studio`) with `GOOGLE_AI_STUDIO_API_KEY` set.

#### 2. `groq` (`backend/llm-services/groq`)
- **Launch in Dev Mode:** `bun run backend/llm-services/groq/src/index.ts` OR `npm run dev --workspace=@wisewords/service-groq`
- **Run Tests:** `bun test backend/llm-services/groq/` OR `npx jest backend/llm-services/groq/`
- **Deploy:** Deploy with gateway stack; requires `GROQ_API_KEY`.

#### 3. `cerebras` (`backend/llm-services/cerebras`)
- **Launch in Dev Mode:** `bun run backend/llm-services/cerebras/src/index.ts`
- **Run Tests:** `bun test backend/llm-services/cerebras/`
- **Deploy:** Deploy with gateway stack; requires `CEREBRAS_API_KEY`.

#### 4. `nvidia-nim` (`backend/llm-services/nvidia-nim`)
- **Launch in Dev Mode:** `bun run backend/llm-services/nvidia-nim/src/index.ts`
- **Run Tests:** `bun test backend/llm-services/nvidia-nim/`
- **Deploy:** Deploy with gateway stack; requires `NVIDIA_NIM_API_KEY`.

#### 5. `mistral` (`backend/llm-services/mistral`)
- **Launch in Dev Mode:** `bun run backend/llm-services/mistral/src/index.ts`
- **Run Tests:** `bun test backend/llm-services/mistral/`
- **Deploy:** Deploy with gateway stack; requires `MISTRAL_API_KEY`.

#### 6. `openrouter-free` (`backend/llm-services/openrouter-free`)
- **Launch in Dev Mode:** `bun run backend/llm-services/openrouter-free/src/index.ts`
- **Run Tests:** `bun test backend/llm-services/openrouter-free/`
- **Deploy:** Deploy with gateway stack; requires `OPENROUTER_API_KEY`.

#### 7. `cohere` (`backend/llm-services/cohere`)
- **Launch in Dev Mode:** `bun run backend/llm-services/cohere/src/index.ts`
- **Run Tests:** `bun test backend/llm-services/cohere/`
- **Deploy:** Deploy with gateway stack; requires `COHERE_API_KEY`.

#### 8. `llm7` (`backend/llm-services/llm7`)
- **Launch in Dev Mode:** `bun run backend/llm-services/llm7/src/index.ts`
- **Run Tests:** `bun test backend/llm-services/llm7/`
- **Deploy:** Deploy with gateway stack; optional `LLM7_API_KEY`.

#### 9. `z-ai` (`backend/llm-services/z-ai`)
- **Launch in Dev Mode:** `bun run backend/llm-services/z-ai/src/index.ts`
- **Run Tests:** `bun test backend/llm-services/z-ai/`
- **Deploy:** Deploy with gateway stack; requires `ZAI_API_KEY`.

#### 10. `requesty` (`backend/llm-services/requesty`)
- **Launch in Dev Mode:** `bun run backend/llm-services/requesty/src/index.ts`
- **Run Tests:** `bun test backend/llm-services/requesty/`
- **Deploy:** Deploy with gateway stack; requires `REQUESTY_API_KEY`.

#### 11. `ollama-local` (`backend/llm-services/ollama-local`)
- **Launch in Dev Mode:** `ollama serve` on port 11434 & `bun run backend/llm-services/ollama-local/src/index.ts`
- **Run Tests:** `bun test backend/llm-services/ollama-local/`
- **Deploy:** Deployed as separate Docker container service (`wisewords-ollama`) in `docker-compose.yml`.

---

### 1.2 Paid LLM Services (19 Services)

For all paid services (`groq-paid`, `cerebras-paid`, `sambanova`, `together`, `fireworks`, `deepinfra`, `baseten`, `openai`, `anthropic`, `google-gemini-paid`, `xai`, `mistral-paid`, `deepseek`, `openrouter-paid`, `requesty-paid`, `poe`, `bedrock`, `azure-ai`, `nebius`, `coreweave`):

- **Launch in Dev Mode:** `bun run backend/llm-services/<service-name>/src/index.ts`
- **Run Tests:** `bun test backend/llm-services/<service-name>/`
- **Deploy:** Enable `"enabled": true` under `"llm.paid.<service-name>"` in `config.json` and inject provider API key.

---

## 2. Search Microservices (`backend/search-services/`)

### 2.1 Free Search Services (6 Services)
- `google-cse`, `tavily-free`, `firecrawl-free`, `brave-free`, `serpapi`, `duckduckgo`
- **Launch in Dev Mode:** `bun run backend/search-services/<service-name>/src/index.ts`
- **Run Tests:** `bun test backend/search-services/<service-name>/`
- **Deploy:** Enable in `config.json` under `"search.free.<service-name>"`.

### 2.2 Paid Search Services (11 Services)
- `tavily-paid`, `exa-ai`, `firecrawl-paid`, `perplexity-sonar`, `brave-paid`, `google-cse-paid`, `bing-search`, `vertex-ai-search`, `you-com`, `linkup`, `parallel-ai`
- **Launch in Dev Mode:** `bun run backend/search-services/<service-name>/src/index.ts`
- **Run Tests:** `bun test backend/search-services/<service-name>/`
- **Deploy:** Enable in `config.json` under `"search.paid.<service-name>"`.
