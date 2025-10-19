'use client'

import { useEffect, useState } from 'react'
import { useScrollAnimation } from './use-scroll-animation'

export function useCounterAnimation(end: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const { ref, isVisible } = useScrollAnimation(0.5)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    const startValue = 0

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * (end - startValue) + startValue)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return { ref, count }
}
