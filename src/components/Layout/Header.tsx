import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/new-arrivals', label: 'New Arrivals' },
  { href: '/bags', label: 'Bags' },
  { href: '/accessories', label: 'Accessories' },
  { href: '/about', label: 'About' }
];

export default function Header() {
  return (
    <header className="h-[72px] border-b border-[#e5e5e5] bg-white">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold" aria-label="Go to homepage">Brandname</Link>
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-[#111111] transition hover:text-[#d40000] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d40000]">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-sm">
          <button aria-label="Search products" className="rounded p-2 hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d40000]">🔍</button>
          <Link href="/wishlist" aria-label="Open wishlist" className="rounded p-2 hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d40000]">♡</Link>
          <Link href="/cart" aria-label="Open cart" className="rounded p-2 hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d40000]">🛒</Link>
        </div>
      </div>
    </header>
  );
}
