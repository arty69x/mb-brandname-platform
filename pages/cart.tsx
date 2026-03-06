import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout/Layout';
import { products } from '@/lib/data/products';

export default function CartPage() {
  const cartItems = Array.isArray(products) ? products.slice(0, 2) : [];
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <Layout>
      <main>
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-[44px] font-medium uppercase">Cart</h1>
            {cartItems.length === 0 ? (
              <p className="mt-6 text-[#666]">Your cart is empty.</p>
            ) : (
              <div className="mt-8 grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-8">
                  <ul className="divide-y divide-[#ddd] border-y border-[#ddd]">
                    {cartItems.map((item) => (
                      <li key={item.id} className="grid gap-4 py-5 sm:grid-cols-12 sm:items-center">
                        <div className="relative aspect-square w-[100px] overflow-hidden bg-[#eee] sm:col-span-2">
                          <Image src={item.images[0]} alt={item.title} fill loading="lazy" className="object-cover" />
                        </div>
                        <div className="sm:col-span-5">
                          <p className="text-[11px] uppercase text-[#888]">{item.type}</p>
                          <h2 className="mt-1 text-[18px]">{item.title}</h2>
                        </div>
                        <p className="text-[18px] sm:col-span-2">${item.price}</p>
                        <div className="sm:col-span-3 sm:text-right">
                          <button className="text-[12px] uppercase tracking-[0.04em] text-[#777] underline underline-offset-2">Remove</button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded border border-[#ddd] p-6 lg:col-span-4">
                  <h2 className="text-[22px] font-semibold">Order Summary</h2>
                  <div className="mt-5 flex items-center justify-between text-[16px]"><span>Subtotal</span><span>${subtotal}</span></div>
                  <div className="mt-3 flex items-center justify-between text-[16px]"><span>Shipping</span><span>Free</span></div>
                  <div className="mt-4 border-t border-[#ddd] pt-4 text-[20px] font-semibold"><div className="flex items-center justify-between"><span>Total</span><span>${subtotal}</span></div></div>
                  <Link href="/checkout" className="mt-6 inline-flex h-[48px] w-full items-center justify-center bg-black text-[12px] font-semibold uppercase tracking-[0.06em] text-white transition hover:bg-black/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Proceed to checkout</Link>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}
