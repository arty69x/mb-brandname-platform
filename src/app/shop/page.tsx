"use client";

import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/product/ProductCard";
import { Container, Section } from "@/components/ui/Core";
import { Product } from "@/lib/products";

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [grid, setGrid] = useState<3 | 4>(4);

  useEffect(() => {
    const t = setTimeout(() => {
      fetch(`/api/products?search=${search}`)
        .then((r) => r.json())
        .then((data: Product[]) => {
          setProducts(data);
          setLoading(false);
        });
    }, 300);
    return () => clearTimeout(t);
  }, [search]);

  return (
    <Layout>
      <Section className="py-24">
        <Container className="flex flex-col gap-16">
          <h1 className="uppercase font-light tracking-[0.45em] text-2xl md:text-4xl text-center font-serif">THE ARCHIVE</h1>

          <div className="flex flex-col md:flex-row justify-between gap-8 border-b border-gray-200 pb-8">
            <input
              type="text"
              placeholder="SEARCH..."
              onChange={(e) => setSearch(e.target.value)}
              className="uppercase font-black tracking-[0.3em] text-[11px] border-b border-black py-4 outline-none w-full md:w-64"
            />
            <div className="hidden md:flex gap-8 items-center uppercase font-black tracking-[0.3em] text-[11px]">
              <span className="opacity-50">VIEW</span>
              <button onClick={() => setGrid(3)} className={grid === 3 ? "" : "opacity-50"}>
                3
              </button>
              <button onClick={() => setGrid(4)} className={grid === 4 ? "" : "opacity-50"}>
                4
              </button>
            </div>
          </div>

          {loading ? (
            <div className={`grid grid-cols-2 ${grid === 3 ? "md:grid-cols-3" : "md:grid-cols-4"} gap-8 md:gap-16`}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-[3/4] bg-gray-100 animate-pulse" />
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="py-32 text-center uppercase font-black tracking-[0.3em] text-[11px] opacity-50">NO MATCHING ITEMS FOUND</div>
          ) : (
            <div className={`grid grid-cols-2 ${grid === 3 ? "md:grid-cols-3" : "md:grid-cols-4"} gap-8 md:gap-16`}>
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </Container>
      </Section>
    </Layout>
  );
}
