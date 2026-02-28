import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "@/context/store";

export const metadata: Metadata = {
  title: "MB Brandname Platform",
  description: "Luxury archive commerce platform",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
