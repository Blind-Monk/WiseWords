export class CircuitBreaker {
  private failures = 0;
  private state: 'closed' | 'open' = 'closed';

  constructor(public name: string, private threshold: number = 3) {}

  isClosed(): boolean {
    return this.state === 'closed';
  }

  recordSuccess(): void {
    this.failures = 0;
    this.state = 'closed';
  }

  recordFailure(): void {
    this.failures++;
    if (this.failures >= this.threshold) {
      this.state = 'open';
    }
  }
}
