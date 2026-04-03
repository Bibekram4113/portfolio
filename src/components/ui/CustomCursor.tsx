'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0
    let dotX = 0
    let dotY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      // Smooth cursor follow
      cursorX += (mouseX - cursorX) * 0.1
      cursorY += (mouseY - cursorY) * 0.1

      // Dot is faster
      dotX += (mouseX - dotX) * 0.5
      dotY += (mouseY - dotY) * 0.5

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorX - 15}px, ${cursorY - 15}px)`
      }

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`
      }

      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    const animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <>
      {/* Outer cursor ring */}
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 border-2 border-neon-cyan rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{
          boxShadow: '0 0 10px rgba(0, 245, 255, 0.5)',
        }}
      />

      {/* Inner cursor dot */}
      <div
        ref={cursorDotRef}
        className="fixed w-2 h-2 bg-neon-cyan rounded-full pointer-events-none z-[9999]"
        style={{
          boxShadow: '0 0 5px rgba(0, 245, 255, 0.8)',
        }}
      />
    </>
  )
}
