import Link from "next/link";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/product/ProductCard";
import { Container, Section } from "@/components/ui/Core";
import { PRODUCTS } from "@/lib/products";

export default function Home() {
  return (
    <Layout>
      <section className="relative h-[75vh] w-full bg-black text-white flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={PRODUCTS[0].images[0]} className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Hero" />
        <div className="relative z-10 space-y-12 flex flex-col items-center">
          <h1 className="uppercase font-light tracking-[0.55em] text-6xl md:text-8xl leading-tight font-serif">LUXURY ARCHIVE</h1>
          <Link
            href="/shop"
            className="uppercase font-black tracking-[0.3em] text-[11px] h-10 px-6 flex items-center justify-center border border-white hover:bg-white hover:text-black transition"
          >
            EXPLORE NOW
          </Link>
        </div>
      </section>

      <Section className="py-32">
        <Container>
          <h2 className="uppercase font-light tracking-[0.45em] text-2xl md:text-4xl text-center mb-24 font-serif">NEW ARRIVALS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            {PRODUCTS.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
