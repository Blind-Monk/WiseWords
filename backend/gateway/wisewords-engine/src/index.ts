import express, { Request, Response } from 'express';
import { loadConfig, getProviderConfig } from '@wisewords/config-loader';
import { LlmRouter } from '@wisewords/llm-router';
import { SearchRouter } from '@wisewords/search-router';
import { RagService } from '@wisewords/rag-service';
import { McpService } from '@wisewords/mcp-service';
import { metricsRegistry } from '@wisewords/metrics';

// Import LLM providers
import { Provider_google_ai_studio } from '@wisewords/service-google-ai-studio';
import { Provider_groq } from '@wisewords/service-groq';
import { Provider_cerebras } from '@wisewords/service-cerebras';
import { Provider_nvidia_nim } from '@wisewords/service-nvidia-nim';
import { Provider_mistral } from '@wisewords/service-mistral';
import { Provider_openrouter_free } from '@wisewords/service-openrouter-free';
import { Provider_cohere } from '@wisewords/service-cohere';
import { Provider_llm7 } from '@wisewords/service-llm7';
import { Provider_z_ai } from '@wisewords/service-z-ai';
import { Provider_requesty } from '@wisewords/service-requesty';
import { Provider_ollama_local } from '@wisewords/service-ollama-local';

import { Provider_openai } from '@wisewords/service-openai';
import { Provider_anthropic } from '@wisewords/service-anthropic';

// Import Search providers
import { Provider_google_cse } from '@wisewords/service-google-cse';
import { Provider_tavily_free } from '@wisewords/service-tavily-free';
import { Provider_duckduckgo } from '@wisewords/service-duckduckgo';
import { Provider_tavily_paid } from '@wisewords/service-tavily-paid';
import { Provider_serpapi } from '@wisewords/service-serpapi';
import { Provider_brave_paid } from '@wisewords/service-brave-paid';

export function createApp() {
  const app = express();
  app.use(express.json());

  // CORS middleware for frontend calls
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    next();
  });

  const config = loadConfig();
  const ollamaConfig = getProviderConfig('llm', 'free', 'ollama-local');

  // Instantiate LLM providers
  const freeLlm = [
    new Provider_google_ai_studio(),
    new Provider_groq(),
    new Provider_cerebras(),
    new Provider_nvidia_nim(),
    new Provider_mistral(),
    new Provider_openrouter_free(),
    new Provider_cohere(),
    new Provider_llm7(),
    new Provider_z_ai(),
    new Provider_requesty()
  ];
  const paidLlm = [new Provider_openai(), new Provider_anthropic()];

  // Dynamic Ollama local initialization
  const ollama = new Provider_ollama_local({
    baseUrl: ollamaConfig?.baseUrl,
    defaultModel: ollamaConfig?.defaultModel,
    models: ollamaConfig?.models
  });

  const llmRouter = new LlmRouter(freeLlm, paidLlm, ollama);

  // Instantiate Search providers
  const freeSearch = [new Provider_google_cse(), new Provider_tavily_free()];
  const paidSearch = [new Provider_tavily_paid(), new Provider_serpapi(), new Provider_brave_paid()];
  const ddg = new Provider_duckduckgo();

  const searchRouter = new SearchRouter(freeSearch, paidSearch, ddg);

  const ragService = new RagService();
  const mcpService = new McpService();

  // GET /v1/health
  app.get('/v1/health', (req: Request, res: Response) => {
    res.json({ status: 'ok', service: 'wisewords-engine' });
  });

  // GET /v1/providers
  app.get('/v1/providers', (req: Request, res: Response) => {
    res.json({
      llm: {
        free: freeLlm.map((p) => ({ name: p.name, models: p.models })),
        paid: paidLlm.map((p) => ({ name: p.name, models: p.models })),
        fallback: { name: ollama.name, baseUrl: ollama.baseUrl, defaultModel: ollama.defaultModel, models: ollama.models }
      },
      search: {
        free: freeSearch.map((p) => ({ name: p.name })),
        paid: paidSearch.map((p) => ({ name: p.name }))
      }
    });
  });

  // Single API call listing all free and paid LLM providers and models
  const listLlmHandler = (req: Request, res: Response) => {
    res.json({
      free: freeLlm.map((p) => ({ name: p.name, models: p.models })),
      paid: paidLlm.map((p) => ({ name: p.name, models: p.models })),
      fallback: { name: ollama.name, baseUrl: ollama.baseUrl, defaultModel: ollama.defaultModel, models: ollama.models }
    });
  };
  app.get('/api/v1/list/llm', listLlmHandler);
  app.get('/v1/list/llm', listLlmHandler);

  // Single API call listing all configured free and paid search APIs
  const listSearchHandler = (req: Request, res: Response) => {
    res.json({
      free: freeSearch.map((p) => ({ name: p.name })),
      paid: paidSearch.map((p) => ({ name: p.name })),
      fallback: { name: ddg.name }
    });
  };
  app.get('/api/v1/list/searchapi', listSearchHandler);
  app.get('/v1/list/searchapi', listSearchHandler);

  // GET /v1/providers/:provider/models
  app.get('/v1/providers/:provider/models', (req: Request, res: Response) => {
    const pName = req.params.provider;
    const allProviders = [...freeLlm, ...paidLlm, ollama];
    const found = allProviders.find((p) => p.name === pName);

    if (!found) {
      return res.status(404).json({ error: `Provider '${pName}' not found` });
    }
    res.json({ provider: pName, models: found.models });
  });

  // GET /metrics
  app.get('/metrics', (req: Request, res: Response) => {
    res.set('Content-Type', 'text/plain');
    res.send(metricsRegistry.getPrometheusOutput());
  });

  // POST /v1/query
  app.post('/v1/query', async (req: Request, res: Response) => {
    try {
      const {
        prompt,
        llmType = 'free',
        llmProvider,
        llmModel,
        search = false,
        searchType = 'free',
        searchProvider,
        rag = false,
        mcp = false
      } = req.body;

      if (!prompt || typeof prompt !== 'string' || prompt.trim() === '') {
        return res.status(400).json({ error: 'Prompt is required and must be a non-empty string' });
      }

      if (llmType === 'paid' && !llmProvider) {
        return res.status(400).json({ error: "Validation Error: 'llmProvider' is required when 'llmType' is 'paid'" });
      }

      metricsRegistry.increment('llm_requests_total', { type: llmType });

      let searchContext = null;
      if (search) {
        searchContext = await searchRouter.execute(searchType as any, { query: prompt }, searchProvider);
      }

      let ragContext = null;
      if (rag || config.rag?.enabled) {
        ragContext = await ragService.retrieve(prompt);
      }

      let tools = null;
      if (mcp || config.mcp?.enabled) {
        tools = await mcpService.listTools();
      }

      const llmResult = await llmRouter.execute(
        llmType as any,
        {
          prompt,
          model: llmModel,
          tools: tools || undefined,
          context: { search: searchContext, rag: ragContext }
        },
        llmProvider
      );

      res.json({
        content: llmResult.content,
        provider: llmResult.provider,
        model: llmResult.model,
        latencyMs: llmResult.latencyMs,
        fallback: llmResult.fallback || false,
        tokensUsed: llmResult.tokensUsed,
        context: {
          search: searchContext,
          rag: ragContext
        }
      });
    } catch (err: any) {
      res.status(500).json({ error: err.message || 'Internal Server Error' });
    }
  });

  return app;
}

if (process.env.NODE_ENV !== 'test') {
  const app = createApp();
  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`Wise Words Engine Gateway listening on port ${port}`);
  });
}
