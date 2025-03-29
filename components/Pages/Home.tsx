'use client';

import React, { useEffect, useRef } from 'react'
import Images from '../Images'
import { Cards } from '@/constants/Data'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    Cards.forEach((card) => {
      const element = document.querySelector(`#image-${card.id}`);
      if (element) {
        gsap.fromTo(element, 
          { y: 150, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "slow(0.7, 0.7)",
            scrollTrigger: {
              trigger: element,
              start: `top ${80 + (card.lag * 15)}%`,
              end: `bottom ${20 - (card.lag * 5)}%`,
              scrub: card.scrub,
              markers: false,
            },
            duration: 2 + card.lag,
          }
        );
      }
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div ref={containerRef} style={{ 
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '20px',
      alignItems: 'start',
      position: 'relative',
      minHeight: '200vh',
      padding: '100px 0',
      width: '90%',
      margin: '0 auto'
    }}>
        {Cards.map((card, index) => (
            card.image && (
                <div key={card.id} style={{
                    paddingTop: index % 2 === 0 ? '450px' : '0',
                    marginTop: index % 2 === 1 ? '20px' : '0'
                }}>
                    <Images 
                        id={card.id} 
                        image={card.image}
                        width={card.width}
                        height={card.height}
                    />
                </div>
            )
        ))}
    </div>
  )
}

export default Home