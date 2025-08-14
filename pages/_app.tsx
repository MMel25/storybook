import type { AppProps } from 'next/app';
import '../styles/globals.css'; // ייבוא גלובלי מותר רק כאן

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
