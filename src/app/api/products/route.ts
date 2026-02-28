import { NextResponse } from "next/server";
import { PRODUCTS } from "@/lib/products";

const cache = new Map<string, { data: typeof PRODUCTS; exp: number }>();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search")?.toLowerCase() || "";
  const id = searchParams.get("id") || "";

  const cacheKey = `${search}|${id}`;
  const cached = cache.get(cacheKey);
  if (cached && cached.exp > Date.now()) return NextResponse.json(cached.data);

  let data = PRODUCTS;
  if (id) data = data.filter((p) => p.id === id);
  if (search) data = data.filter((p) => p.title.toLowerCase().includes(search));

  cache.set(cacheKey, { data, exp: Date.now() + 30000 });
  return NextResponse.json(data);
}
