import { useEffect, useRef, type ReactElement, type ReactNode } from 'react';

type Props = { open: boolean; onClose: () => void; children: ReactNode };

export default function Drawer({ open, onClose, children }: Props): ReactElement | null {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    function esc(e: KeyboardEvent): void { if (e.key === 'Escape') onClose(); }
    if (open) document.addEventListener('keydown', esc);
    return () => document.removeEventListener('keydown', esc);
  }, [open, onClose]);
  useEffect(() => {
    if (!open || !ref.current) return;
    const focusables = ref.current.querySelectorAll<HTMLElement>('button,a,input,select,textarea,[tabindex]:not([tabindex="-1"])');
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    first?.focus();
    const trap = (e: KeyboardEvent): void => {
      if (e.key !== 'Tab' || !first || !last) return;
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', trap);
    return () => document.removeEventListener('keydown', trap);
  }, [open]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50">
      <button aria-label="Close menu overlay" className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div ref={ref} className="absolute right-0 top-0 h-full w-80 bg-white p-6">
        <button className="mb-6 rounded-full border border-[var(--border)] px-4 py-2" onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  );
}
