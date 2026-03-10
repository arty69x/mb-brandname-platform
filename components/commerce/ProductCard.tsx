import Link from 'next/link';
import { Heart } from 'lucide-react';
import type { Product } from '@/data/types';

export default function ProductCard({ product }: { product: Product }) {
  const image = product.images[0] ?? '';

  return (
    <article className="group">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-[var(--bg-alt)]">
          {image ? (
            <img src={image} alt={product.title} className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.03]" />
          ) : (
            <div className="h-full w-full" />
          )}
        </div>
      </Link>

      <div className="mt-3">
        <p className="text-[11px] text-[var(--caption)]">Dresses</p>
        <div className="mt-1 flex items-start justify-between gap-2">
          <div>
            <h3 className="text-[14px] leading-[1.4] text-[var(--text)]">{product.title}</h3>
            <div className="mt-1 flex items-baseline gap-2">
              {product.compareAtPrice ? (
                <>
                  <span className="text-[13px] text-[var(--caption)] line-through">${product.compareAtPrice}</span>
                  <span className="text-[14px] font-medium text-[var(--danger)]">${product.price}</span>
                </>
              ) : (
                <span className="text-[14px] font-medium">${product.price}</span>
              )}
            </div>
          </div>
          <button aria-label={`Add ${product.title} to wishlist`} className="rounded-full p-1 text-[var(--caption)] transition-colors duration-300 ease-in-out hover:text-[var(--text)]">
            <Heart size={14} />
          </button>
        </div>
      </div>
    </article>
  );
}
