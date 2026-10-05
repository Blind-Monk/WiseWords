import { McpService } from '../src/index.js';

describe('McpService', () => {
  test('lists available MCP tools', async () => {
    const mcp = new McpService();
    const tools = await mcp.listTools();
    expect(tools.length).toBeGreaterThan(0);
    expect(tools[0].name).toBe('calculator');
  });

  test('invokes tool and returns output', async () => {
    const mcp = new McpService();
    const res = await mcp.invokeTool('calculator', { expression: '2+2' });
    expect(res).toEqual({ result: 'Calculated value' });
  });
});
