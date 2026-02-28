"use client";

import Link from "next/link";
import { useStore } from "@/context/store";
import { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useStore();
  return (
    <div className="flex flex-col gap-8 group">
      <Link href={`/product/${product.id}`} className="aspect-[3/4] bg-gray-100 overflow-hidden relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.images[0]}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          alt={product.title}
        />
        {product.isNew && (
          <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 uppercase font-black tracking-[0.3em] text-[11px]">
            NEW
          </span>
        )}
      </Link>
      <div className="flex flex-col gap-4">
        <Link href={`/product/${product.id}`} className="uppercase font-black tracking-[0.3em] text-[11px] truncate">
          {product.title}
        </Link>
        <div className="font-medium opacity-80">${product.price}</div>
        <button
          onClick={() => addToCart(product)}
          className="uppercase font-black tracking-[0.3em] text-[11px] border-b-2 border-black pb-2 w-fit hover:opacity-50"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
