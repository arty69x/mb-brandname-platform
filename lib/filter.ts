import type { Product } from '@/data/types';

export function filterProducts(items: Product[], category: string, search: string): Product[] {
  return items.filter((p) => {
    const catOk = category ? p.category === category : true;
    const q = search.toLowerCase().trim();
    const searchOk = q ? `${p.title} ${p.tags.join(' ')}`.toLowerCase().includes(q) : true;
    return catOk && searchOk;
  });
}
