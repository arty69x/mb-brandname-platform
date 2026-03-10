type Props = { children: React.ReactNode; ariaLabel: string; onClick?: () => void };

export default function IconButton({ children, ariaLabel, onClick }: Props) {
  return <button aria-label={ariaLabel} onClick={onClick} className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-[rgba(0,0,0,0.06)] transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[var(--accentGold)]">{children}</button>;
}
