import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout/Layout';
import ProductGrid from '@/components/Commerce/ProductGrid';
import { products } from '@/lib/data/products';
import { ShieldCheck, Truck, Headset } from 'lucide-react';

export default function HomePage() {
  const newArrivals = Array.isArray(products) ? products.slice(0, 4) : [];

  return (
    <Layout>
      <main>
        <section className="relative">
          <div className="container mx-auto px-4">
            <div className="relative mt-3 h-[420px] overflow-hidden bg-black sm:h-[520px] lg:h-[620px]">
              <Image src="/design/home.png" alt="Luxury branded jewelry campaign" fill priority className="object-cover" />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-center text-[38px] font-light uppercase tracking-[0.03em] text-white sm:text-[52px] lg:text-[64px]">NO.1 Luxury Brandname Store</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#ededed] py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-4">
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-300">
                  <Image src="/design/highlight.png" alt="Pendant necklace editorial image" fill loading="lazy" className="object-cover" />
                </div>
              </div>
              <div className="lg:col-span-8">
                <h2 className="text-[36px] font-medium text-[#111]">Each necklace has its own unique story to tell.</h2>
                <p className="mt-5 max-w-[780px] text-[17px] leading-[1.7] text-[#404040]">In the world of fashion, true luxury is not defined by price alone, but by the story behind each piece. This necklace was designed to embody timeless elegance. Whether worn on a special occasion or as a touch of charm in your everyday look, this necklace completes your style and tells a story of refined taste and individuality.</p>
                <button className="mt-7 rounded-full bg-[#4a4a4a] px-6 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Find your style</button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 lg:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-[40px] font-medium uppercase tracking-[0.02em] text-black">New Arrivals</h2>
            <div className="mt-10">
              <ProductGrid products={newArrivals} />
            </div>
            <div className="mt-12 text-center">
              <Link href="/new-arrivals" className="inline-flex rounded-full border border-[#2b2b2b] px-6 py-2 text-[12px] font-semibold uppercase tracking-[0.06em] text-black transition hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">View more</Link>
            </div>
          </div>
        </section>

        <section className="bg-[#efefef] py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-[42px] font-medium uppercase">About us</h2>
            <h3 className="mt-8 text-center text-[36px] font-semibold uppercase">100% Authentic branded items from Japan</h3>
            <p className="mx-auto mt-6 max-w-[960px] text-center text-[18px] uppercase leading-[1.8] text-[#2d2d2d]">Carefully selected and imported directly from Japan. With over 10 years of experience in authentic secondhand branded goods, we guarantee genuine quality. Each item is thoroughly inspected before delivery.</p>
          </div>
        </section>

        <section className="py-14">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center"><Truck className="mx-auto" /><h4 className="mt-3 text-[17px] font-semibold">Fast And Free Delivery</h4><p className="mt-2 text-[14px] text-[#666]">Free delivery for all orders over $140</p></div>
              <div className="text-center"><Headset className="mx-auto" /><h4 className="mt-3 text-[17px] font-semibold">24/7 Customer Support</h4><p className="mt-2 text-[14px] text-[#666]">Friendly 24/7 customer support</p></div>
              <div className="text-center"><ShieldCheck className="mx-auto" /><h4 className="mt-3 text-[17px] font-semibold">Money Back Guarantee</h4><p className="mt-2 text-[14px] text-[#666]">We return money within 30 days</p></div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
