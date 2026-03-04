import Layout from '@/components/Layout/Layout';
import Hero from '@/components/Marketing/Hero';
import StorySection from '@/components/Marketing/StorySection';
import FeatureIcons from '@/components/Marketing/FeatureIcons';
import Newsletter from '@/components/Marketing/Newsletter';
import ProductGrid from '@/components/Commerce/ProductGrid';
import { products } from '@/lib/data/products';

export default function HomePage() {
  return (
    <Layout>
      <main>
        <Hero />
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold">New Arrivals</h2>
            <div className="mt-8">
              <ProductGrid products={products.slice(0, 8)} />
            </div>
          </div>
        </section>
        <StorySection />
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold">About</h2>
            <p className="mt-4 max-w-3xl text-[#666666]">We design reliable goods from responsibly sourced materials with details that support your daily routines.</p>
          </div>
        </section>
        <FeatureIcons />
        <Newsletter />
      </main>
    </Layout>
  );
}
