export function safeJsonParse<T>(str: string | null, fallback: T): T {
  if (!str) return fallback;
  try {
    return JSON.parse(str) as T;
  } catch {
    return fallback;
  }
}

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function luhnCheck(num: string): boolean {
  const arr = num
    .replace(/\D/g, "")
    .split("")
    .reverse()
    .map((x) => parseInt(x, 10));
  if (arr.length < 13) return false;
  const lastDigit = arr.shift()!;
  const sum = arr.reduce((acc, val, i) => {
    if (i % 2 !== 0) return acc + val;
    const doubled = val * 2;
    return acc + (doubled > 9 ? doubled - 9 : doubled);
  }, 0);
  return (sum + lastDigit) % 10 === 0;
}

export function validateExpiry(mm: string, yy: string): boolean {
  if (!mm || !yy) return false;
  const month = parseInt(mm, 10);
  const year = parseInt(yy, 10);
  if (Number.isNaN(month) || Number.isNaN(year) || month < 1 || month > 12) return false;

  const now = new Date();
  const exp = new Date(2000 + year, month);
  return exp > now;
}

export function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
