import type { Product, Variant } from "@repo/types/commerce";

export type HandlerResponse = {
  ok: boolean;
  data?: unknown;
  error?: { code: string; message: string };
};

async function getProductFromDB(): Promise<unknown> {
  return {
    id: "prod_1",
    handle: "limited-calfskin-bag",
    title: "Limited Calfskin Bag",
    status: "active",
    variants: [
      {
        id: "var_1",
        sku: "BAG-BLK-001",
        title: "Black",
        price: { amount: 490000, currency: "USD" },
        inventoryQty: 20,
        isActive: true
      }
    ]
  };
}

function isVariant(input: unknown): input is Variant {
  if (!input || typeof input !== "object") return false;
  const v = input as Partial<Variant>;
  return (
    typeof v.id === "string" &&
    typeof v.sku === "string" &&
    typeof v.title === "string" &&
    typeof v.inventoryQty === "number" &&
    typeof v.isActive === "boolean" &&
    !!v.price &&
    typeof v.price === "object"
  );
}

function isProduct(input: unknown): input is Product {
  if (!input || typeof input !== "object") return false;
  const p = input as Partial<Product>;
  return (
    typeof p.id === "string" &&
    typeof p.handle === "string" &&
    typeof p.title === "string" &&
    (p.status === "draft" || p.status === "active" || p.status === "archived") &&
    Array.isArray(p.variants) &&
    p.variants.every((variant) => isVariant(variant))
  );
}

export async function getProductHandler(): Promise<HandlerResponse> {
  try {
    const data = await getProductFromDB();

    if (!isProduct(data)) {
      return {
        ok: false,
        error: { code: "SCHEMA_VALIDATION_FAILED", message: "Invalid payload" }
      };
    }

    return { ok: true, data };
  } catch {
    return {
      ok: false,
      error: { code: "INTERNAL_SERVER_ERROR", message: "Unexpected error" }
    };
  }
}
