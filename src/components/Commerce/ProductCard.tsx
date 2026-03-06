import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingBag } from 'lucide-react';
import { Product } from '@/lib/data/products';

export default function ProductCard({ product }: { product: Product }) {
  const image = Array.isArray(product.images) && product.images[0] ? product.images[0] : 'https://picsum.photos/seed/fallback-product/1000/1000';

  return (
    <article className="group">
      <div className="relative aspect-square overflow-hidden bg-[#ececec]">
        <Image src={image} alt={product.title} fill loading="lazy" sizes="(min-width: 1280px) 20vw, (min-width: 768px) 33vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" />
        <button aria-label="Add to cart" className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-black opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
          <ShoppingBag size={15} />
        </button>
      </div>
      <div className="pt-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[12px] text-[#767676]">{product.type}</p>
            <Link href={`/product/${product.slug}`} className="mt-1 block text-[18px] leading-[1.25] text-black transition hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
              {product.title}
            </Link>
            <p className="mt-1 text-[22px] text-black">
              ${product.price}
              {product.comparePrice ? <span className="ml-2 text-[20px] text-[#b13a4b] line-through">${product.comparePrice}</span> : null}
            </p>
          </div>
          <button aria-label="Add to wishlist" className="mt-1 rounded-full p-1 text-black transition hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
            <Heart size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}
