export function stableSort<T>(input: T[], compare: (a: T, b: T) => number): T[] {
  return input.map((item, idx) => ({ item, idx })).sort((a, b) => {
    const order = compare(a.item, b.item);
    return order === 0 ? a.idx - b.idx : order;
  }).map((row) => row.item);
}
