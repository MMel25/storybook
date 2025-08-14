import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  const subtitle = "מאת: מאור מלמד. איורים: בינה מלאכותית"; // תעדכן כרצונך

  return (
    <div className="page">
      <Head>
        <title>הפיל שאהב לנגן</title>
        <meta name="description" content={subtitle} />
        <meta property="og:title" content="הפיל שאהב לנגן" />
        <meta property="og:description" content={subtitle} />
        <meta property="og:image" content=" https://storybook-rose-two.vercel.app/images/cover.png" />
        <meta property="og:url" content=" https://storybook-rose-two.vercel.app/" />
        <meta property="og:type" content="website" />
      </Head>

      <h1>הַפִּיל שֶׁאָהַב לְנַגֵּן</h1>
      <h2>{subtitle}</h2>
      <Image src="/images/cover.png" alt="כריכה" width={400} height={300} />
      <nav>
        <Link href="/page1">התחל לקרוא</Link>
      </nav>
    </div>
  );
}
