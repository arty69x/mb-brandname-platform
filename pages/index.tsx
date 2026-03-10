import Layout from '@/components/layout/Layout';
import SEO from '@/components/layout/SEO';
import ProductCard from '@/components/commerce/ProductCard';
import { Headphones, ShieldCheck, Truck } from 'lucide-react';
import { products } from '@/data/products';
import { canonical } from '@/lib/seo';

const heroRight = 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1400&q=80';
const heroLeftTop = 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80';
const heroLeftBottom = 'https://images.unsplash.com/photo-1617113930975-f9c7243ae527?auto=format&fit=crop&w=1200&q=80';
const storyImage = 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=1000&q=80';

export default function HomePage() {
  const newArrivals = products.slice(0, 4);

  return (
    <Layout headerVariant="home">
      <SEO title="MB BRANDNAME — No.1 Luxury Store" description="Discover MB BRANDNAME. Luxury bags, accessories, and new arrivals." canonical={canonical('/')} />
      <main>
        <section className="relative min-h-screen">
          <div className="container mx-auto px-4">
            <div className="absolute inset-0 grid h-full w-full grid-cols-12 grid-rows-6">
              <div className="col-span-7 row-span-6">
                <img src={heroRight} alt="Hero model" className="h-full w-full object-cover" />
              </div>
              <div className="col-span-5 row-span-3">
                <img src={heroLeftTop} alt="Hero close up" className="h-full w-full object-cover" />
              </div>
              <div className="col-span-5 row-span-3">
                <img src={heroLeftBottom} alt="Hero jewelry" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <h1 className="text-center text-[30px] font-light tracking-[0.06em] text-white lg:text-[52px]">NO.1 LUXURY BRANDNAME STONE</h1>
            </div>
            <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-2">
              {[1, 2, 3, 4].map((dot) => <span key={dot} className={`h-1.5 w-1.5 rounded-full ${dot === 2 ? 'bg-white' : 'bg-white/45'}`} />)}
            </div>
          </div>
        </section>

        <section className="bg-[#efefef] py-14 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-[980px] grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={storyImage} alt="Story necklace" className="h-full w-full object-cover" />
              </div>
              <div>
                <h2 className="text-[34px] leading-[1.2] text-[var(--text)]">Each necklace has its own unique story to tell.</h2>
                <p className="mt-6 text-[14px] leading-[1.7] text-[var(--muted)]">In the world of fashion, true luxury is not defined by price alone, but by the story behind each piece.</p>
                <p className="mt-4 text-[14px] leading-[1.7] text-[var(--muted)]">This necklace was designed to embody timeless elegance. The gold-tone chain is meticulously crafted, gleaming under the light like a treasure from a classic era.</p>
                <button className="mt-6 rounded-full bg-[var(--cta)] px-6 py-2 text-[11px] uppercase tracking-[0.12em] text-white">FIND YOUR STYLE</button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--bg-alt)] py-14 lg:py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-[32px] uppercase tracking-[0.1em]">NEW ARRIVALS</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
              {Array.isArray(newArrivals) ? newArrivals.map((product) => <ProductCard key={product.id} product={product} />) : null}
            </div>
            <div className="mt-10 text-center">
              <button className="rounded-full bg-[var(--cta)] px-6 py-2 text-[11px] uppercase tracking-[0.12em] text-white">View More</button>
            </div>
          </div>
        </section>

        <section className="bg-[#ececec] py-14 lg:py-20">
          <div className="container mx-auto px-4">
            <h3 className="text-center text-[30px] uppercase tracking-[0.08em]">ABOUT US</h3>
            <p className="mt-10 text-center text-[34px] font-medium uppercase">100% AUTHENTIC BRANDED ITEMS FROM JAPAN</p>
            <p className="mx-auto mt-6 max-w-[920px] text-center text-[14px] uppercase leading-[1.8] text-[var(--muted)]">CAREFULLY SELECTED AND IMPORTED DIRECTLY FROM JAPAN WITH OVER 10 YEARS OF EXPERIENCE IN AUTHENTIC SECONDHAND BRANDED GOODS, WE GUARANTEE GENUINE QUALITY. EACH ITEM IS THOROUGHLY INSPECTED BEFORE DELIVERY.</p>
          </div>
        </section>

        <section className="py-14 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center"><Truck className="mx-auto" size={28} /><p className="mt-3 text-[14px] font-medium">Fast And Free Delivery</p><p className="text-[12px] text-[var(--caption)]">Free delivery for all orders over $140</p></div>
              <div className="text-center"><Headphones className="mx-auto" size={28} /><p className="mt-3 text-[14px] font-medium">24/7 Customer Support</p><p className="text-[12px] text-[var(--caption)]">Friendly 24/7 customer support</p></div>
              <div className="text-center"><ShieldCheck className="mx-auto" size={28} /><p className="mt-3 text-[14px] font-medium">Money Back Guarantee</p><p className="text-[12px] text-[var(--caption)]">We return money within 30 days</p></div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
