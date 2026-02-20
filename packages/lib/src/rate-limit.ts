type Entry = {
  count: number;
  resetAt: number;
};

const requestMap = new Map<string, Entry>();

export function rateLimit(
  key: string,
  limit = 60,
  windowMs = 60_000
): { allowed: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const safeKey = typeof key === "string" ? key : "unknown";
  const existing = requestMap.get(safeKey);

  if (!existing || existing.resetAt <= now) {
    const resetAt = now + windowMs;
    requestMap.set(safeKey, { count: 1, resetAt });
    return { allowed: true, remaining: Math.max(limit - 1, 0), resetAt };
  }

  if (existing.count >= limit) {
    return { allowed: false, remaining: 0, resetAt: existing.resetAt };
  }

  const next = { ...existing, count: existing.count + 1 };
  requestMap.set(safeKey, next);
  return { allowed: true, remaining: Math.max(limit - next.count, 0), resetAt: next.resetAt };
}
