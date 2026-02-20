import { ProductSchema } from "@repo/types/commerce";

export type HandlerResponse = {
  ok: boolean;
  data?: unknown;
  error?: { code: string; message: string };
};

async function getProductFromDB() {
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
        price: 490000,
        inventoryQty: 20,
        isActive: true
      }
    ]
  };
}

export async function getProductHandler(): Promise<HandlerResponse> {
  try {
    const data = await getProductFromDB();
    const parsed = ProductSchema.safeParse(data);

    if (!parsed.success) {
      return {
        ok: false,
        error: { code: "SCHEMA_VALIDATION_FAILED", message: "Invalid payload" }
      };
    }

    return { ok: true, data: parsed.data };
  } catch {
    return {
      ok: false,
      error: { code: "INTERNAL_SERVER_ERROR", message: "Unexpected error" }
    };
  }
}
