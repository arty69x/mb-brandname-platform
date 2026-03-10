import { useState } from 'react';

export default function Tabs({ tabs }: { tabs: { id: string; label: string; content: React.ReactNode }[] }) {
  const [active, setActive] = useState(0);
  return <div><div role="tablist" className="flex flex-wrap gap-2 border-b border-[var(--border)]">{tabs.map((tab, i) => <button key={tab.id} role="tab" aria-selected={active===i} onKeyDown={(e)=>{if(e.key==='ArrowRight')setActive((i+1)%tabs.length);if(e.key==='ArrowLeft')setActive((i-1+tabs.length)%tabs.length);}} onClick={()=>setActive(i)} className={`rounded-full border border-[var(--border)] px-5 py-2 text-[12px] uppercase tracking-[0.12em] hover:bg-[var(--bg-alt)] ${active===i?'bg-[var(--cta)] text-white border-[var(--cta)]':''}`}>{tab.label}</button>)}</div><div role="tabpanel" className="py-8 text-[14px] leading-[1.7] text-[var(--muted)]">{tabs[active]?.content}</div></div>;
}
