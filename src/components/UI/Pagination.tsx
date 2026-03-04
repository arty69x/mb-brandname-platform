export function Pagination({ page, total }: { page: number; total: number }) {
  return (
    <div className="flex items-center gap-4" aria-label="Pagination">
      <button className="rounded-md border border-[#e5e5e5] px-3 py-2 text-sm disabled:opacity-50" disabled={page <= 1}>
        Previous
      </button>
      <span className="text-sm text-[#666666]">Page {page} of {total}</span>
      <button className="rounded-md border border-[#e5e5e5] px-3 py-2 text-sm disabled:opacity-50" disabled={page >= total}>
        Next
      </button>
    </div>
  );
}
