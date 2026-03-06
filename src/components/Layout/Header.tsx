import Link from 'next/link';
import { useRouter } from 'next/router';
import { Heart, Menu, Search, ShoppingBag, User, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/new-arrivals', label: 'New Arrivals' },
  { href: '/bags', label: 'Bags' },
  { href: '/accessories', label: 'Accessories' },
  { href: '/about', label: 'About us' }
];

const mobileItems = [
  'GENTLE PACE',
  'LEAGUE VIBE CLUB',
  'SUN-DRENCHED WHIMSY',
  'GENTLEWOMAN CLUB',
  'COLLECTIONS +',
  'PRODUCTS +'
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <header className="border-b border-[#ececec] bg-white">
        <section>
          <div className="container mx-auto px-4">
            <div className="flex h-[72px] items-center justify-between gap-4">
              <div className="flex items-center gap-3 lg:hidden">
                <button aria-label="Open menu" onClick={() => setOpen(true)} className="rounded-full p-2 text-black transition hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                  <Menu size={24} />
                </button>
                <button aria-label="Search" className="rounded-full p-2 text-black transition hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                  <Search size={24} />
                </button>
              </div>

              <Link href="/" className="text-[20px] font-semibold tracking-[0.08em] text-black lg:text-[32px]" aria-label="Go to homepage">
                m3
              </Link>

              <nav aria-label="Primary navigation" className="hidden items-center gap-8 lg:flex">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-[13px] font-medium transition hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${router.pathname === item.href ? 'text-black' : 'text-[#111]'}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-1 lg:gap-2">
                <button aria-label="Search" className="hidden rounded-full p-2 text-black transition hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:block">
                  <Search size={18} />
                </button>
                <button aria-label="Account" className="rounded-full p-2 text-black transition hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                  <User size={22} />
                </button>
                <Link href="/wishlist" aria-label="Wishlist" className="rounded-full p-2 text-black transition hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                  <Heart size={22} />
                </Link>
                <Link href="/cart" aria-label="Cart" className="rounded-full p-2 text-black transition hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                  <ShoppingBag size={22} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </header>

      {open ? (
        <div className="fixed inset-0 z-50 bg-[#efefef]">
          <section className="h-full overflow-y-auto pt-7">
            <div className="container mx-auto px-4">
              <div className="flex justify-end">
                <button aria-label="Close menu" onClick={() => setOpen(false)} className="rounded-full p-2 transition hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black">
                  <X size={38} />
                </button>
              </div>
              <div className="mt-16 space-y-4">
                {mobileItems.map((item, index) => (
                  <button key={item} className="block text-left text-[40px] font-semibold uppercase leading-[1.12] tracking-[-0.03em] text-black transition hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black">
                    {item}
                    {index < 3 && <span className="ml-3 align-middle text-[20px] font-normal">NEW</span>}
                  </button>
                ))}
                <button className="block text-[56px] font-semibold uppercase leading-[1] text-[#ed0ea8]">SPECIAL PRICE</button>
                <p className="pt-2 text-[58px] italic leading-[1] text-[#dd1515]">GentlewomanUniverse</p>
                <p className="font-mono text-[48px] tracking-[0.1em]">GENTLE LITTLEWOMAN</p>
                <p className="pt-2 text-[56px] font-semibold uppercase">EN <span className="mx-4">/</span> TH</p>
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
