import React from 'react'
import Image from 'next/image'

interface ImagesProps {
  id: number;
  image: string;
  width: number;
  height: number;
  className?: string;
  scrub?: number;
  lag?: number;
}

const Images = ({ id, image, width, height, className }: ImagesProps) => {
  return (
    <div id={`image-${id}`} className={className}>
      <Image key={id} src={image || '/fallback-image.jpg'} alt="image" width={width} height={height} className="w-full h-auto" loading="lazy" priority={false} />
    </div>
  )}

export default Images