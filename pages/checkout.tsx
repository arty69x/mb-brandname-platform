import { Layout } from "@/components/Layout/Layout";
import { Container } from "@/components/Layout/Container";

export default function CheckoutPage() {
  return (
    <Layout>
      <section className="py-10 md:py-16"><Container><h1 className="mb-6 text-3xl font-semibold">Checkout</h1><div className="grid gap-6 lg:grid-cols-12"><form className="grid gap-3 lg:col-span-7"><h2 className="text-lg font-medium">Shipping form</h2><input className="rounded-md border border-[#e5e5e5] p-2" placeholder="Full name" /><input className="rounded-md border border-[#e5e5e5] p-2" placeholder="Address" /><input className="rounded-md border border-[#e5e5e5] p-2" placeholder="City" /><h2 className="mt-4 text-lg font-medium">Payment section</h2><input className="rounded-md border border-[#e5e5e5] p-2" placeholder="Card number" /></form><aside className="lg:col-span-5 rounded-lg border border-[#e5e5e5] p-4"><h2 className="mb-3 text-lg font-medium">Order summary</h2><p className="text-sm text-[#666666]">3 items • $287.00</p></aside></div></Container></section>
    </Layout>
  );
}
