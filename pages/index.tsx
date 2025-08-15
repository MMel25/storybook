import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main dir="rtl" className="hero">
      <h1 className="title">הַפִּיל שֶׁאָהַב לְנַגֵּן</h1>

      <p className="credits">
        <strong>מֵאֵת:</strong> מָאוֹר מְלַמֵּד<br/>
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
        {/* כפתור שיר קליפ מימין – לוגו YouTube מוגדל */}
        <a
          href="https://storybook-rose-two.vercel.app/page9"
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

        {/* כפתור התחל לקרוא משמאל – ספר פתוח */}
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
  );
}
