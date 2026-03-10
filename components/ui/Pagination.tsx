import Link from 'next/link';

export default function Pagination({ page, totalPages, buildHref }: { page: number; totalPages: number; buildHref: (p: number) => string }) {
  return <div className="mt-10 flex items-center justify-center gap-2">{Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => <Link key={p} href={buildHref(p)} className={`h-10 min-w-10 rounded-full border border-[var(--border)] px-4 text-[12px] uppercase tracking-[0.12em] hover:bg-[var(--bg-alt)] inline-flex items-center justify-center ${p===page?'bg-[var(--cta)] text-white border-[var(--cta)] hover:bg-[var(--ctaHover)]':''}`}>{p}</Link>)}</div>;
}
