import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="bg-black py-10 text-white">
      <Container className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="mb-3 text-lg font-semibold">Brandname</h3>
          <p className="text-sm text-white/70">Refined everyday essentials designed for modern movement.</p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-medium">Shop</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="/new-arrivals">New Arrivals</Link></li>
            <li><Link href="/bags">Bags</Link></li>
            <li><Link href="/accessories">Accessories</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-medium">Help</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/account">Account</Link></li>
            <li><Link href="/checkout">Checkout</Link></li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
