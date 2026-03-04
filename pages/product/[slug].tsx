import { useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout/Layout';
import ProductGallery from '@/components/Commerce/ProductGallery';
import AddToCart from '@/components/Commerce/AddToCart';
import WishlistButton from '@/components/Commerce/WishlistButton';
import ProductGrid from '@/components/Commerce/ProductGrid';
import Tabs from '@/components/UI/Tabs';
import Input from '@/components/UI/Input';
import Button from '@/components/UI/Button';
import { getProductBySlug, getRelatedProducts, getProductReviews } from '@/lib/data/products';

export default function ProductPage() {
  const router = useRouter();
  const slug = typeof router.query.slug === 'string' ? router.query.slug : '';
  const product = useMemo(() => getProductBySlug(slug), [slug]);
  const [activeTab, setActiveTab] = useState('Description');

  if (!product) return <Layout><main><section className="py-16"><div className="container mx-auto px-4">Product not found.</div></section></main></Layout>;
  const related = getRelatedProducts(product.category, product.id);
  const productReviews = getProductReviews(product);

  return (
    <Layout>
      <main>
        <section className="py-16"><div className="container mx-auto px-4"><div className="grid gap-8 lg:grid-cols-2"><ProductGallery images={product.images} title={product.title} /><div><h1 className="text-3xl font-semibold">{product.title}</h1><p className="mt-4 text-[#666666]">{product.description}</p><p className="mt-4 text-xl font-semibold">${product.price}</p><div className="mt-6 flex gap-4"><AddToCart /><WishlistButton /></div></div></div></div></section>
        <section className="pb-16"><div className="container mx-auto px-4"><Tabs tabs={['Description', 'Additional information', 'Reviews']} active={activeTab} onChange={setActiveTab} /><div className="mt-6 rounded border border-[#e5e5e5] p-6">{activeTab === 'Description' && <p>{product.description}</p>}{activeTab === 'Additional information' && <p>Inventory: {product.inventory} | Rating: {product.rating}</p>}{activeTab === 'Reviews' && <div><ul className="space-y-4">{productReviews.map((review) => <li key={review.id}><p className="font-semibold">{review.author} ({review.rating}/5)</p><p className="text-[#666666]">{review.comment}</p></li>)}</ul><form className="mt-8 grid gap-4"><Input placeholder="Your name" aria-label="Your name" /><Input placeholder="Your review" aria-label="Your review" /><Button type="submit">Submit review</Button></form></div>}</div></div></section>
        <section className="pb-16"><div className="container mx-auto px-4"><h2 className="text-2xl font-semibold">Related products</h2><div className="mt-6"><ProductGrid products={related} /></div></div></section>
      </main>
    </Layout>
  );
}
