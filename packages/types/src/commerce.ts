import { z } from "zod";

export const MoneySchema = z.object({
  amount: z.number().int().nonnegative(),
  currency: z.string().length(3)
});

export const VariantSchema = z.object({
  id: z.string(),
  sku: z.string(),
  title: z.string(),
  price: z.number().int().nonnegative(),
  compareAtPrice: z.number().int().nonnegative().optional(),
  inventoryQty: z.number().int().nonnegative(),
  isActive: z.boolean()
});

export const ProductSchema = z.object({
  id: z.string(),
  handle: z.string(),
  title: z.string(),
  description: z.string().optional(),
  status: z.enum(["draft", "active", "archived"]),
  variants: z.array(VariantSchema)
});

export const CartItemInputSchema = z.object({
  variantId: z.string(),
  qty: z.number().int().positive().max(20)
});

export const CheckoutInputSchema = z.object({
  cartId: z.string(),
  email: z.string().email(),
  shippingAddressId: z.string(),
  paymentMethod: z.enum(["stripe_card", "bank_transfer"])
});

export const OrderStatusSchema = z.enum([
  "created",
  "payment_pending",
  "paid",
  "fulfilled",
  "cancelled"
]);

export type OrderStatus = z.infer<typeof OrderStatusSchema>;
export type Product = z.infer<typeof ProductSchema>;
export type Variant = z.infer<typeof VariantSchema>;
