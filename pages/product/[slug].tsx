import Image from 'next/image';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout/Layout';
import ProductGrid from '@/components/Commerce/ProductGrid';
import { getProductBySlug, getProductReviews, getRelatedProducts } from '@/lib/data/products';

export default function ProductPage() {
  const router = useRouter();
  const slug = typeof router.query.slug === 'string' ? router.query.slug : '';
  const product = useMemo(() => getProductBySlug(slug), [slug]);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <Layout>
        <main>
          <section className="py-16">
            <div className="container mx-auto px-4">
              <p className="text-[18px] text-[#666]">Product not found.</p>
            </div>
          </section>
        </main>
      </Layout>
    );
  }

  const related = getRelatedProducts(product.category, product.id);
  const productReviews = getProductReviews(product);

  return (
    <Layout>
      <main>
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="grid gap-4 sm:grid-cols-12">
                  <div className="order-2 flex gap-3 sm:order-1 sm:col-span-2 sm:flex-col">
                    {(Array.isArray(product.images) ? product.images : []).slice(0, 3).map((image) => (
                      <div key={image} className="relative aspect-square flex-1 overflow-hidden border border-[#d5d5d5] bg-[#eee] sm:flex-none">
                        <Image src={image} alt={`${product.title} thumbnail`} fill loading="lazy" className="object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="order-1 sm:order-2 sm:col-span-10">
                    <div className="relative aspect-square overflow-hidden bg-[#ececec]">
                      <Image src={product.images[0]} alt={product.title} fill priority className="object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 lg:pl-8">
                <p className="text-[11px] uppercase tracking-[0.06em] text-[#777]">Home / The shop</p>
                <h1 className="mt-6 text-[38px] font-medium leading-[1.2]">{product.title}</h1>
                <p className="mt-4 text-[34px] font-semibold">${product.price}</p>
                <p className="mt-5 max-w-[520px] text-[15px] leading-[1.8] text-[#555]">{product.description}</p>

                <div className="mt-8 flex gap-3">
                  <div className="flex h-[46px] items-center border border-black">
                    <button onClick={() => setQuantity((prev) => Math.max(1, prev - 1))} aria-label="Decrease quantity" className="w-10 text-xl transition hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-black">-</button>
                    <span className="w-10 text-center text-[15px]">{quantity}</span>
                    <button onClick={() => setQuantity((prev) => prev + 1)} aria-label="Increase quantity" className="w-10 text-xl transition hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-black">+</button>
                  </div>
                  <button className="h-[46px] bg-black px-10 text-[12px] font-semibold uppercase tracking-[0.06em] text-white transition hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Add to cart</button>
                </div>

                <div className="mt-8 border-t border-[#ddd] pt-5 text-[13px] text-[#666]">
                  <p>SKU: N/A</p>
                  <p className="mt-2">Category: {product.category}</p>
                  <p className="mt-2">Tags: shirt, women, leather</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-[14px] font-semibold uppercase tracking-[0.04em]">Description</h2>
                <p className="mt-4 text-[14px] leading-[1.85] text-[#666]">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. {product.description}</p>
              </div>
              <div>
                <h2 className="text-[14px] font-semibold uppercase tracking-[0.04em]">Additional information</h2>
                <ul className="mt-4 space-y-3 text-[14px] text-[#666]">
                  <li>Weight: 1.2 kg</li>
                  <li>Dimensions: 90 × 40 × 60 cm</li>
                  <li>Size: XS, S, M, L, XL</li>
                  <li>Color: Black, Orange, White</li>
                  <li>Storage: Relaxed fit silhouette dress with a ragged hem.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-12">
          <div className="container mx-auto px-4">
            <h2 className="text-[20px] font-semibold">Reviews</h2>
            <div className="mt-6 space-y-6">
              {Array.isArray(productReviews) && productReviews.length > 0 ? (
                productReviews.map((review) => (
                  <article key={review.id} className="border-t border-[#ddd] py-4">
                    <p className="text-[14px] font-semibold">{review.author} <span className="ml-2 text-[#777] font-normal">{review.date}</span></p>
                    <p className="mt-2 text-[14px] leading-7 text-[#666]">{review.comment}</p>
                  </article>
                ))
              ) : (
                <p className="text-[14px] text-[#777]">No reviews yet.</p>
              )}
            </div>

            <form className="mt-10 grid gap-4">
              <textarea className="min-h-[140px] border border-black px-4 py-3 text-[14px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-black" placeholder="Your review" />
              <input className="h-[46px] border border-black px-4 text-[14px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-black" placeholder="Name" />
              <input className="h-[46px] border border-black px-4 text-[14px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-black" placeholder="Email" type="email" />
              <button className="h-[46px] w-[150px] bg-black text-[12px] font-semibold uppercase tracking-[0.05em] text-white transition hover:bg-black/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Submit</button>
            </form>
          </div>
        </section>

        <section className="pb-10">
          <div className="container mx-auto px-4">
            <h2 className="text-[32px] font-semibold uppercase">Related Products</h2>
            <div className="mt-8">
              <ProductGrid products={related} />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
