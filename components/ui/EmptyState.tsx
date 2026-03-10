import Button from './Button';
import Link from 'next/link';

export default function EmptyState({ title, body, ctaHref, ctaLabel }: { title: string; body: string; ctaHref: string; ctaLabel: string }) {
  return <div className="py-16 text-center"><h2 className="text-[18px] uppercase tracking-[0.22em]">{title}</h2><p className="mt-4 text-[var(--muted)]">{body}</p><Link href={ctaHref} className="mt-6 inline-block"><Button>{ctaLabel}</Button></Link></div>;
}
