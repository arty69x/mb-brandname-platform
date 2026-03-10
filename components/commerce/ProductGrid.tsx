import type { Product } from '@/data/types';
import EmptyState from '@/components/ui/EmptyState';
import ProductCard from './ProductCard';

export default function ProductGrid({ products }: { products: Product[] }) {
  if (!Array.isArray(products) || products.length === 0) {
    return (
      <EmptyState
        title="NO PRODUCTS FOUND"
        body="Try changing filters."
        ctaHref="/shop"
        ctaLabel="RESET FILTERS"
      />
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
