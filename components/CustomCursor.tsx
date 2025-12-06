'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)
  const isHovering = useRef(false)

  useEffect(() => {
    const cursor = cursorRef.current
    const trail = trailRef.current
    if (!cursor || !trail) return

    const updateCursor = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY
      
      cursor.style.transform = `translate3d(${x - 6}px, ${y - 6}px, 0) scale(${isHovering.current ? 1.5 : 1})`
      trail.style.transform = `translate3d(${x - 12}px, ${y - 12}px, 0) scale(${isHovering.current ? 1.8 : 1})`
    }

    const handleMouseEnter = () => {
      isHovering.current = true
    }
    
    const handleMouseLeave = () => {
      isHovering.current = false
    }

    window.addEventListener('mousemove', updateCursor, { passive: true })
    
    const observer = new MutationObserver(() => {
      const elements = document.querySelectorAll('a, button, [role="button"]')
      elements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter, { passive: true })
        el.addEventListener('mouseleave', handleMouseLeave, { passive: true })
      })
    })
    
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', updateCursor)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-3 h-3 bg-blue-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-75 ease-out"
      />
      <div
        ref={trailRef}
        className="fixed w-6 h-6 border border-blue-400/60 rounded-full pointer-events-none z-40 transition-transform duration-150 ease-out"
      />
    </>
  )
}