import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export default function Page1() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <main dir="rtl" style={{ textAlign: "center", padding: "16px" }}>
      {/* כותרת הספר */}
      <h1 className="title" style={{ marginBottom: "4px" }}>
        הַפִּיל שֶׁאָהַב לְנַגֵּן
      </h1>
      {/* מספר עמוד */}
      <h2 style={{ fontSize: "1.2rem", color: "#555", marginTop: 0 }}>
        עַמּוּד 1
      </h2>

      {/* תמונה בפורמט לרוחב */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto 16px",
          aspectRatio: "16/9",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
        }}
      >
        <Image
          src="/images/page1.jpg"
          alt="איור עמוד 1"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* טקסט הסיפור */}
      <div
        style={{
          fontSize: "1.2rem",
          lineHeight: "1.8",
          maxWidth: "800px",
          margin: "0 auto 24px",
          whiteSpace: "pre-line",
        }}
      >
        {`בְּיַעַר רָחוֹק, בֵּין הֶהָרִים, חַיָּה מִשֶּׁפָּחַת פִּילִים, לֹא כֹּל כָּךְ רְגִילִים.
בַּמִּשְׁפָּחָה הַפִּילִים, בְּעִיקָּר הָיוּ מוּכְשָׁרִים.
עוֹרֵךְ דִּין אַבָּא פִּיל, אֶת הָרָעִים מַפְלִיל,
אִימָּא פִילָה שָׁרָה בַּמַּקְהֵלָה,
הַפִילָה הַבְּכוֹרָה, בְּרִיקּוּד בָּחֲרָה,
הַפִּיל הָאֶמְצָעִי, כּוֹכָב טֶנִיס וַדָּאִי,`}
      </div>

      {/* כפתור האזנה */}
      <button
        onClick={playAudio}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 16px",
          borderRadius: "999px",
          border: "none",
          background: "linear-gradient(180deg, #ffd37a, #ffb74d)",
          color: "#4a2c00",
          fontWeight: "bold",
          fontSize: "1rem",
          boxShadow: "0 4px 0 #e59a3a",
          cursor: "pointer",
          marginBottom: "24px",
        }}
      >
        {/* אייקון רמקול */}
        <svg
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="currentColor"
        >
          <path d="M3 9v6h4l5 5V4L7 9H3z" />
          <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.06c1.48-.74 2.5-2.26 2.5-4.03z" />
        </svg>
        הַקְרֵא
      </button>

      {/* נגן האודיו (נסתר) */}
      <audio ref={audioRef} src="/audio/page1.wav" preload="auto" />

      {/* ניווט בין עמודים */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "500px",
          margin: "0 auto",
          marginTop: "16px",
          alignItems: "center",
        }}
      >
        {/* הקודם */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            textDecoration: "none",
            color: "#333",
            fontWeight: "bold",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span>הַקּוֹדֶם</span>
        </Link>

        {/* בית */}
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "#333",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9L12 2l9 7v11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V12H9v8a2 2 0 0 1-2 2H3z" />
          </svg>
        </Link>

        {/* הבא */}
        <Link
          href="/page2"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            textDecoration: "none",
            color: "#333",
            fontWeight: "bold",
          }}
        >
          <span>הַבָּא</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      </div>
    </main>
  );
}
