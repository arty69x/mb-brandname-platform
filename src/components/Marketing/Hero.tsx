import Image from "next/image";
import Link from "next/link";
import { heroImages } from "@/lib/data/products";
import { Button } from "../UI/Button";
import { Container } from "../Layout/Container";

export function Hero() {
  return (
    <section className="py-10 md:py-16">
      <Container>
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7 relative min-h-[360px] overflow-hidden rounded-lg">
            <Image src={heroImages[0]} alt="Luxury storefront hero" fill className="object-cover" priority sizes="(max-width:1024px) 100vw, 60vw" />
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center gap-4">
            <p className="text-sm uppercase tracking-[0.16em] text-[#666666]">New season collection</p>
            <h1 className="text-3xl font-semibold text-[#111111] md:text-5xl">Elevated essentials for every day.</h1>
            <p className="text-sm leading-6 text-[#666666]">Discover lightweight layers, premium bags, and accessories crafted for movement.</p>
            <div className="flex gap-3">
              <Button>Shop Now</Button>
              <Link href="/new-arrivals" className="inline-flex items-center rounded-md border border-[#e5e5e5] px-4 py-2 text-sm text-[#111111] hover:border-[#111111] focus-visible:ring-2 focus-visible:ring-[#111111]">View New Arrivals</Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
