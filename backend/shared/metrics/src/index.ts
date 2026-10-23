export class MetricsRegistry {
  private counters = new Map<string, number>();

  increment(metricName: string, labels?: Record<string, string>): void {
    const key = labels ? `${metricName}:${JSON.stringify(labels)}` : metricName;
    this.counters.set(key, (this.counters.get(key) || 0) + 1);
  }

  getPrometheusOutput(): string {
    let output = '';
    for (const [key, value] of this.counters.entries()) {
      output += `${key} ${value}\n`;
    }
    return output;
  }
}

export const metricsRegistry = new MetricsRegistry();
