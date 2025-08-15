import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="home" dir="rtl">
      <Head>
        <title>הַפִּיל שֶׁאָהַב לְנַגֵּן</title>
        <meta name="description" content="סיפור ילדים מוזיקלי ושמח" />
        <meta property="og:title" content="הַפִּיל שֶׁאָהַב לְנַגֵּן" />
        <meta property="og:description" content="סיפור ילדים מוזיקלי ושמח" />
        <meta property="og:image" content="https://storybook-rose-two.vercel.app/images/cover.png" />
        <meta property="og:url" content="https://storybook-rose-two.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Varela+Round&family=Heebo:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="home__card">
        <div className="home__content">
          <h1 className="home__title">הַפִּיל שֶׁאָהַב לְנַגֵּן</h1>

          <div className="home__subtitle">
            <p><span className="label">מֵאֵת:</span> מָאוֹר מְלַמֵּד</p>
            <p><span className="label">אִיּוּרִים:</span> בִּינָה מְלָאכוּתִית</p>
          </div>

          <nav className="home__actions">
            <Link href="/page1" className="cta">
              <span className="cta__icon" aria-hidden>🎵</span>
              הַתְחֵל לִקְרוֹא
            </Link>
          </nav>
        </div>

        <div className="home__cover">
          <Image
            src="/images/cover.png"
            alt="כריכת הספר: הַפִּיל שֶׁאָהַב לְנַגֵּן"
            width={900}
            height={700}
            priority
            sizes="(max-width: 768px) 92vw, (max-width: 1200px) 520px, 620px"
            className="home__coverImg"
          />
        </div>
      </main>
    </div>
  );
}
