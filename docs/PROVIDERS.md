# Wise Words Detailed Services & Providers Guide

This guide describes step-by-step how each of the **30 LLM microservices** and **17 Search microservices** operates within the Wise Words platform.

---

## 1. LLM Services (`backend/llm-services/`)

Every LLM microservice is packaged as an independent npm workspace (`@wisewords/service-<name>`) implementing the `ILlmProvider` contract.

### 1.1 Free LLM Services (11 Services + 1 Fallback)

1. **`google-ai-studio`**
   - **Base URL:** `https://generativelanguage.googleapis.com/v1beta`
   - **Supported Models:** `gemini-1.5-flash-lite`, `gemini-1.5-flash`
   - **Step-by-step Flow:**
     1. Receives `LlmRequest` from `llm-router`.
     2. Extracts API key from `GOOGLE_AI_STUDIO_API_KEY`.
     3. Executes completion call. If a model encounters a rate limit (429), it automatically cycles to the next model (`gemini-1.5-flash`) for the given key before returning or failing over.

2. **`groq`**
   - **Base URL:** `https://api.groq.com/openai/v1`
   - **Supported Models:** `llama-3.3-70b-versatile`, `llama-3.1-8b-instant`, `mixtral-8x7b-32768`
   - **Features:** Ultra-fast LPU inference (14,400 RPD cap).

3. **`cerebras`**
   - **Base URL:** `https://api.cerebras.ai/v1`
   - **Supported Models:** `llama3.1-8b`, `llama3.1-70b`
   - **Features:** Wafer-scale engine inference with OpenAI-compatible payload format.

4. **`nvidia-nim`**
   - **Base URL:** `https://integrate.api.nvidia.com/v1`
   - **Supported Models:** `meta/llama-3.1-405b-instruct`, `meta/llama-3.1-70b-instruct`

5. **`mistral`**
   - **Base URL:** `https://api.mistral.ai/v1`
   - **Supported Models:** `mistral-small-latest`, `open-mistral-7b`

6. **`openrouter-free`**
   - **Base URL:** `https://openrouter.ai/api/v1`
   - **Supported Models:** `meta-llama/llama-3.1-8b-instruct:free`, `google/gemma-2-9b-it:free`, `qwen/qwen-2.5-72b-instruct:free`
   - **Model Cycling:** Automatically cycles through available `:free` tagged models on 429 quota exhaustion.

7. **`cohere`**
   - **Base URL:** `https://api.cohere.com/v2`
   - **Supported Models:** `command-r`, `command-r-plus`

8. **`llm7`**
   - **Base URL:** `https://api.llm7.io/v1`
   - **Supported Models:** `llm7-base`

9. **`z-ai`**
   - **Base URL:** `https://open.bigmodel.cn/api/paas/v4`
   - **Supported Models:** `glm-4-flash`

10. **`requesty`**
    - **Base URL:** `https://router.requesty.ai/v1`
    - **Supported Models:** `openai/gpt-4o-mini`

11. **`ollama-local` (FALLBACK TIER)**
    - **Base URL:** `http://localhost:11434`
    - **Supported Models:** `llama3.2`, `mistral`
    - **Step-by-step Flow:**
      1. Triggered when all free LLM providers fail or hit rate limits.
      2. Invokes local Ollama server keylessly with zero rate limits.
      3. Returns response flagged with `fallback: true`.

---

### 1.2 Paid LLM Services (19 Services)

- **Group A (Ultra-fast / LPU):** `groq-paid`, `cerebras-paid`, `sambanova`, `together`, `fireworks`, `deepinfra`, `baseten`
- **Group B (Frontier Developers):** `openai`, `anthropic`, `google-gemini-paid`, `xai`, `mistral-paid`, `deepseek`
- **Group C (Aggregators):** `openrouter-paid`, `requesty-paid`, `poe`
- **Group D (Cloud Hyperscalers):** `bedrock`, `azure-ai`, `nebius`, `coreweave`

**Step-by-step Execution for Paid Providers:**
1. User submits request specifying `llmType: "paid"`, `llmProvider: "<provider_name>"`, and `llmModel: "<model_name>"`.
2. Router directly resolves provider package without entering round-robin rotation.
3. Authenticates using provider environment key (e.g. `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`).
4. Executes request and returns latency, usage tokens, and model details without fallback.

---

## 2. Search Services (`backend/search-services/`)

Every search service implements the `ISearchProvider` contract returning normalized `SearchResponse` arrays (`title`, `url`, `snippet`).

### 2.1 Free Search Services (6 Services + 1 Fallback)

1. **`google-cse`**: Custom Search JSON API (100 queries/day).
2. **`tavily-free`**: RAG-focused web search API (1000 queries/month).
3. **`firecrawl-free`**: Web search and crawl service (1000 credits/month).
4. **`brave-free`**: Brave Search API.
5. **`serpapi`**: Structured search engine API (250 queries/month).
6. **`duckduckgo` (FALLBACK TIER)**:
   - Global 60-second rate-limit throttle enforced by `search-router`.
   - Used when all free search providers are exhausted.

### 2.2 Paid Search Services (11 Services)

- `tavily-paid`, `exa-ai`, `firecrawl-paid`, `perplexity-sonar`, `brave-paid`, `google-cse-paid`, `bing-search`, `vertex-ai-search`, `you-com`, `linkup`, `parallel-ai`
