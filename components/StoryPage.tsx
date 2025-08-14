import Image from 'next/image';
import { useRouter } from 'next/router';
import stories from '../data/stories.json';

export default function StoryPage() {
  const router = useRouter();
  const { id } = router.query;

  const story = stories.find((s) => s.id === id);

  if (!story) {
    return <div className="story-page">הסיפור לא נמצא</div>;
  }

  const { title, image, text } = story;

  return (
    <div className="story-page">
      <h1 className="story-title">{title}</h1>
      <div className="story-image">
        <Image
          src={image}
          alt={title}
          layout="responsive"
          width={800}
          height={600}
        />
      </div>
      <p className="story-text">{text}</p>
    </div>
  );
}
