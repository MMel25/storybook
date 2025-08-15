import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";

type CustomAudioPlayerProps = {
  src: string;
};

function CustomAudioPlayer({ src }: CustomAudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const current = audioRef.current?.currentTime || 0;
    const total = audioRef.current?.duration || 1;
    setProgress((current / total) * 100);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const total = audioRef.current.duration;
    const newTime = (Number(e.target.value) / 100) * total;
    audioRef.current.currentTime = newTime;
  };

  return (
    <div
      style={{
        background: "#fff3e0",
        padding: "16px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        maxWidth: "500px",
        margin: "0 auto",
      }}
    >
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
      <button
        onClick={togglePlay}
        style={{
          background: "#ff9800",
          border: "none",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "999px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "1rem",
          marginBottom: "8px",
        }}
      >
        {isPlaying ? "⏸ עצור" : "▶️ נגן"}
      </button>
      <input
        type="range"
        value={progress}
        onChange={handleSeek}
        style={{
          width: "100%",
          accentColor: "#ff9800",
          cursor: "pointer",
        }}
      />
    </div>
  );
}

export default function Page1() {
  return (
    <main dir="rtl" style={{ textAlign: "center", padding: "16px" }}>
      {/* כותרת הספר */}
      <h1 className="title" style={{ marginBottom: "4px" }}>
        הַפִּיל שֶׁאָהַב לְנַגֵּן
      </h1>

      {/* מספר עמוד */}
      <h2 style={{ fontSize: "1.3rem", color: "#555", marginTop: 0 }}>
        עַמּוּד 1
      </h2>

      {/* תמונה */}
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
          fontSize: "1.4rem",
          lineHeight: "2",
          maxWidth: "820px",
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

      {/* כותרת לנגן + הנגן החדש */}
      <h3
        style={{
          fontSize: "1.4rem",
          marginBottom: "8px",
          color: "#ff9800",
          fontWeight: "bold",
        }}
      >
        📖 הַקְרֵא
      </h3>
      <CustomAudioPlayer src="/audio/page1.wav" />

      {/* ניווט */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "500px",
          margin: "0 auto",
          marginTop: "24px",
          alignItems: "center",
        }}
      >
        {/* הקודם */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            background: "#ffd37a",
            padding: "10px 14px",
            borderRadius: "999px",
            fontWeight: "bold",
            color: "#4a2c00",
            boxShadow: "0 3px 0 #e59a3a",
          }}
        >
          <span>הַקּוֹדֶם</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>

        {/* בית */}
        <Link
          href="/"
          style={{
            background: "#5c6bc0",
            padding: "10px",
            borderRadius: "50%",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 3px 0 #3f51b5",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9L12 2l9 7v11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V12H9v8a2 2 0 0 1-2 2H3z" />
          </svg>
        </Link>

        {/* הבא */}
        <Link
          href="/page2"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            background: "#26a69a",
            padding: "10px 14px",
            borderRadius: "999px",
            fontWeight: "bold",
            color: "#fff",
            boxShadow: "0 3px 0 #1b7f74",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span>הַבָּא</span>
        </Link>
      </div>
    </main>
  );
}
