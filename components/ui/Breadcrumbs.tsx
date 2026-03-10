import Link from 'next/link';

export default function Breadcrumbs({ items }: { items: { href: string; label: string }[] }) {
  return <nav className="pt-4" aria-label="Breadcrumb"><ol className="flex flex-wrap items-center gap-2 text-[12px] uppercase tracking-[0.12em] text-[var(--caption)]">{items.map((item) => <li key={item.href}><Link href={item.href} className="hover:text-[var(--text)] transition-colors">{item.label}</Link></li>)}</ol></nav>;
}
