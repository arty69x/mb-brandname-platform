export default function ControlBar({
  count,
  sort,
  setSort,
  grid,
  setGrid
}: {
  count: number;
  sort: string;
  setSort: (v: string) => void;
  grid: number;
  setGrid: (v: number) => void;
}) {
  return (
    <div className="flex flex-col gap-4 border-y border-[var(--border)] py-4 lg:flex-row lg:items-center lg:justify-between">
      <p className="text-[12px] uppercase tracking-[0.12em] text-[var(--caption)]">{count} products</p>

      <div className="flex flex-wrap items-center gap-4">
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="h-10 rounded-full border border-[var(--border)] bg-white px-4 text-[11px] uppercase tracking-[0.12em]" aria-label="Sort products">
          <option value="default">Default sorting</option>
          <option value="price-asc">Price Asc</option>
          <option value="price-desc">Price Desc</option>
        </select>

        <div className="hidden items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-[var(--caption)] sm:flex">
          <span>View</span>
          {[2, 3, 4].map((value) => (
            <button key={value} onClick={() => setGrid(value)} className={`${value === grid ? 'text-[var(--text)]' : ''}`}>
              {value}
            </button>
          ))}
        </div>

        <button className="text-[11px] uppercase tracking-[0.12em]">Filter</button>
      </div>
    </div>
  );
}
