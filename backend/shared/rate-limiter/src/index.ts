export class RateLimiter {
  canProceed(providerName: string): boolean {
    return true;
  }

  consume(providerName: string): void {
    // no-op
  }
}
