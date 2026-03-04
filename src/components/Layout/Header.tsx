import Link from "next/link";
import { Heart, Search, ShoppingBag } from "lucide-react";
import { Container } from "./Container";

const links = [
  { href: "/", label: "Home" },
  { href: "/new-arrivals", label: "New Arrivals" },
  { href: "/bags", label: "Bags" },
  { href: "/accessories", label: "Accessories" },
  { href: "/about", label: "About" }
];

export function Header() {
  return (
    <header className="border-b border-[#e5e5e5]">
      <Container className="h-[72px] flex items-center justify-between gap-6">
        <Link href="/" className="text-lg font-semibold text-[#111111]">Brandname</Link>
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-[#666666] hover:text-[#111111] focus-visible:ring-2 focus-visible:ring-[#111111]">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button aria-label="Search" className="text-[#666666] hover:text-[#111111] focus-visible:ring-2 focus-visible:ring-[#111111]"><Search size={18} /></button>
          <Link href="/wishlist" aria-label="Wishlist" className="text-[#666666] hover:text-[#111111] focus-visible:ring-2 focus-visible:ring-[#111111]"><Heart size={18} /></Link>
          <Link href="/cart" aria-label="Cart" className="text-[#666666] hover:text-[#111111] focus-visible:ring-2 focus-visible:ring-[#111111]"><ShoppingBag size={18} /></Link>
        </div>
      </Container>
    </header>
  );
}
