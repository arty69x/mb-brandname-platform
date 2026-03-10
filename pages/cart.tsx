import { useMemo, useState } from 'react';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/layout/SEO';
import PageTitleBlock from '@/components/ui/PageTitleBlock';
import EmptyState from '@/components/ui/EmptyState';
import QuantityStepper from '@/components/commerce/QuantityStepper';
import CartSummary from '@/components/commerce/CartSummary';
import { products } from '@/data/products';
import { canonical } from '@/lib/seo';
import { getCart, removeFromCart, updateQty } from '@/lib/cart';

export default function CartPage() {
  const [cart, setCart] = useState(getCart());
  const rows = useMemo(() => cart.map((item) => ({ item, product: products.find((p) => p.id === item.productId) })).filter((row) => row.product), [cart]);
  const total = rows.reduce((sum, row) => sum + (row.product?.price ?? 0) * row.item.qty, 0);
  return <Layout><SEO title="Cart — MB BRANDNAME" description="Review cart items." canonical={canonical('/cart')} /><main><section><div className="container mx-auto px-4"><PageTitleBlock title="SHOPPING CART" />{rows.length===0?<EmptyState title="CART IS EMPTY" body="Add products to continue." ctaHref="/shop" ctaLabel="GO SHOPPING" />:<div className="grid grid-cols-1 gap-10 lg:grid-cols-3"><div className="lg:col-span-2">{rows.map((row)=>row.product?<div key={row.item.productId} className="flex gap-4 border-b border-[var(--border)] py-6"><div className="h-24 w-24 overflow-hidden bg-[var(--bg-alt)]"><img src={row.product.images[0] ?? ''} alt={row.product.title} className="h-full w-full object-cover" /></div><div className="flex-1"><p className="text-[14px] uppercase tracking-[0.08em]">{row.product.title}</p><p className="my-3">${row.product.price}</p><QuantityStepper value={row.item.qty} onChange={(v)=>setCart(updateQty(row.item.productId,v))} /><button className="ml-3 text-[12px]" onClick={()=>setCart(removeFromCart(row.item.productId))}>Remove</button></div></div>:null)}</div><div className="lg:col-span-1"><CartSummary total={total} disabled={rows.length===0} /></div></div>}</div></section></main></Layout>;
}
