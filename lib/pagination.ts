export function paginate<T>(items: T[], page: number, perPage: number): { items: T[]; totalPages: number; page: number } {
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const safePage = Math.min(totalPages, Math.max(1, page));
  const start = (safePage - 1) * perPage;
  return { items: items.slice(start, start + perPage), totalPages, page: safePage };
}
