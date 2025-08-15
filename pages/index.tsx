import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main dir="rtl" className="hero">
      <h1 className="title">הַפִּיל שֶׁאָהַב לְנַגֵּן</h1>

      <p className="credits">
        <strong>מֵאֵת:</strong> מָאוֹר קַלְמֶנְד<br/>
        <strong>אִיּוּרִים:</strong> בִּינָה קַלְמֶנְדִית
      </p>

      <Link href="/page1" className="mediaLink" aria-label="התחל לקרוא דרך התמונה">
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
        <Link href="/page1" className="cta read">
          📖 הַתְחֵל לִקְרוֹא
        </Link>

        <a
          href="https://youtu.be/-i0xPcRIUJU?si=fEbyzE-cF2CQIs2C"
          target="_blank"
          rel="noopener noreferrer"
          className="cta clip"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="white"
          >
            <path d="M10 15.5l6-3.5-6-3.5v7z"/>
            <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C16.2 5 12 5 12 5s-4.2 0-6.9.1c-.4 0-1.3.1-2.1.9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.6c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.9.8 2.4.9 1.8.1 7.6.1 7.6.1s4.2 0 6.9-.1c.4 0 1.3-.1 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.6c0-1.6-.2-3.2-.2-3.2z"/>
          </svg>
          <span>שִׁיר קְלִיפּ</span>
        </a>
      </nav>
    </main>
  );
}
