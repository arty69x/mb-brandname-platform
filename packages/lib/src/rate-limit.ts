const map = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(ip: string, limit = 50, windowMs = 60_000): void {
  const now = Date.now();
  const found = map.get(ip);

  if (!found || found.resetAt < now) {
    map.set(ip, { count: 1, resetAt: now + windowMs });
    return;
  }

  if (found.count >= limit) {
    throw new Error("Too many requests");
  }

  map.set(ip, { ...found, count: found.count + 1 });
}
