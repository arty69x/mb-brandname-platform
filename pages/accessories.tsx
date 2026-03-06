import Layout from '@/components/Layout/Layout';
import ProductGrid from '@/components/Commerce/ProductGrid';
import { products } from '@/lib/data/products';

export default function AccessoriesPage() {
  const items = Array.isArray(products) ? products.filter((product) => product.category === 'accessories') : [];

  return (
    <Layout>
      <main>
        <section className="py-14">
          <div className="container mx-auto px-4">
            <h1 className="text-[42px] font-medium uppercase">Accessories</h1>
            <p className="mt-3 max-w-[620px] text-[16px] text-[#666]">A curated edit of necklaces, eyewear, and statement details inspired by the provided storefront blueprints.</p>
            <div className="mt-10">
              <ProductGrid products={items} />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
