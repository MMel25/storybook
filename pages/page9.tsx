import Link from "next/link";
import Head from "next/head";

export default function Page9() {
  return (
    <main dir="rtl" style={{ textAlign: "center", padding: "16px" }}>
      <Head>
        <style>{`
          .video-wrapper {
            position: relative;
            width: 100%;
            height: 600px;
            max-width: 500px;
            margin: 0 auto 24px;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 6px 18px rgba(0,0,0,0.1);
          }

          @media (min-width: 768px) {
            .video-wrapper {
              padding-bottom: 56.25%;
              height: 0;
              max-width: 900px;
            }

            .video-wrapper iframe {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }
          }
        `}</style>
      </Head>

      {/* כותרת הספר */}
      <h1 className="title" style={{ marginBottom: "4px" }}>
        הַפִּיל שֶׁאָהַב לְנַגֵּן
      </h1>

      {/* מספר עמוד */}
      <h2 style={{ fontSize: "1.3rem", color: "#555", marginTop: 0 }}>
        עַמּוּד 9
      </h2>

      {/* כותרת ראשית */}
      <h3
        style={{
          fontSize: "1.6rem",
          margin: "16px 0",
          color: "#ff9800",
          fontWeight: "bold",
        }}
      >
        צְפוּ בַּקְּלִיפּ שֶׁל הַשִּׁיר עַל הַפִּיל שֶׁאָהַב לְנַגֵּן
      </h3>

      {/* סרטון מוטמע */}
      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/-i0xPcRIUJU?si=_YaYWUy0jkPN3u7d"
          title="קליפ השיר על הפיל שאהב לנגן"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>

      {/* ניווט */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "300px",
          margin: "0 auto",
          marginTop: "24px",
          alignItems: "center",
        }}
      >
        {/* הקודם */}
        <Link
          href="/page8"
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
      </div>
    </main>
  );
}
