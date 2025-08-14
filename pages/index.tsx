import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/globals.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>הַפִּיל שֶׁאָהַב לְנַגֵּן</h1>
      <Image src="/images/cover.png" alt="כריכה" width={400} height={300} />
      <nav>
        <Link href="/page1">התחל לקרוא</Link>
      </nav>
    </div>
  );
}
