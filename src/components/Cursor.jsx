import React, { useEffect, useRef } from 'react'

export default function Cursor() {
  const ringRef = useRef(null)
  const dotRef = useRef(null)
  const labelRef = useRef(null)

  useEffect(() => {
    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      if (dotRef.current) {
        dotRef.current.style.left = mouseX + 'px'
        dotRef.current.style.top = mouseY + 'px'
      }

      if (labelRef.current) {
        labelRef.current.style.left = mouseX + 15 + 'px'
        labelRef.current.style.top = mouseY - 15 + 'px'
      }
    }

    const updateRing = () => {
      if (ringRef.current) {
        ringX += (mouseX - ringX) * 0.1
        ringY += (mouseY - ringY) * 0.1
        ringRef.current.style.left = ringX + 'px'
        ringRef.current.style.top = ringY + 'px'
      }
      requestAnimationFrame(updateRing)
    }

    window.addEventListener('mousemove', handleMouseMove)
    const ringAnim = requestAnimationFrame(updateRing)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(ringAnim)
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
      <div ref={labelRef} className="cursor-label">[ BR.OS v1.0 ]</div>
    </>
  )
}
