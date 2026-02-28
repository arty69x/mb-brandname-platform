"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button, Container, Section } from "@/components/ui/Core";
import { useStore } from "@/context/store";
import { luhnCheck, validateEmail, validateExpiry } from "@/lib/validation";

export default function Checkout() {
  const { cart, cartTotal, clearCart, addOrder, trackEvent } = useStore();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: "", cc: "", expM: "", expY: "", cvc: "" });
  const [err, setErr] = useState("");

  if (cart.length === 0) {
    if (typeof window !== "undefined") router.push("/shop");
    return null;
  }

  const handleCheckout = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErr("");
    if (!validateEmail(form.email)) return setErr("Invalid email");
    if (!luhnCheck(form.cc)) return setErr("Invalid card number");
    if (!validateExpiry(form.expM, form.expY)) return setErr("Card expired");
    if (form.cvc.length < 3) return setErr("Invalid CVC");

    setLoading(true);
    await trackEvent("begin_checkout", { value: cartTotal });
    await new Promise((r) => setTimeout(r, 1200));

    const orderId = `MB-${Date.now()}`;
    addOrder({ id: orderId, status: "PAID", items: [...cart], total: cartTotal, date: new Date().toISOString() });
    await trackEvent("purchase_success", { value: cartTotal });
    clearCart();
    router.push(`/orders/${orderId}`);
  };

  return (
    <Layout>
      <Section className="py-24">
        <Container className="max-w-2xl flex flex-col gap-16">
          <h1 className="uppercase font-light tracking-[0.45em] text-2xl md:text-4xl text-center font-serif">CHECKOUT</h1>
          <form onSubmit={handleCheckout} className="flex flex-col gap-12">
            {err && <div className="bg-red-50 text-red-600 p-4 font-black uppercase tracking-[0.3em] text-[11px] text-center border border-red-200">{err}</div>}
            <input required type="email" placeholder="EMAIL ADDRESS" onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full border border-gray-300 p-4 uppercase font-black tracking-[0.3em] text-[11px] outline-none focus:border-black" />
            <input required type="text" placeholder="CARD NUMBER" onChange={(e) => setForm({ ...form, cc: e.target.value })} className="w-full border border-gray-300 p-4 uppercase font-black tracking-[0.3em] text-[11px] outline-none focus:border-black" />
            <div className="grid grid-cols-3 gap-8">
              <input required type="text" placeholder="MM" maxLength={2} onChange={(e) => setForm({ ...form, expM: e.target.value })} className="w-full border border-gray-300 p-4 uppercase font-black tracking-[0.3em] text-[11px] outline-none focus:border-black" />
              <input required type="text" placeholder="YY" maxLength={2} onChange={(e) => setForm({ ...form, expY: e.target.value })} className="w-full border border-gray-300 p-4 uppercase font-black tracking-[0.3em] text-[11px] outline-none focus:border-black" />
              <input required type="text" placeholder="CVC" maxLength={4} onChange={(e) => setForm({ ...form, cvc: e.target.value })} className="w-full border border-gray-300 p-4 uppercase font-black tracking-[0.3em] text-[11px] outline-none focus:border-black" />
            </div>
            <div className="bg-gray-50 p-8 flex justify-between items-center uppercase font-black tracking-[0.3em] text-[11px]"><span>TOTAL TO PAY</span><span>${cartTotal}</span></div>
            <Button disabled={loading} className="h-14" type="submit">{loading ? "PROCESSING..." : "CONFIRM PAYMENT"}</Button>
          </form>
        </Container>
      </Section>
    </Layout>
  );
}
