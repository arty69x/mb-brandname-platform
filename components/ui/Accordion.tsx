import { useState } from 'react';

export default function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return <div>{items.map((item, i) => <div key={item.q} className="border-b border-[var(--border)] py-5"><button className="flex w-full items-center justify-between text-left text-[13px] uppercase tracking-[0.12em]" onClick={()=>setOpen(open===i?null:i)} aria-expanded={open===i}>{item.q}<span>{open===i?'-':'+'}</span></button>{open===i?<p className="pt-4 text-[14px] leading-[1.7] text-[var(--muted)]">{item.a}</p>:null}</div>)}</div>;
}
