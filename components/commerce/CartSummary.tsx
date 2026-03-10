import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function CartSummary({ total, disabled }: { total: number; disabled: boolean }) {
  return <div className="border border-[var(--border)] p-6"><p className="mb-4 text-[12px] uppercase tracking-[0.12em]">Total</p><p className="mb-6 text-[18px]">${total.toFixed(2)}</p><Link href="/checkout"><Button className="w-full" disabled={disabled}>PROCEED TO CHECKOUT</Button></Link></div>;
}
