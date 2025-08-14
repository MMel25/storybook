import Image from 'next/image';
import Link from 'next/link';

interface StoryPageProps {
  title?: string;
  text: string;
  image: string;
  nextPage?: string;
}

export default function StoryPage({ title, text, image, nextPage }: StoryPageProps) {
  return (
    <div className="story-page">
      {title && <h1 className="story-title">{title}</h1>}
      <Image
        src={image}
        alt={title || "תמונה"}
        layout="responsive"
        width={800}
        height={600}
      />
      <p className="story-text">{text}</p>
      <nav className="story-nav">
        <Link href="/">חזרה לעמוד הראשי</Link>
        {nextPage && (
          <Link href={nextPage}>לעמוד הבא</Link>
        )}
      </nav>
    </div>
  );
}
