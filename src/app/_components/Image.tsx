'use client';
import Image from 'next/image';

export function Img({
  src,
  alt,
  height,
  width,
  className,
}: {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      height={height}
      width={width}
      loader={({ src }) => src}
      className={className}
    />
  );
}
