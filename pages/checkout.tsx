import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/layout/SEO';
import PageTitleBlock from '@/components/ui/PageTitleBlock';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { canonical } from '@/lib/seo';
import { getCart, clearCart } from '@/lib/cart';
import { createOrderId } from '@/lib/order';
import { getItem, setItem } from '@/lib/storage';
import type { Order } from '@/data/types';

export default function CheckoutPage() {
  const router = useRouter();
  const cart = getCart();
  const [done, setDone] = useState('');
  const [form, setForm] = useState({ email:'', firstName:'', lastName:'', address:'', city:'', country:'', postalCode:'', phone:'' });
  const valid = form.email.includes('@') && form.firstName && form.lastName && form.address && form.city && form.country && form.postalCode.length>=3 && form.phone.length>=7;
  const submit = async (): Promise<void> => {
    try {
      if (cart.length === 0) { await router.push('/cart'); return; }
      if (!valid) return;
      const id = await createOrderId(cart);
      const order: Order = { id, items: cart, total: 0, createdAtISO: '2026-01-01T00:00:00.000Z', shipping: form };
      const list = getItem<Order[]>('mb_orders_v1', []);
      setItem('mb_orders_v1', Array.isArray(list) ? [...list, order] : [order]);
      clearCart();
      setDone(id);
    } catch {
      return;
    }
  };
  return <Layout><SEO title="Checkout — MB BRANDNAME" description="Complete purchase securely." canonical={canonical('/checkout')} /><main><section><div className="container mx-auto px-4"><PageTitleBlock title="CHECKOUT" />{done?<div className="py-10"><p>Order confirmed: {done}</p><Button onClick={()=>{void router.push('/shop');}}>CONTINUE SHOPPING</Button></div>:<div className="grid grid-cols-1 gap-10 lg:grid-cols-3"><div className="lg:col-span-2"><div className="max-w-[640px] border border-[var(--border)] p-6 lg:p-8 space-y-4"><Input id="email" label="Email" value={form.email} onChange={(v)=>setForm({...form,email:v})} /><Input id="firstName" label="First name" value={form.firstName} onChange={(v)=>setForm({...form,firstName:v})} /><Input id="lastName" label="Last name" value={form.lastName} onChange={(v)=>setForm({...form,lastName:v})} /><Input id="address" label="Address" value={form.address} onChange={(v)=>setForm({...form,address:v})} /><Input id="city" label="City" value={form.city} onChange={(v)=>setForm({...form,city:v})} /><Input id="country" label="Country" value={form.country} onChange={(v)=>setForm({...form,country:v})} /><Input id="postalCode" label="Postal code" value={form.postalCode} onChange={(v)=>setForm({...form,postalCode:v})} /><Input id="phone" label="Phone" value={form.phone} onChange={(v)=>setForm({...form,phone:v})} /><Button onClick={()=>{void submit();}} disabled={!valid}>PLACE ORDER</Button></div></div><div className="lg:col-span-1 border border-[var(--border)] p-6">{cart.length} items</div></div>}</div></section></main></Layout>;
}
