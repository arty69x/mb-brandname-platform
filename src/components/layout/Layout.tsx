"use client";

import Link from "next/link";
import { Heart, Menu, Search, ShoppingBag } from "lucide-react";
import { useStore } from "@/context/store";
import { Container } from "@/components/ui/Core";

export function Header() {
  const { cart } = useStore();
  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <Container className="h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Menu size={20} className="md:hidden" />
          <Link href="/" className="uppercase font-black tracking-[0.3em] text-[11px]">
            MB BRANDNAME
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/shop" className="uppercase font-black tracking-[0.3em] text-[11px]">
              SHOP
            </Link>
            <Link href="/dashboard" className="uppercase font-black tracking-[0.3em] text-[11px]">
              DASHBOARD
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-8">
          <Search size={18} />
          <Link href="/wishlist">
            <Heart size={18} />
          </Link>
          <Link href="/cart" className="flex items-center gap-2 uppercase font-black tracking-[0.3em] text-[11px]">
            <ShoppingBag size={18} /> ({cart.length})
          </Link>
        </div>
      </Container>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-black text-white py-32">
      <Container className="grid md:grid-cols-2 gap-16 text-center md:text-left">
        <div className="space-y-8">
          <h3 className="uppercase font-light tracking-[0.45em] text-2xl md:text-4xl">MB ARCHIVE</h3>
          <p className="font-medium opacity-80 max-w-2xl text-sm leading-loose">
            Authentic curated luxury. 100% Verified from Japan.
          </p>
        </div>
        <div className="flex flex-col md:items-end gap-8 uppercase font-black tracking-[0.3em] text-[11px] opacity-80">
          <Link href="/shop">SHOP COLLECTION</Link>
          <Link href="/dashboard">ANALYTICS DASHBOARD</Link>
          <span className="mt-8">© 2026 MB BRANDNAME.</span>
        </div>
      </Container>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
}
