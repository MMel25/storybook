import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  const siteUrl = "https://storybook-rose-two.vercel.app";
  const title = "הַפִּיל שֶׁאָהַב לְנַגֵּן";
  const description = "ספר ילדים מאת מָאוֹר מְלַמֵּד";
  const imageUrl = `${siteUrl}/images/cover.png`;

  return (
    <>
      <Head>
        {/* Basic Meta */}
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
      </Head>

      <main dir="rtl" className="hero">
        <h1 className="title">{title}</h1>

        <p className="credits">
          <strong>מֵאֵת:</strong> מָאוֹר מְלַמֵּד<br />
          <strong>אִיּוּרִים:</strong> בִּינָה מְלָאכוּתִית
        </p>

        <Link
          href="/page1"
          className="mediaLink"
          aria-label="התחל לקרוא דרך התמונה"
        >
          <div className="media">
            <Image
              src="/images/cover.png"
              alt="כריכת הספר"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
          </div>
        </Link>

        <nav className="cta-group">
          {/* כפתור שיר קליפ */}
          <a
            href={`${siteUrl}/page9`}
            target="_blank"
            rel="noopener noreferrer"
            className="cta clip"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              width="28"
              height="28"
              fill="currentColor"
            >
              <path d="M10 8 L10 16 L16 12 Z" />
            </svg>
            <span>שִׁיר קְלִיפּ</span>
          </a>

          {/* כפתור התחל לקרוא */}
          <Link href="/page1" className="cta read">
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 6c-2-1.5-5-1.5-7 0v10c2-1.5 5-1.5 7 0" />
              <path d="M12 6c 2-1.5 5-1.5 7 0v10c-2-1.5-5-1.5-7 0" />
              <path d="M12 6v12" />
            </svg>
            <span>הַתְחֵל לִקְרוֹא</span>
          </Link>
        </nav>
      </main>
    </>
  );
}
