import Input from '@/components/ui/Input';

export default function FilterBar({ search, setSearch }: { search: string; setSearch: (v: string) => void }) {
  return <aside className="space-y-4"><Input id="search" label="Search" value={search} onChange={setSearch} /><p className="text-[12px] text-[var(--caption)]">Category filtering is route-driven.</p></aside>;
}
