import Layout from '@/components/Layout/Layout';
import ProductGrid from '@/components/Commerce/ProductGrid';
import { products } from '@/lib/data/products';

export default function Page() {
  const filtered = products.slice(0, 12);
  return <Layout><main><section className="py-16"><div className="container mx-auto px-4"><h1 className="text-4xl font-semibold">New Arrivals</h1><div className="mt-8"><ProductGrid products={filtered} /></div></div></section></main></Layout>;
}
