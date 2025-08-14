import Image from 'next/image';
import Link from 'next/link';

interface StoryPageProps {
  title: string;
  text: string;
  image: string;
}

export default function StoryPage({ title, text, image }: StoryPageProps) {
  return (
    <div className="story-page">
      <h1>{title}</h1>
      <Image
        src={image}
        alt={title}
        width={800}
        height={600}
      />
      <p className="story-text">{text}</p>

      <nav>
        <Link href="/">חזרה לתפריט הראשי</Link>
      </nav>
    </div>
  );
}
