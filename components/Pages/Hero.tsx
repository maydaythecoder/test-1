'use client'
import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo(containerRef.current?.children || [], {
      opacity: 0,
      y: 40
    }, {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      ease: "power4.out",
      duration: 1.4,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
        markers: false
      }
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} style={{ 
      position: 'relative',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0a0a0a',
      overflow: 'hidden',
      padding: '0 20px'
    }}>
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 8vw, 5rem)',
          fontWeight: 700,
          lineHeight: 1.1,
          marginBottom: '1.5rem',
          color: '#ffffff',
          textShadow: '0 4px 6px rgba(0,0,0,0.2)'
        }}>
          Modern Scroll Animations<br />
          <span style={{
            fontSize: '0.6em',
            fontWeight: 300,
            display: 'block',
            marginTop: '1.5rem',
            opacity: 0.8,
            letterSpacing: '0.05em'
          }}>GSAP × Next.js Integration</span>
        </h1>
        
        <p style={{ 
          fontSize: '1.25rem',
          maxWidth: '600px',
          margin: '0 auto 2.5rem',
          color: 'rgba(255,255,255,0.8)',
          lineHeight: 1.6,
          fontWeight: 300
        }}>
          Professional-grade animations with precision-controlled scroll interactions and optimized performance.
        </p>

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '12px',
          padding: '8px 24px',
          borderRadius: '50px',
          background: 'rgba(255,255,255,0.02)',
          boxShadow: '0 0 0 1px rgba(255,255,255,0.1)',
          backdropFilter: 'blur(12px)'
        }}>
          <span style={{
            fontSize: '0.9rem',
            fontWeight: 400,
            letterSpacing: '0.1em',
            color: 'rgba(255,255,255,0.9)'
          }}>
            SCROLL TO EXPLORE
          </span>
        </div>
      </div>

      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '150%',
        height: '60vh',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(100,100,255,0.08) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />
    </div>
  )
}

export default Hero