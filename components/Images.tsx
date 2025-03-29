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

const Images = ({ id, image, width, height, className, scrub, lag }: ImagesProps) => {
  return (
    <Image key={id} src={image} alt="image" width={width} height={height} className={className}  />
  )
}

export default Images