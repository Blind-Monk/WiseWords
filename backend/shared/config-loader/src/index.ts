import fs from 'fs';
import path from 'path';

export function loadConfig(): any {
  try {
    const configPath = path.resolve(process.cwd(), 'config.json');
    if (fs.existsSync(configPath)) {
      const data = fs.readFileSync(configPath, 'utf8');
      return JSON.parse(data);
    }
  } catch (err) {
    // fallback
  }
  return {
    llm: {},
    search: {},
    rag: { enabled: false },
    mcp: { enabled: false }
  };
}

export function getProviderConfig(type: string, category: string, name: string): any {
  const cfg = loadConfig();
  return cfg[type]?.[category]?.[name] || null;
}
