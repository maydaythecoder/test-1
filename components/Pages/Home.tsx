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
          { y: 200, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "slow(0.8, 0.6)",
            scrollTrigger: {
              trigger: element,
              start: `top ${75 + (card.lag * 20)}%`,
              end: `bottom ${25 - (card.lag * 7)}%`,
              scrub: card.scrub * 1.5,
              markers: false,
            },
            duration: 3 + (card.lag * 2),
            delay: card.lag * 0.8
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
                        width={card.width ? Number(card.width) : 600}
                        height={card.height ? Number(card.height) : 400}
                    />
                </div>
            )
        ))}
    </div>
  )
}

export default Home