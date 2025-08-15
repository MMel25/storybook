import Link from "next/link";
import Image from "next/image";

export default function Page4() {
  return (
    <main dir="rtl" style={{ textAlign: "center", padding: "16px" }}>
      {/* כותרת הספר */}
      <h1 className="title" style={{ marginBottom: "4px" }}>
        הַפִּיל שֶׁאָהַב לְנַגֵּן
      </h1>

      {/* מספר עמוד */}
      <h2 style={{ fontSize: "1.3rem", color: "#555", marginTop: 0 }}>
        עַמּוּד 4
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
          src="/images/page4.jpg"
          alt="איור עמוד 4"
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
{`שָׂמְחוּ הַהוֹרִים וְאָמְרוּ:  "פִּילוֹן יָקָר שֶׁלָּנוּ, כָּעֵת הַכֹּל יִסְתַּדֵּר,
תִּלְמַד אֵצֶל אֶסְתֵּר, הַמּוֹרָה לִפְסַנְתֵּר".
הַפִּילוֹן הַקָּטָן, כְּדֵי לֹא לְאַחֵר, אֶל שִׁיעוּר הַפְּסַנְתֵּר חִישׁ מִיהֵר.
בְּסוֹף הַשִּׁיעוּר, הִרְגִּישׁ הִרְהוּר, וּכְשֶׁהִגִּיעַ הַבַּיְתָה, אָמַר לַהוֹרִים: 
"נֶחְמָד לְנַגֵּן עַל פְּסַנְתֵּר, אֲבָל בָּא לִי לִלְמוֹד לְנַגֵּן עַל כְּלִי אַחֵר!"`}
      </div>

      {/* כותרת לנגן + הנגן המובנה */}
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

      <audio
        src="/audio/page4.wav"
        preload="auto"
        controls
        style={{
          width: "100%",
          maxWidth: "500px",
          accentColor: "#ff9800",
        }}
      />

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
        {/* הקודם – עמוד 3 */}
        <Link
          href="/page3"
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

        {/* הבא – עמוד 5 */}
        <Link
          href="/page5"
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
