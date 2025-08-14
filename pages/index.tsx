import Link from 'next/link';
import Image from 'next/image';
import '../styles/globals.css'; // ייבוא נכון של קובץ CSS רגיל

export default function Home() {
  return (
    <div className="page">
      <h1>הַפִּיל שֶׁאָהַב לְנַגֵּן</h1>
      <Image src="/images/cover.png" alt="כריכה" width={400} height={300} />
      <nav>
        <Link href="/page1">התחל לקרוא</Link>
      </nav>
    </div>
  );
}
