import type { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'pill' };

export default function Button({ variant = 'primary', className = '', ...props }: Props) {
  const base = variant === 'primary'
    ? 'inline-flex items-center justify-center rounded-full bg-[var(--cta)] px-8 py-3 text-[12px] uppercase tracking-[0.12em] text-white transition-colors duration-300 ease-in-out hover:bg-[var(--ctaHover)] focus:outline-none focus:ring-2 focus:ring-[var(--accentGold)] focus:ring-offset-2'
    : 'inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white px-6 py-3 text-[12px] uppercase tracking-[0.12em] text-[var(--text)] transition-colors duration-300 ease-in-out hover:bg-[var(--bg-alt)] focus:outline-none focus:ring-2 focus:ring-[var(--accentGold)] focus:ring-offset-2';
  return <button className={`${base} ${className}`} {...props} />;
}
