import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Page8() {
  return (
    <main dir="rtl" style={{ textAlign: "center", padding: "16px" }}>
      <Head>
        <style>{`
          audio {
            width: 100%;
            accent-color: #ff9800;
          }
        `}</style>
      </Head>

      {/* כותרת הספר */}
      <h1 className="title" style={{ marginBottom: "4px" }}>
        הַפִּיל שֶׁאָהַב לְנַגֵּן
      </h1>

      {/* מספר עמוד */}
      <h2 style={{ fontSize: "1.3rem", color: "#555", marginTop: 0 }}>
        עַמּוּד 8
      </h2>

      {/* ✅ מיכל עיקרי לכל התוכן */}
      <div className="page-content">
        {/* תמונה */}
        <div className="image-wrapper">
          <Image
            src="/images/page8.jpg"
            alt="איור עמוד 8"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* כותרת "הקרא" מעל הנגן */}
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

        {/* הנגן */}
        <div className="audio-wrapper">
          <audio
            src="/audio/page8.wav"
            preload="auto"
            controls
          />
        </div>

        {/* טקסט הסיפור */}
        <div className="story-text">
{`פִּתְאוֹם הִגִּיעַ גִּיל, הַלֹּא הוּא הַמּוֹרֶה לְחָלִיל, וּמִיָּד עִם הַפִּילוֹן
לְנַגֵּן הִתְחִיל.
הַפִּיל הֵחֵל לְחָלָל בֶּחָלִיל, וּמִיָּד הִתְּפָעֵם מֵהַצְּלִיל.
כְּשֶׁאָמַר הַמּוֹרֶה גִּיל, שֶׁהוּא מַשֶּׁהוּ בִּלְתִּי רָגִיל,
הִרְגִּישׁ הַפִּילוֹן כֹּל כָּךְ קַלִּיל, עַד שֶׁאֲפִילּוּ שָׁכַח,
מֵאֵיזֶה כְּלִי לְנַגֵּן הִתְחִיל...

כְּשֶׁרָאוּ אַבָּא פִּיל וְאִימָה פִּילָה, שֶׁבְּנָם צוֹהֵל בְּשִׂמְחָה וּבְרוֹן,
הֵבִינוּ מִיָּד, שֶׁסּוֹף סוֹף מָצָא, אֶת הַכִּישָּׁרוֹן...`}
        </div>

        {/* ניווט */}
        <div
          className="nav-bar"
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
            href="/page7"
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

          {/* אין כפתור "הבא" בעמוד האחרון */}
          <div style={{ width: "86px", visibility: "hidden" }}></div>
        </div>
      </div>
    </main>
  );
}
