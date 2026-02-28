"use client";

import Link from "next/link";
import { useStore } from "@/context/store";
import { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useStore();

  return (
    <div className="group">
      <Link href={`/product/${product.id}`} className="block aspect-square bg-gray-100 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={product.images[0]} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt={product.title} />
      </Link>
      <div className="pt-2 space-y-1">
        <p className="text-[10px] opacity-60">Dresses</p>
        <Link href={`/product/${product.id}`} className="text-xs leading-tight block hover:underline">
          {product.title}
        </Link>
        <div className="text-xs">${product.price}</div>
        <button onClick={() => addToCart(product)} className="text-[10px] uppercase tracking-[0.15em] border-b border-black hover:opacity-70">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
