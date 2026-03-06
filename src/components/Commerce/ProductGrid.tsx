import { Product } from '@/lib/data/products';
import ProductCard from './ProductCard';

export default function ProductGrid({ products }: { products: Product[] }) {
  if (!Array.isArray(products)) {
    return <p className="text-sm text-[#666]">Unable to load products.</p>;
  }

  if (products.length === 0) {
    return <p className="text-sm text-[#666]">No products available.</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
