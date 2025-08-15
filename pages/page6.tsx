import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Page6() {
  return (
    <main dir="rtl" style={{ textAlign: "center", padding: "16px" }}>
      <Head>
        <style>{`
          .audio-wrapper {
            width: 100%;
            max-width: 500px;
            margin: 0 auto 16px;
          }
          audio {
            width: 100%;
            accent-color: #ff9800;
          }
        `}</style>
      </Head>

      {/* כותרת הספר */}
      <h1 style={{ marginBottom: "4px" }}>הַפִּיל שֶׁאָהַב לְנַגֵּן</h1>

      {/* מספר עמוד */}
      <h2 style={{ fontSize: "1.3rem", color: "#555", marginTop: 0 }}>
        עַמּוּד 6
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
          src="/images/page6.jpg"
          alt="איור עמוד 6"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* כותרת "📖 הקרא" */}
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

      {/* נגן הקראה */}
      <div className="audio-wrapper">
        <audio src="/audio/page6.wav" preload="auto" controls />
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
{`אַבָּא לִיטֵּף אֶת רֹאשׁוֹ וְאָמַר: "גַּם לְגִיבּוֹר, לְעִיתִּים קָשֶׁה לִבְחוֹר,
מָחָר תֵּלֵךְ לַחֲבֵרֵינוּ מָנוֹר, וְתִלְמַד לְנַגֵּן עַל כִּינּוֹר".
הַפִּילוֹן בְּחִיּוּךְ הָלַךְ לִישׁוֹן, וְאַבָּא בַּחֶדֶר, כִּיבָּה אֶת הָאוֹר.
אֶת שִׁיעוּר הַכִּינּוֹר סִיֵּים הַפִּילוֹן אַחֲרוֹן, וְהִרְגִּישׁ שֶׁזֶּה לֹא הַכִּישָּׁרוֹן.
אָמַר הַפִּילוֹן לַהוֹרִים: "בַּכִּינּוֹר אֶדָּרֵשׁ עוֹד הַרְבֵּה לְהִשְׁתַּפֵּר,
אָז בָּא לִי לִלְמוֹד לְנַגֵּן, עַל כְּלִי אַחֵר!"`}
      </div>

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
        <Link
          href="/page5"
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

        <Link
          href="/page7"
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
