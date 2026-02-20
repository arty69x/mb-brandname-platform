export type Money = {
  amount: number;
  currency: "USD" | "EUR" | "GBP" | "AED";
};

export type Variant = {
  id: string;
  sku: string;
  title: string;
  price: Money;
  inventoryQty: number;
  isActive: boolean;
};

export type Product = {
  id: string;
  handle: string;
  title: string;
  description?: string;
  status: "draft" | "active" | "archived";
  variants: Variant[];
};

export type Cart = {
  id: string;
  currency: Money["currency"];
  items: Array<{
    variantId: string;
    qty: number;
    unitPrice: Money;
  }>;
  subtotal: Money;
};

export type Order = {
  id: string;
  cartId: string;
  status: "created" | "payment_pending" | "paid" | "fulfilled" | "cancelled";
  total: Money;
  createdAt: string;
};
