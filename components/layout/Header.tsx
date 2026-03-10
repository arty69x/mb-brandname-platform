import Link from 'next/link';
import { Heart, Menu, Search, ShoppingBag, User } from 'lucide-react';
import { useState } from 'react';
import Drawer from './Drawer';
import IconButton from '@/components/ui/IconButton';

type Props = { variant: 'home' | 'solid' };

const navItems: { href: string; label: string }[] = [
  { href: '/', label: 'Home' },
  { href: '/new-arrivals', label: 'New Arrivals' },
  { href: '/bags', label: 'Bags' },
  { href: '/accessories', label: 'Accessories' },
  { href: '/about', label: 'About us' }
];

export default function Header({ variant }: Props) {
  const [open, setOpen] = useState(false);
  const isHome = variant === 'home';

  return (
    <header className={`${isHome ? 'absolute left-0 top-0 z-30 w-full text-white' : 'sticky top-0 z-30 border-b border-[var(--border)] bg-white text-[var(--text)]'}`}>
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between lg:h-16">
          <Link href="/" className="text-[24px] leading-none tracking-[0.02em]" aria-label="MB BRANDNAME home">
            m3
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-[12px] tracking-[0.06em] transition-colors duration-300 ease-in-out hover:opacity-70">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center lg:flex">
            <IconButton ariaLabel="Search"><Search size={16} /></IconButton>
            <IconButton ariaLabel="Account"><User size={16} /></IconButton>
            <IconButton ariaLabel="Wishlist"><Heart size={16} /></IconButton>
            <IconButton ariaLabel="Cart"><ShoppingBag size={16} /></IconButton>
          </div>

          <button aria-label="Open menu" className="rounded-full p-2 lg:hidden" onClick={() => setOpen(true)}>
            <Menu size={20} />
          </button>
        </div>
      </div>

      <Drawer open={open} onClose={() => setOpen(false)}>
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-[12px] uppercase tracking-[0.12em]" onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="/wishlist" className="text-[12px] uppercase tracking-[0.12em]" onClick={() => setOpen(false)}>Wishlist</Link>
          <Link href="/cart" className="text-[12px] uppercase tracking-[0.12em]" onClick={() => setOpen(false)}>Cart</Link>
        </nav>
      </Drawer>
    </header>
  );
}
