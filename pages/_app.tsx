import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Meta tags for Open Graph */}
        <meta property="og:title" content="הַפִּיל שֶׁאָהַב לְנַגֵּן" />
        <meta property="og:description" content="ספר ילדים מאת מאור מלמד" />
        <meta
          property="og:image"
          content="https://storybook-rose-two.vercel.app/images/cover.png"
        />
        <meta property="og:url" content="https://storybook-rose-two.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Meta tags for Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="הַפִּיל שֶׁאָהַב לְנַגֵּן" />
        <meta name="twitter:description" content="ספר ילדים מאת מאור מלמד" />
        <meta
          name="twitter:image"
          content="https://storybook-rose-two.vercel.app/images/cover.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
