import Image from 'next/image';
import Layout from '@/components/Layout/Layout';
import ProductGrid from '@/components/Commerce/ProductGrid';
import { products } from '@/lib/data/products';

export default function NewArrivalsPage() {
  const listing = Array.isArray(products) ? products.slice(0, 15) : [];

  return (
    <Layout>
      <main>
        <section>
          <div className="container mx-auto px-4">
            <div className="relative mt-2 h-[280px] overflow-hidden sm:h-[360px] lg:h-[420px]">
              <Image src="/design/page-for-newarrivals-bags-accessories.png" alt="New arrivals banner featuring luxury accessories" fill priority className="object-cover" />
              <div className="absolute inset-0 bg-black/25" />
              <h1 className="absolute inset-0 flex items-center justify-center text-[40px] font-light uppercase tracking-[0.06em] text-white sm:text-[56px]">New Arrivals</h1>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-4 border-b border-[#e7e7e7] pb-6 text-[12px] font-semibold uppercase tracking-[0.04em] text-[#222] sm:flex-row sm:items-center sm:justify-end sm:gap-8">
              <button className="text-left transition hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black">Default Sorting ˅</button>
              <p>View &nbsp; 2 &nbsp; 3 &nbsp; <span className="underline underline-offset-2">4</span></p>
              <button className="text-left transition hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black">Filter</button>
            </div>
            <div className="pt-8">
              <ProductGrid products={listing} />
            </div>
            <div className="pt-12 text-center">
              <button className="border-b border-black text-[13px] font-semibold uppercase tracking-[0.04em] transition hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Show More</button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
