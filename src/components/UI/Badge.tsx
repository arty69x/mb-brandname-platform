import { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return <span className="rounded-full border border-[#e5e5e5] px-3 py-1 text-xs text-[#666666]">{children}</span>;
}
