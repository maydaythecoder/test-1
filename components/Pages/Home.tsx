import React from 'react'
import Images from '../Images'
import { Cards } from '@/constants/Data'

const Home = () => {
  return (
    <div style={{ 
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '20px',
      alignItems: 'start',
      position: 'relative',
      marginTop: '100px',
      marginBottom: '100px',
      marginRight: 'auto',
      marginLeft: 'auto',
      width: '90%'
    }}>
        {Cards.map((card, index) => (
            <div key={card.id} style={{
                paddingTop: index % 2 === 0 ? '450px' : '0',
                marginTop: index % 2 === 1 ? '20px' : '0'
            }}>
                <Images 
                    id={card.id} 
                    image={card.image ?? ''}
                    width={card.width ?? 0}
                    height={card.height ?? 0}
                />
            </div>
        ))}
    </div>
  )
}

export default Home