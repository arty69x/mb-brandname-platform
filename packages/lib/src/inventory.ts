type Tx = {
  variant: {
    updateMany: (args: {
      where: { id: string; inventoryQty: { gte: number } };
      data: { inventoryQty: { decrement: number } };
    }) => Promise<{ count: number }>;
  };
};

export async function reserveInventory(
  txRunner: <T>(fn: (tx: Tx) => Promise<T>) => Promise<T>,
  id: string,
  qty: number
): Promise<void> {
  await txRunner(async (tx) => {
    const updated = await tx.variant.updateMany({
      where: { id, inventoryQty: { gte: qty } },
      data: { inventoryQty: { decrement: qty } }
    });

    if (updated.count === 0) {
      throw new Error("Out of stock");
    }
  });
}
