import Image from "next/image";

export default function Page8() {
  return (
    <div className="media-and-text">
      <div className="media">
        <Image
          src="/images/page8.jpg"
          alt="איור עמוד 8"
          width={900}
          height={600}
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="audio-wrapper">
        <audio src="/audio/page8.wav" preload="auto" controls />
      </div>

      <div className="story-text">
        {`פתאום הגיע גיל, הלא הוא המורה לחיל, ומיד עם הפילון
לנגן התחיל.
הפיל החל לחלל בחליל, ומיד התפעם מהצליל.
כשאמר המורה גיל, שהוא משהו בלתי רגיל,
הרגיש הפילון כל קר חיל, עד שאפילו שמח,
מאיזה כלי לנגן התחיל.
כשקראו אבא פיל ואמא פילה, שבנם אוכל בשמחה וברון,
הבינו מיד, עשו סוד את הפילון....`}
      </div>
    </div>
  );
}
