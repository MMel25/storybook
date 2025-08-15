// pages/index.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main dir="rtl" className="hero">
      <h1 className="title">הפיל שאהב לנגן</h1>

      <p className="credits">
        <strong>מאת:</strong> מאור קלמנד<br/>
        <strong>איורים:</strong> בינה קלאמתית
      </p>

      <Link href="/page1" aria-label="התחל לקרוא דרך התמונה" className="mediaLink">
        <div className="media">
          <Image
            src="/images/cover.png"
            alt="כריכת הספר"
            fill
            priority
            style={{objectFit:'cover'}}
          />
        </div>
      </Link>

      <Link href="/page1" className="cta">
        🎵 התחל לקרוא
      </Link>
    </main>
  );
}
