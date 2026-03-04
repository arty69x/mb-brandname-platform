import { ProductGrid } from "./Commerce/ProductGrid";
import { Container } from "./Layout/Container";
import { FeatureIcons } from "./Marketing/FeatureIcons";
import { Hero } from "./Marketing/Hero";
import { Newsletter } from "./Marketing/Newsletter";
import { StorySection } from "./Marketing/StorySection";
import { products } from "@/lib/data/products";

export function HomeSections() {
  return (
    <>
      <Hero />
      <section className="py-10 md:py-16">
        <Container>
          <h2 className="mb-6 text-2xl font-semibold">New Arrivals</h2>
          <ProductGrid products={products.slice(0, 8)} />
        </Container>
      </section>
      <StorySection />
      <section className="py-10 md:py-16">
        <Container>
          <h2 className="mb-4 text-2xl font-semibold">About Brandname</h2>
          <p className="max-w-3xl text-sm leading-7 text-[#666666]">We create modern essentials with premium materials and a minimalist design language focused on durability and utility.</p>
        </Container>
      </section>
      <FeatureIcons />
      <Newsletter />
    </>
  );
}
