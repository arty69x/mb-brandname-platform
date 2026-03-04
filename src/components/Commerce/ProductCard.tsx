import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/data/products";
import { AddToCart } from "./AddToCart";
import { WishlistButton } from "./WishlistButton";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group rounded-lg border border-[#e5e5e5] bg-white p-4">
      <div className="relative mb-4 aspect-square overflow-hidden rounded-md">
        <Image src={product.images[0]} alt={product.title} fill className="object-cover transition duration-300 group-hover:scale-105" sizes="(max-width:768px) 50vw, 25vw" />
        <div className="absolute right-3 top-3"><WishlistButton /></div>
      </div>
      <p className="mb-1 text-xs uppercase tracking-wide text-[#666666]">{product.category}</p>
      <Link href={`/product/${product.slug}`} className="mb-2 block text-sm font-medium text-[#111111] hover:text-[#d40000]">{product.title}</Link>
      <p className="mb-3 text-sm text-[#111111]">${product.price.toFixed(2)} <span className="ml-1 text-[#666666] line-through">${product.comparePrice.toFixed(2)}</span></p>
      <AddToCart />
    </article>
  );
}
