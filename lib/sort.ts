import type { Product } from '@/data/types';
import { stableSort } from './stableSort';

export function sortProducts(items: Product[], sort: string): Product[] {
  if (sort === 'price-asc') return stableSort(items, (a, b) => a.price - b.price);
  if (sort === 'price-desc') return stableSort(items, (a, b) => b.price - a.price);
  return stableSort(items, (a, b) => a.createdAtISO.localeCompare(b.createdAtISO));
}
