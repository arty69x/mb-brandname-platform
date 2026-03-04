import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/data/products';
import AddToCart from './AddToCart';
import WishlistButton from './WishlistButton';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group rounded border border-[#e5e5e5] p-4">
      <div className="relative aspect-square overflow-hidden rounded">
        <Image src={`${product.images[0]}?w=800`} alt={product.title} fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" className="object-cover transition duration-300 group-hover:scale-105" />
      </div>
      <div className="mt-4 flex items-center justify-between gap-2">
        <WishlistButton />
        <AddToCart />
      </div>
      <p className="mt-4 text-xs uppercase tracking-wide text-[#666666]">{product.category}</p>
      <Link href={`/product/${product.slug}`} className="mt-1 block font-semibold hover:text-[#d40000]">{product.title}</Link>
      <p className="mt-1 text-sm"><span className="font-semibold">${product.price}</span> <span className="ml-2 text-[#666666] line-through">${product.comparePrice}</span></p>
    </article>
  );
}
