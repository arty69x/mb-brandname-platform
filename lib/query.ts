export function parseStringParam(value: string | string[] | undefined, fallback: string): string {
  if (typeof value === 'string') return value;
  if (Array.isArray(value) && typeof value[0] === 'string') return value[0];
  return fallback;
}

export function parseNumberParam(value: string | string[] | undefined, fallback: number, min: number, max: number): number {
  const asString = parseStringParam(value, `${fallback}`);
  const parsed = Number.parseInt(asString, 10);
  if (Number.isNaN(parsed)) return fallback;
  return Math.min(max, Math.max(min, parsed));
}
