import { PropsWithChildren } from 'react';

export function LuxuryCard({ children }: PropsWithChildren) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-gold/40 hover:bg-white/10">
      <p className="text-base text-white/90">{children}</p>
    </article>
  );
}
