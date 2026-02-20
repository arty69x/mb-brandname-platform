export function clampQty(qty: number, min = 1, max = 99): number {
  if (!Number.isFinite(qty)) {
    return min;
  }

  const safe = Math.trunc(qty);
  if (safe < min) {
    return min;
  }

  if (safe > max) {
    return max;
  }

  return safe;
}

export function assertStock(available: number, requested: number): { ok: boolean; reason?: string } {
  if (!Number.isFinite(available) || available < 0) {
    return { ok: false, reason: "invalid_available" };
  }

  const safeRequested = clampQty(requested);
  if (safeRequested <= 0) {
    return { ok: false, reason: "invalid_requested" };
  }

  if (available < safeRequested) {
    return { ok: false, reason: "out_of_stock" };
  }

  return { ok: true };
}
