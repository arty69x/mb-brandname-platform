import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif', color: '#111111', backgroundColor: '#ffffff' }}>
      <Component {...pageProps} />
    </div>
  );
}
