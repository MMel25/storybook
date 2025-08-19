import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

interface StoryPageProps {
  title?: string;
  text: string;
  image: string;
  nextPage?: string;
  audioFile?: string; // נתיב לקובץ השמע
}

export default function StoryPage({ title, text, image, nextPage, audioFile }: StoryPageProps) {
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    
    const handleAudioEnd = () => {
      setIsPlaying(false);
      // מעבר אוטומטי לעמוד הבא רק אם יש עמוד הבא
      if (nextPage) {
        setTimeout(() => {
          router.push(nextPage);
        }, 1000); // המתנה של שנייה אחת לפני המעבר
      }
    };

    const handleAudioPlay = () => {
      setIsPlaying(true);
    };

    const handleAudioPause = () => {
      setIsPlaying(false);
    };

    if (audio) {
      audio.addEventListener('ended', handleAudioEnd);
      audio.addEventListener('play', handleAudioPlay);
      audio.addEventListener('pause', handleAudioPause);
      
      return () => {
        audio.removeEventListener('ended', handleAudioEnd);
        audio.removeEventListener('play', handleAudioPlay);
        audio.removeEventListener('pause', handleAudioPause);
      };
    }
  }, [nextPage, router]);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  };

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
      
      {/* נגן שמע */}
      {audioFile && (
        <div className="audio-player">
          <audio ref={audioRef} preload="metadata">
            <source src={audioFile} type="audio/mpeg" />
            הדפדפן שלך אינו תומך בהשמעת שמע.
          </audio>
          <button 
            onClick={toggleAudio}
            className={`play-button ${isPlaying ? 'playing' : ''}`}
          >
            {isPlaying ? '⏸️ עצור' : '▶️ השמע'}
          </button>
        </div>
      )}
      
      <nav className="story-nav">
        <Link href="/">חזרה לעמוד הראשי</Link>
        {nextPage && (
          <Link href={nextPage}>לעמוד הבא</Link>
        )}
      </nav>
    </div>
  );
}
