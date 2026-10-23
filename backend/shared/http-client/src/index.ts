export class HttpClient {
  public async get(url: string, headers?: Record<string, string>): Promise<any> {
    const res = await fetch(url, { headers });
    return res.json();
  }

  public async post(url: string, body: any, headers?: Record<string, string>): Promise<any> {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...headers },
      body: JSON.stringify(body)
    });
    return res.json();
  }
}
