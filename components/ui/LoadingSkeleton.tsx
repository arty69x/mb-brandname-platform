export default function LoadingSkeleton() {
  const placeholders = [1, 2, 3, 4];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
      {placeholders.map((item) => (
        <div key={item} className="animate-pulse">
          <div className="aspect-square bg-[var(--bg-alt)]" />
          <div className="mt-4 h-4 w-2/3 bg-[var(--bg-alt)]" />
        </div>
      ))}
    </div>
  );
}
