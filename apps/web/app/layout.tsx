import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ForLuxury Commerce',
  description: 'Premium monorepo starter for luxury ecommerce experiences.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
