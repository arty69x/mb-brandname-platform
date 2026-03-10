type Props = { id: string; label: string; value: string; onChange: (v: string) => void; required?: boolean };
export default function Textarea({ id, label, value, onChange, required }: Props) {
  return <div className="space-y-2"><label htmlFor={id} className="text-[12px] uppercase tracking-[0.12em] text-[var(--caption)]">{label}</label><textarea id={id} required={required} value={value} onChange={(e) => onChange(e.target.value)} className="min-h-32 w-full rounded-3xl border border-[var(--border)] px-4 py-3 focus:ring-2 focus:ring-[var(--accentGold)] focus:outline-none" /></div>;
}
