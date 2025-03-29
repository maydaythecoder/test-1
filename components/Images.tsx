import React from 'react'
import Image from 'next/image'

interface ImagesProps {
    id: number;
  image: string;
  width: number;
  height: number;
  className?: string;
}

const Images = ({ id, image, width, height, className }: ImagesProps) => {
  return (
    <Image key={id} src={image} alt="image" width={width} height={height} className={className} />
  )
}

export default Images