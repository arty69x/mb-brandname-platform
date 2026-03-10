import type { CartItem } from '@/data/types';

export function createOrderPayload(items: CartItem[]): string {
  const sorted = [...items].sort((a, b) => a.productId.localeCompare(b.productId));
  return sorted.map((item) => `${item.productId}:${item.qty}`).join('|');
}

export async function hashSHA256(payload: string): Promise<string> {
  const data = new TextEncoder().encode(payload);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, '0')).join('');
}

export async function createOrderId(items: CartItem[]): Promise<string> {
  const payload = createOrderPayload(items);
  const hash = await hashSHA256(payload);
  return `ord_${hash.slice(0, 12)}`;
}
