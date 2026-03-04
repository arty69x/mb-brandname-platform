import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"], fallback: ["Helvetica", "Arial", "sans-serif"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.className} bg-white text-[#111111]`}>
      <Component {...pageProps} />
    </div>
  );
}
