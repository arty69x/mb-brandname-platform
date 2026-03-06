import Layout from '@/components/Layout/Layout';

export default function CheckoutPage() {
  return (
    <Layout>
      <main>
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-[44px] font-medium uppercase">Checkout</h1>
            <div className="mt-8 grid gap-8 lg:grid-cols-12">
              <form className="grid gap-4 rounded border border-[#ddd] p-6 lg:col-span-8">
                <h2 className="text-[22px] font-semibold">Shipping details</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <input className="h-[48px] border border-[#1f1f1f] px-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black" placeholder="First name" />
                  <input className="h-[48px] border border-[#1f1f1f] px-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black" placeholder="Last name" />
                </div>
                <input className="h-[48px] border border-[#1f1f1f] px-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black" placeholder="Street address" />
                <div className="grid gap-4 md:grid-cols-2">
                  <input className="h-[48px] border border-[#1f1f1f] px-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black" placeholder="City" />
                  <input className="h-[48px] border border-[#1f1f1f] px-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black" placeholder="ZIP code" />
                </div>
                <input type="email" className="h-[48px] border border-[#1f1f1f] px-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black" placeholder="Email address" />
                <h3 className="mt-2 text-[18px] font-semibold">Payment method</h3>
                <label className="flex items-center gap-3 text-[14px]"><input type="radio" name="payment" defaultChecked /> Credit card</label>
                <label className="flex items-center gap-3 text-[14px]"><input type="radio" name="payment" /> PayPal</label>
                <button className="mt-4 h-[48px] w-full bg-black text-[12px] font-semibold uppercase tracking-[0.05em] text-white transition hover:bg-black/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Confirm order</button>
              </form>

              <aside className="rounded border border-[#ddd] p-6 lg:col-span-4">
                <h2 className="text-[22px] font-semibold">Order summary</h2>
                <div className="mt-5 space-y-3 text-[15px]">
                  <div className="flex items-center justify-between"><span>Cropped Faux Leather Jacket</span><span>$29</span></div>
                  <div className="flex items-center justify-between"><span>Calvin Shorts</span><span>$62</span></div>
                  <div className="flex items-center justify-between"><span>Shipping</span><span>Free</span></div>
                </div>
                <div className="mt-6 border-t border-[#ddd] pt-4 text-[21px] font-semibold">
                  <div className="flex items-center justify-between"><span>Total</span><span>$91</span></div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
