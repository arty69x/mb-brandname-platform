import Image from "next/image";
import { heroImages } from "@/lib/data/products";
import { Container } from "../Layout/Container";

export function StorySection() {
  return (
    <section className="py-10 md:py-16">
      <Container>
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="mb-2 text-sm uppercase tracking-[0.16em] text-[#666666]">Our story</p>
            <h2 className="mb-4 text-2xl font-semibold text-[#111111] md:text-4xl">Built with utility, finished with intention.</h2>
            <p className="text-sm leading-7 text-[#666666]">From first sketches to final stitch, each piece is refined to balance comfort, resilience, and timeless style.</p>
          </div>
          <div className="lg:col-span-6 relative min-h-[280px] overflow-hidden rounded-lg">
            <Image src={heroImages[1]} alt="Design studio" fill className="object-cover" sizes="(max-width:1024px) 100vw, 40vw" />
          </div>
        </div>
      </Container>
    </section>
  );
}
