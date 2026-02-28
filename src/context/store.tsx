"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { Product } from "@/lib/products";
import { safeJsonParse } from "@/lib/validation";

export interface CartItem extends Product {
  qty: number;
}
export interface Order {
  id: string;
  status: "PAID" | "FAILED";
  items: CartItem[];
  total: number;
  date: string;
}

interface StoreState {
  cart: CartItem[];
  wishlist: string[];
  compare: string[];
  orders: Order[];
  account: Record<string, unknown> | null;
  cookiePrefs: Record<string, unknown>;
  notifications: string[];
  analytics: { views: number };
  addToCart: (p: Product, qty?: number) => void;
  updateQty: (id: string, qty: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  toggleWishlist: (id: string) => void;
  toggleCompare: (id: string) => void;
  addOrder: (o: Order) => void;
  removeNotification: (id: string) => void;
  cartTotal: number;
  trackEvent: typeof trackEvent;
}

const StoreContext = createContext<StoreState | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [compare, setCompare] = useState<string[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [notifications, setNotifications] = useState<string[]>([]);
  const [isReady, setIsReady] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCart(safeJsonParse(localStorage.getItem("mb_cart"), []));
      setWishlist(safeJsonParse(localStorage.getItem("mb_wish"), []));
      setCompare(safeJsonParse(localStorage.getItem("mb_comp"), []));
      setOrders(safeJsonParse(localStorage.getItem("mb_ord"), []));
      setIsReady(true);
    }
  }, []);

  useEffect(() => {
    if (!isReady) return;
    localStorage.setItem("mb_cart", JSON.stringify(cart));
    localStorage.setItem("mb_wish", JSON.stringify(wishlist));
    localStorage.setItem("mb_comp", JSON.stringify(compare));
    localStorage.setItem("mb_ord", JSON.stringify(orders));
  }, [cart, wishlist, compare, orders, isReady]);

  const removeNotification = (id: string) =>
    setNotifications((prev) => prev.filter((n) => !n.startsWith(`${id}|`)));

  const notify = (msg: string) => {
    const id = Date.now().toString();
    setNotifications((prev) => [...prev, `${id}|${msg}`]);
    setTimeout(() => removeNotification(id), 3000);
  };

  const addToCart = (p: Product, qty = 1) => {
    if (qty < 1 || qty > 99) return;
    setCart((prev) => {
      const ex = prev.find((i) => i.id === p.id);
      if (ex) return prev.map((i) => (i.id === p.id ? { ...i, qty: Math.min(99, i.qty + qty) } : i));
      return [...prev, { ...p, qty }];
    });
    void trackEvent("add_to_cart", { id: p.id });
    notify("ADDED TO CART");
  };

  const updateQty = (id: string, qty: number) => {
    const clamped = Math.max(1, Math.min(99, qty));
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, qty: clamped } : i)));
  };

  const removeFromCart = (id: string) => setCart((prev) => prev.filter((i) => i.id !== id));
  const clearCart = () => setCart([]);

  const toggleWishlist = (id: string) => {
    setWishlist((prev) => {
      if (prev.includes(id)) {
        notify("REMOVED FROM WISHLIST");
        return prev.filter((i) => i !== id);
      }
      notify("ADDED TO WISHLIST");
      return [...prev, id];
    });
  };

  const toggleCompare = (id: string) => {
    setCompare((prev) => {
      if (prev.includes(id)) return prev.filter((i) => i !== id);
      if (prev.length >= 4) {
        notify("MAX 4 ITEMS");
        return prev;
      }
      notify("ADDED TO COMPARE");
      return [...prev, id];
    });
  };

  const addOrder = (o: Order) => setOrders((prev) => [o, ...prev]);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (!isReady) return null;

  return (
    <StoreContext.Provider
      value={{
        cart,
        wishlist,
        compare,
        orders,
        account: null,
        cookiePrefs: {},
        notifications,
        analytics: { views: 0 },
        addToCart,
        updateQty,
        removeFromCart,
        clearCart,
        toggleWishlist,
        toggleCompare,
        addOrder,
        removeNotification,
        cartTotal,
        trackEvent,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export const useStore = () => {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("Store error");
  return ctx;
};
