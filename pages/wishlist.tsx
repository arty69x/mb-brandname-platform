import { useMemo, useState } from 'react';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/layout/SEO';
import PageTitleBlock from '@/components/ui/PageTitleBlock';
import EmptyState from '@/components/ui/EmptyState';
import ProductGrid from '@/components/commerce/ProductGrid';
import { products } from '@/data/products';
import { canonical } from '@/lib/seo';
import { getWishlist } from '@/lib/wishlist';

export default function WishlistPage() {
  const [ids] = useState(getWishlist());
  const list = useMemo(() => products.filter((p) => ids.includes(p.id)), [ids]);
  return <Layout><SEO title="Wishlist — MB BRANDNAME" description="Saved items." canonical={canonical('/wishlist')} /><main><section><div className="container mx-auto px-4"><PageTitleBlock title="WISHLIST" />{list.length===0?<EmptyState title="WISHLIST IS EMPTY" body="Save products to compare later." ctaHref="/shop" ctaLabel="GO SHOPPING" />:<ProductGrid products={list} />}</div></section></main></Layout>;
}
