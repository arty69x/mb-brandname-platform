import { useState } from "react";

type TabItem = { label: string; content: string };

export function Tabs({ items }: { items: TabItem[] }) {
  const [active, setActive] = useState(0);
  const safeItems = Array.isArray(items) ? items : [];

  if (safeItems.length === 0) {
    return <p className="text-sm text-[#666666]">No tab content available.</p>;
  }

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2">
        {safeItems.map((item, index) => (
          <button
            key={item.label}
            onClick={() => setActive(index)}
            className={`rounded-md border px-4 py-2 text-sm focus-visible:ring-2 focus-visible:ring-[#111111] ${active === index ? "border-[#111111] bg-[#111111] text-white" : "border-[#e5e5e5] text-[#666666] hover:text-[#111111]"}`}
            aria-label={`Open ${item.label} tab`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <p className="text-sm leading-6 text-[#666666]">{safeItems[active]?.content}</p>
    </div>
  );
}
