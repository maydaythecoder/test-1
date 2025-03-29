import React from 'react'
import Images from '../Images'
import { Cards } from '@/constants/Data'

const Home = () => {
  return (
    <div>
        {Cards.map((card) => (
            <Images key={card.id} id={card.id} image={card.image} width={card.width} height={card.height} />
        ))}
    </div>
  )
}

export default Home