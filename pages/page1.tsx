import { useRef, useState } from "react";

export default function CustomAudioPlayer({ src }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    const total = audioRef.current.duration || 1;
    setProgress((current / total) * 100);
  };

  const handleSeek = (e) => {
    const total = audioRef.current.duration;
    const newTime = (e.target.value / 100) * total;
    audioRef.current.currentTime = newTime;
  };

  return (
    <div
      style={{
        background: "#fff3e0",
        padding: "16px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        maxWidth: "500px",
        margin: "0 auto",
      }}
    >
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
      <button
        onClick={togglePlay}
        style={{
          background: "#ff9800",
          border: "none",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "999px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "1rem",
          marginBottom: "8px",
        }}
      >
        {isPlaying ? "⏸ עצור" : "▶️ נגן"}
      </button>
      <input
        type="range"
        value={progress}
        onChange={handleSeek}
        style={{
          width: "100%",
          accentColor: "#ff9800",
          cursor: "pointer",
        }}
      />
    </div>
  );
}
