import Image from 'next/image';

type Props = {
  pageNumber: number;
};

export default function PageWithImage({ pageNumber }: Props) {
  const imagePath = `/images/page${pageNumber}.png`;

  return (
    <div>
      <h1>עמוד {pageNumber}</h1>
      <Image
        src={imagePath}
        alt={`תמונה לעמוד ${pageNumber}`}
        width={800}
        height={600}
      />
    </div>
  );
}
