import Image from 'next/image';
import styles from '../styles/globals.module.css';

interface StoryPageProps {
  title: string;
  text: string;
  image: string;
}

export default function StoryPage({ title, text, image }: StoryPageProps) {
  return (
    <div className={styles.page}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={400} height={300} />
      <p>{text}</p>
    </div>
  );
}
