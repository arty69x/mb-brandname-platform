import { toggleWishlist } from '@/lib/wishlist';

export default function WishlistButton({ productId, active, onToggle }: { productId: string; active: boolean; onToggle: (next: boolean) => void }) {
  return <button className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white px-6 py-3 text-[12px] uppercase tracking-[0.12em] text-[var(--text)]" onClick={() => { const list = toggleWishlist(productId); onToggle(list.includes(productId)); }}>{active ? 'WISHLISTED' : 'WISHLIST'}</button>;
}
