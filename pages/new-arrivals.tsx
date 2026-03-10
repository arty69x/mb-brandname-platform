import { useMemo, useState } from 'react';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/layout/SEO';
import ControlBar from '@/components/commerce/ControlBar';
import ProductCard from '@/components/commerce/ProductCard';
import { products } from '@/data/products';
import { canonical } from '@/lib/seo';
import { sortProducts } from '@/lib/sort';

const banner = 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=1900&q=80';

export default function NewArrivalsPage() {
  const [sort, setSort] = useState('default');
  const [grid, setGrid] = useState(4);

  const pool = products.filter((product) => product.category === 'new-arrivals' || product.category === 'bags');
  const repeated = useMemo(() => {
    const safePool = Array.isArray(pool) ? pool : [];
    return Array.from({ length: 15 }, (_, index) => safePool[index % safePool.length]).filter((v): v is (typeof safePool)[number] => Boolean(v));
  }, [pool]);

  const sorted = sortProducts(repeated, sort);

  return (
    <Layout>
      <SEO title="New Arrivals — MB BRANDNAME" description="Explore curated luxury selection at MB BRANDNAME." canonical={canonical('/new-arrivals')} />
      <main>
        <section className="pt-0">
          <div className="container mx-auto px-4">
            <div className="relative mt-4 overflow-hidden bg-[var(--bg-alt)]">
              <img src={banner} alt="New arrivals banner" className="h-[220px] w-full object-cover md:h-[300px] lg:h-[390px]" />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-[34px] uppercase tracking-[0.1em] text-white lg:text-[56px]">NEW ARRIVALS</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 lg:py-14">
          <div className="container mx-auto px-4">
            <ControlBar count={sorted.length} sort={sort} setSort={setSort} grid={grid} setGrid={setGrid} />

            <div className="pt-8">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-5 lg:gap-8">
                {Array.isArray(sorted)
                  ? sorted.map((product, idx) => (
                      <ProductCard key={`${product.id}-${idx}`} product={product} />
                    ))
                  : null}
              </div>
            </div>

            <div className="pt-10 text-center">
              <button className="border-b border-[var(--text)] text-[12px] uppercase tracking-[0.12em]">Show More</button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
