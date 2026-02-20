import type { ReactNode } from "react";

export const metadata = {
  title: "MB Brandname Platform",
  description: "Production-ready luxury commerce platform"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
