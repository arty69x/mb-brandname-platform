import { PropsWithChildren } from 'react';

type LuxuryCardProps = PropsWithChildren<{
  title?: string;
  subtitle?: string;
}>;

export function LuxuryCard({ children, title, subtitle }: LuxuryCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-gold/40 hover:bg-white/10">
      {subtitle ? <p className="mb-2 text-xs uppercase tracking-[0.2em] text-gold/80">{subtitle}</p> : null}
      {title ? <h3 className="mb-3 text-lg font-semibold text-white">{title}</h3> : null}
      <div className="text-base text-white/90">{children}</div>
    </article>
  );
}
