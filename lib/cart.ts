import type { CartItem } from '@/data/types';
import { getItem, setItem } from './storage';

const KEY = 'mb_cart_v1';

export function getCart(): CartItem[] {
  const cart = getItem<CartItem[]>(KEY, []);
  return Array.isArray(cart) ? cart : [];
}

export function addToCart(productId: string, qty: number): CartItem[] {
  const cart = getCart();
  const found = cart.find((item) => item.productId === productId);
  const next = found
    ? cart.map((item) => item.productId === productId ? { ...item, qty: Math.max(1, item.qty + qty) } : item)
    : [...cart, { productId, qty: Math.max(1, qty) }];
  setItem(KEY, next);
  return next;
}

export function updateQty(productId: string, qty: number): CartItem[] {
  const next = getCart().map((item) => item.productId === productId ? { ...item, qty: Math.max(1, qty) } : item);
  setItem(KEY, next);
  return next;
}

export function removeFromCart(productId: string): CartItem[] {
  const next = getCart().filter((item) => item.productId !== productId);
  setItem(KEY, next);
  return next;
}

export function clearCart(): void { setItem<CartItem[]>(KEY, []); }
