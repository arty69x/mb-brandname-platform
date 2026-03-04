import { ReactNode } from "react";

type ContainerProps = { children: ReactNode; className?: string };

export function Container({ children, className = "" }: ContainerProps) {
  return <div className={`container mx-auto px-4 max-w-[1280px] ${className}`}>{children}</div>;
}
