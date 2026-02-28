"use client";

import Link from "next/link";
import { Heart, Menu, Search, ShoppingBag, User } from "lucide-react";
import { useStore } from "@/context/store";
import { Container } from "@/components/ui/Core";

export function Header() {
  const { cart } = useStore();

  return (
    <header className="fixed top-0 w-full z-50 bg-black/25 backdrop-blur-sm text-white">
      <Container className="h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Menu size={18} className="md:hidden" />
          <Link href="/" className="uppercase tracking-[0.2em] text-[11px] font-semibold">
            MB
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-[11px] uppercase tracking-[0.15em]">
            <Link href="/new-arrivals">New Arrivals</Link>
            <Link href="/bags">Bags</Link>
            <Link href="/accessories">Accessories</Link>
            <Link href="/about">About Us</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.15em]">
          <Search size={16} />
          <User size={16} />
          <Link href="/wishlist">
            <Heart size={16} />
          </Link>
          <Link href="/cart" className="inline-flex items-center gap-1">
            <ShoppingBag size={16} />
            <span>({cart.length})</span>
          </Link>
        </div>
      </Container>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <Container className="grid grid-cols-2 md:grid-cols-5 gap-10 text-[11px] uppercase tracking-[0.12em]">
        <div className="space-y-3 col-span-2 md:col-span-1">
          <h3 className="text-base tracking-[0.2em]">MB</h3>
          <p className="normal-case tracking-normal opacity-80">1481 River Drive, Suite 35, CA</p>
          <p className="normal-case tracking-normal opacity-80">+1 264-345-0679</p>
        </div>

        <div className="space-y-2">
          <h4 className="opacity-60">Company</h4>
          <p>About Us</p>
          <p>Careers</p>
          <p>Blog</p>
        </div>

        <div className="space-y-2">
          <h4 className="opacity-60">Shop</h4>
          <p>New Arrivals</p>
          <p>Accessories</p>
          <p>Bags</p>
        </div>

        <div className="space-y-2">
          <h4 className="opacity-60">Help</h4>
          <p>Customer Service</p>
          <p>Legal & Privacy</p>
          <p>Contact</p>
        </div>

        <div className="space-y-2">
          <h4 className="opacity-60">Opening Time</h4>
          <p className="normal-case tracking-normal">Mon - Fri: 8AM - 9PM</p>
          <p className="normal-case tracking-normal">Sat: 9AM - 8PM</p>
          <p className="normal-case tracking-normal">Sun: Closed</p>
        </div>
      </Container>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#ececec] text-[#111] font-sans">
      <Header />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
}
