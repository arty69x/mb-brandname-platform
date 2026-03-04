import { ReactNode } from "react";

type ModalProps = { open: boolean; title: string; onClose: () => void; children: ReactNode };

export function Modal({ open, title, onClose, children }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" role="dialog" aria-modal="true" aria-label={title}>
      <div className="w-full max-w-md rounded-lg bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-[#111111]">{title}</h3>
          <button onClick={onClose} className="text-sm text-[#666666] focus-visible:ring-2 focus-visible:ring-[#111111]" aria-label="Close modal">Close</button>
        </div>
        {children}
      </div>
    </div>
  );
}
