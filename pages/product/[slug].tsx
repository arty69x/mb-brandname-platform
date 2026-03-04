import { Layout } from "@/components/Layout/Layout";
import { Container } from "@/components/Layout/Container";
import { ProductGallery } from "@/components/Commerce/ProductGallery";
import { products } from "@/lib/data/products";
import { AddToCart } from "@/components/Commerce/AddToCart";
import { WishlistButton } from "@/components/Commerce/WishlistButton";
import { Tabs } from "@/components/UI/Tabs";
import { ProductGrid } from "@/components/Commerce/ProductGrid";
import { useRouter } from "next/router";

export default function ProductDetailPage() {
  const router = useRouter();
  const slug = typeof router.query.slug === "string" ? router.query.slug : "";
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return <Layout><section className="py-10"><Container><p className="text-sm text-[#666666]">Product not found.</p></Container></section></Layout>;
  }

  return (
    <Layout>
      <section className="py-10 md:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6"><ProductGallery images={product.images} title={product.title} /></div>
            <div className="lg:col-span-6">
              <p className="text-xs uppercase tracking-[0.16em] text-[#666666]">{product.category}</p>
              <h1 className="mb-3 mt-2 text-3xl font-semibold">{product.title}</h1>
              <p className="mb-4 text-xl">${product.price.toFixed(2)}</p>
              <p className="mb-6 text-sm leading-7 text-[#666666]">{product.description}</p>
              <div className="mb-8 flex gap-3"><AddToCart /><WishlistButton /></div>
              <Tabs items={[{ label: "Description", content: product.description }, { label: "Additional information", content: `Inventory: ${product.inventory} units` }, { label: "Reviews", content: `${product.rating} stars across ${product.reviews.length} reviews.` }]} />
            </div>
          </div>
        </Container>
      </section>
      <section className="py-10 md:py-16">
        <Container>
          <h2 className="mb-4 text-2xl font-semibold">Review form</h2>
          <form className="grid gap-3 md:grid-cols-2">
            <input aria-label="Name" className="rounded-md border border-[#e5e5e5] p-2" placeholder="Name" />
            <input aria-label="Email" className="rounded-md border border-[#e5e5e5] p-2" placeholder="Email" />
            <textarea aria-label="Review" className="md:col-span-2 rounded-md border border-[#e5e5e5] p-2" placeholder="Write your review" rows={4} />
            <button className="md:col-span-2 rounded-md bg-[#111111] px-4 py-2 text-white">Submit Review</button>
          </form>
        </Container>
      </section>
      <section className="py-10 md:py-16">
        <Container>
          <h2 className="mb-6 text-2xl font-semibold">Related products</h2>
          <ProductGrid products={products.filter((item) => item.category === product.category).slice(0, 4)} />
        </Container>
      </section>
    </Layout>
  );
}
