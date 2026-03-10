import { getItem, setItem } from './storage';

const KEY = 'mb_wishlist_v1';

export function getWishlist(): string[] {
  const data = getItem<string[]>(KEY, []);
  return Array.isArray(data) ? data : [];
}

export function toggleWishlist(productId: string): string[] {
  const list = getWishlist();
  const next = list.includes(productId) ? list.filter((id) => id !== productId) : [...list, productId];
  setItem(KEY, next);
  return next;
}

export function clearWishlist(): void { setItem<string[]>(KEY, []); }
