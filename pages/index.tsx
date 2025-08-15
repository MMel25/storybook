import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main dir="rtl" style={{maxWidth:'980px',margin:'0 auto',padding:'16px',textAlign:'center'}}>
      <h1 style={{
        background: 'linear-gradient(90deg,var(--brand-1),var(--brand-2),var(--brand-3))',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        fontSize: 'clamp(2rem, 5vw, 3rem)'
      }}>
        הפיל שאהב לנגן
      </h1>

      <p style={{color:'var(--ink-soft)'}}>
        <strong style={{color:'var(--brand-1)'}}>מאת:</strong> מאור קלמנד<br/>
        <strong style={{color:'var(--brand-1)'}}>איורים:</strong> בינה קלאמתית
      </p>

      <Link href="/page1" aria-label="התחל לקרוא דרך התמונה">
        <div style={{
          position:'relative',
          aspectRatio:'3/4',
          borderRadius:'20px',
          overflow:'hidden',
          margin:'16px auto',
          maxWidth:'100%',
          boxShadow:'0 8px 20px rgba(92,107,192,0.18)'
        }}>
          <Image src="/images/cover.png" alt="כריכת הספר" fill style={{objectFit:'cover'}}/>
        </div>
      </Link>

      <Link href="/page1" style={{
        display:'inline-flex',
        alignItems:'center',
        gap:'8px',
        padding:'12px 18px',
        borderRadius:'999px',
        background:'linear-gradient(180deg,var(--cta-1),var(--cta-2))',
        color:'#4a2c00',
        fontWeight:'bold',
        boxShadow:`0 4px 0 var(--cta-shadow)`
      }}>
        🎵 התחל לקרוא
      </Link>
    </main>
  );
}
