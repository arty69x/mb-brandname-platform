type Tx = {
  variant: {
    findUnique: (args: { where: { id: string } }) => Promise<{ inventoryQty: number } | null>;
    update: (args: { where: { id: string }; data: { inventoryQty: { decrement: number } } }) => Promise<void>;
  };
};

export async function reserveInventory(
  txRunner: <T>(fn: (tx: Tx) => Promise<T>) => Promise<T>,
  id: string,
  qty: number
): Promise<void> {
  await txRunner(async (tx) => {
    const variant = await tx.variant.findUnique({ where: { id } });
    if (!variant || variant.inventoryQty < qty) {
      throw new Error("Out of stock");
    }

    await tx.variant.update({
      where: { id },
      data: { inventoryQty: { decrement: qty } }
    });
  });
}
