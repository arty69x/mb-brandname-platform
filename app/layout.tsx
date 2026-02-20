import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "MB Brandname Platform",
  description: "Enterprise-ready luxury commerce architecture baseline"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
