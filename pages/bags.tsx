import { Layout } from "@/components/Layout/Layout";
import { Container } from "@/components/Layout/Container";
import { ProductGrid } from "@/components/Commerce/ProductGrid";
import { products } from "@/lib/data/products";

export default function BagsPage() {
  return (
    <Layout>
      <section className="py-10 md:py-16"><Container><h1 className="mb-6 text-3xl font-semibold">Bags</h1><ProductGrid products={products.filter((item) => item.category === "Bags")} /></Container></section>
    </Layout>
  );
}
