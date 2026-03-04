import { InputHTMLAttributes } from "react";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="w-full rounded-md border border-[#e5e5e5] px-3 py-2 text-sm text-[#111111] outline-none placeholder:text-[#666666] focus:border-[#111111] focus-visible:ring-2 focus-visible:ring-[#111111] disabled:cursor-not-allowed disabled:opacity-50"
      {...props}
    />
  );
}
