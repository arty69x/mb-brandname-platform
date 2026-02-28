"use client";

import React from "react";
import { classNames } from "@/lib/validation";

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={classNames("container mx-auto px-4", className)}>{children}</div>;
}

export function Section({ children, className }: { children: React.ReactNode; className?: string }) {
  return <section className={classNames("py-24", className)}>{children}</section>;
}

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export function Button({ children, onClick, disabled, className, type = "button" }: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classNames(
        "uppercase font-black tracking-[0.3em] text-[11px] h-10 px-6 flex items-center justify-center bg-black text-white hover:opacity-80 transition disabled:opacity-50",
        className,
      )}
    >
      {children}
    </button>
  );
}
