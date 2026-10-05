export interface McpTool {
  name: string;
  description: string;
  parameters?: any;
}

export class McpService {
  private tools: Map<string, McpTool> = new Map();

  constructor() {
    this.tools.set('calculator', {
      name: 'calculator',
      description: 'Performs basic arithmetic operations',
      parameters: { type: 'object', properties: { expression: { type: 'string' } } }
    });
  }

  public async listTools(): Promise<McpTool[]> {
    return Array.from(this.tools.values());
  }

  public async invokeTool(name: string, args: any): Promise<any> {
    if (name === 'calculator') {
      return { result: 'Calculated value' };
    }
    throw new Error(`MCP Tool '${name}' not found`);
  }
}
