import { useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/layout/SEO';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Tabs from '@/components/ui/Tabs';
import Button from '@/components/ui/Button';
import QuantityStepper from '@/components/commerce/QuantityStepper';
import ProductCard from '@/components/commerce/ProductCard';
import { products } from '@/data/products';
import { canonical } from '@/lib/seo';
import { addToCart } from '@/lib/cart';
import { getWishlist, toggleWishlist } from '@/lib/wishlist';

export default function ProductPage() {
  const router = useRouter();
  const slug = typeof router.query.slug === 'string' ? router.query.slug : '';
  const product = useMemo(() => products.find((item) => item.slug === slug), [slug]);
  const [imgIdx, setImgIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const [wish, setWish] = useState(product ? getWishlist().includes(product.id) : false);

  if (!product) {
    return (
      <Layout>
        <main>
          <section>
            <div className="container mx-auto px-4 py-14">
              <h1 className="text-[22px] uppercase tracking-[0.2em]">Product not found</h1>
            </div>
          </section>
        </main>
      </Layout>
    );
  }

  const images = Array.isArray(product.images) && product.images.length > 0 ? product.images : [''];
  const activeImage = images[imgIdx] ?? images[0] ?? '';

  return (
    <Layout>
      <SEO title={`${product.title} — MB BRANDNAME`} description={product.shortDescription} canonical={canonical(`/product/${product.slug}`)} />
      <main>
        <section className="pt-6 pb-10 lg:pt-10 lg:pb-14">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[70px_1fr_1fr] lg:gap-10">
              <div className="order-2 grid grid-cols-4 gap-2 lg:order-1 lg:grid-cols-1">
                {images.map((src, index) => (
                  <button key={`${src}-${index}`} onClick={() => setImgIdx(index)} className={`aspect-square overflow-hidden border ${imgIdx === index ? 'border-[var(--text)]' : 'border-[var(--border)]'}`}>
                    <img src={src} alt={`${product.title} thumbnail ${index + 1}`} className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative aspect-square overflow-hidden bg-[var(--bg-alt)]">
                  <img src={activeImage} alt={product.title} className="h-full w-full object-cover" />
                  <button aria-label="Previous image" className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2" onClick={() => setImgIdx((prev) => (prev - 1 + images.length) % images.length)}><ChevronLeft size={16} /></button>
                  <button aria-label="Next image" className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2" onClick={() => setImgIdx((prev) => (prev + 1) % images.length)}><ChevronRight size={16} /></button>
                </div>
              </div>

              <div className="order-3">
                <Breadcrumbs items={[{ href: '/', label: 'Home' }, { href: '/shop', label: 'The Shop' }]} />
                <h1 className="mt-6 text-[30px] leading-[1.2]">{product.title}</h1>
                <p className="mt-3 text-[30px] font-medium">${product.price}</p>
                <p className="mt-4 text-[14px] leading-[1.7] text-[var(--muted)]">{product.description}</p>

                <div className="mt-6 flex items-center gap-3">
                  <QuantityStepper value={qty} onChange={setQty} />
                  <Button className="min-w-[220px]" onClick={() => addToCart(product.id, qty)}>ADD TO CART</Button>
                </div>

                <div className="mt-4 flex items-center gap-6 text-[12px] uppercase tracking-[0.12em]">
                  <button onClick={() => { const next = toggleWishlist(product.id); setWish(next.includes(product.id)); }}>
                    {wish ? 'In wishlist' : 'Add to wishlist'}
                  </button>
                  <button onClick={() => { void navigator.clipboard.writeText(window.location.href); }}>Share</button>
                </div>

                <div className="mt-6 text-[12px] uppercase tracking-[0.12em] text-[var(--caption)]">
                  <p>SKU: mb-{product.id}</p>
                  <p className="mt-2">Category: {product.category}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 lg:py-14">
          <div className="container mx-auto px-4">
            <h2 className="mb-6 text-[12px] uppercase tracking-[0.12em]">Description</h2>
            <p className="text-[14px] leading-[1.8] text-[var(--muted)]">{product.description}</p>
          </div>
        </section>

        <section className="py-10 lg:py-14">
          <div className="container mx-auto px-4">
            <Tabs
              tabs={[
                { id: 'description', label: 'DESCRIPTION', content: product.description },
                {
                  id: 'additional',
                  label: 'ADDITIONAL INFORMATION',
                  content: (
                    <div className="space-y-2">
                      {Array.isArray(product.additionalInfo)
                        ? product.additionalInfo.map((item) => (
                            <p key={item.label} className="text-[14px]">
                              <span className="font-medium">{item.label}:</span> {item.value}
                            </p>
                          ))
                        : null}
                    </div>
                  )
                },
                {
                  id: 'reviews',
                  label: 'REVIEWS (2)',
                  content: (
                    <div>
                      <p className="mb-4 text-[14px]">Be the first to review “{product.title}”</p>
                      <textarea className="min-h-36 w-full border border-[var(--border)] p-3 text-[14px]" placeholder="Your Review" />
                      <input className="mt-3 h-10 w-full border border-[var(--border)] px-3 text-[14px]" placeholder="Name" />
                      <input className="mt-3 h-10 w-full border border-[var(--border)] px-3 text-[14px]" placeholder="Email" />
                      <button className="mt-4 bg-black px-8 py-3 text-[12px] uppercase tracking-[0.12em] text-white">Submit</button>
                    </div>
                  )
                }
              ]}
            />
          </div>
        </section>

        <section className="py-10 lg:py-14">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-[24px] uppercase tracking-[0.08em]">Related Products</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {products.slice(0, 4).map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
