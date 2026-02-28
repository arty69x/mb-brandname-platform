import Link from "next/link";
import { Headphones, ShieldCheck, Truck } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/product/ProductCard";
import { Container, Section } from "@/components/ui/Core";
import { PRODUCTS } from "@/lib/products";

export default function Home() {
  return (
    <Layout>
      <section className="relative h-[52vh] md:h-[60vh] w-full overflow-hidden text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={PRODUCTS[0].images[0]} className="absolute inset-0 w-full h-full object-cover" alt="Hero" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-3xl md:text-5xl font-light uppercase tracking-[0.08em]">NO.1 Luxury Brandname Stone</h1>
            <div className="mt-8">
              <Link href="/shop" className="border border-white px-5 py-2 text-[11px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition">
                Explore
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section className="py-16 md:py-20 bg-[#ececec]">
        <Container>
          <h2 className="text-center uppercase tracking-[0.15em] text-2xl mb-12">New Arrivals</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {PRODUCTS.slice(0, 8).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/shop" className="inline-block px-5 py-2 rounded-full bg-[#555] text-white text-[10px] uppercase tracking-[0.2em]">
              View More
            </Link>
          </div>
        </Container>
      </Section>

      <Section className="py-16 md:py-20 bg-white">
        <Container className="grid md:grid-cols-2 gap-10 items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={PRODUCTS[2].images[0]} className="w-full max-w-[320px] mx-auto aspect-[3/4] object-cover" alt="Story" />
          <div className="space-y-5">
            <h3 className="text-3xl font-medium">Each necklace has its own unique story to tell.</h3>
            <p className="leading-relaxed text-sm opacity-80">
              In the world of fashion, true luxury is not defined by price alone, but by the story behind each piece.
            </p>
            <p className="leading-relaxed text-sm opacity-80">
              This necklace was designed to embody timeless elegance. The gold-tone chain is meticulously crafted,
              gleaming under the light like a treasure from a classic era that still feels modern today.
            </p>
            <Link href="/shop" className="inline-block px-4 py-2 rounded-full bg-[#555] text-white text-[10px] uppercase tracking-[0.2em]">
              Find Your Style
            </Link>
          </div>
        </Container>
      </Section>

      <Section className="py-16 bg-[#ececec] text-center">
        <Container className="max-w-4xl space-y-6">
          <h2 className="uppercase tracking-[0.15em] text-3xl">About Us</h2>
          <h3 className="uppercase tracking-[0.08em] text-xl font-semibold">100% Authentic Branded Items from Japan</h3>
          <p className="uppercase text-sm tracking-[0.06em] leading-relaxed opacity-80">
            Carefully selected and imported directly from Japan. With over 10 years of experience in authentic secondhand branded goods,
            we guarantee genuine quality. Each item is thoroughly inspected before delivery.
          </p>
        </Container>
      </Section>

      <Section className="py-14 bg-white">
        <Container className="grid md:grid-cols-3 gap-10 text-center">
          <div className="space-y-3">
            <Truck className="mx-auto" size={22} />
            <h4 className="uppercase text-sm tracking-[0.08em]">Fast and Free Delivery</h4>
            <p className="text-xs opacity-70">Free delivery for all orders over $140</p>
          </div>
          <div className="space-y-3">
            <Headphones className="mx-auto" size={22} />
            <h4 className="uppercase text-sm tracking-[0.08em]">24/7 Customer Support</h4>
            <p className="text-xs opacity-70">Friendly 24/7 customer support</p>
          </div>
          <div className="space-y-3">
            <ShieldCheck className="mx-auto" size={22} />
            <h4 className="uppercase text-sm tracking-[0.08em]">Money Back Guarantee</h4>
            <p className="text-xs opacity-70">We return money within 30 days</p>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
