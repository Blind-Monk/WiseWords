import supertest from 'supertest';
import { createApp } from '../src/index.js';

describe('Wisewords Engine API Gateway', () => {
  const app = createApp();
  const request = supertest(app);

  test('GET /v1/health returns 200 OK', async () => {
    const res = await request.get('/v1/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  test('GET /v1/providers lists available providers', async () => {
    const res = await request.get('/v1/providers');
    expect(res.status).toBe(200);
    expect(res.body.llm.free.length).toBeGreaterThan(0);
  });

  test('GET /v1/providers/:provider/models lists provider models', async () => {
    const res = await request.get('/v1/providers/groq/models');
    expect(res.status).toBe(200);
    expect(res.body.models).toBeDefined();
  });

  test('POST /v1/query defaults to free LLM and returns response', async () => {
    const res = await request.post('/v1/query').send({ prompt: 'Hello world' });
    expect(res.status).toBe(200);
    expect(res.body.content).toBeDefined();
    expect(res.body.provider).toBeDefined();
  });

  test('POST /v1/query validates missing prompt and paid provider parameter', async () => {
    const res1 = await request.post('/v1/query').send({ prompt: '' });
    expect(res1.status).toBe(400);

    const res2 = await request.post('/v1/query').send({ prompt: 'hi', llmType: 'paid' });
    expect(res2.status).toBe(400);
    expect(res2.body.error).toContain('llmProvider');
  });
});
