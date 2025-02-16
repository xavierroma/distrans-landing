'use client'

import { useEffect, useRef } from 'react'

interface GradientCanvasProps {
  colors?: string[]
}

// Function to read a CSS variable value with a fallback
const getThemeColor = (variable: string, fallback: string): string => {
  const value = getComputedStyle(document.documentElement).getPropertyValue(variable)
  return value ? value.trim() : fallback
}

export const GradientCanvas = ({ colors }: GradientCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let frame: number
    let gradient: CanvasGradient

    // If no colors are provided via props, use defaults derived from CSS variables.
    const defaultColors = [
      getThemeColor('--color-chart-5', 'hsl(12 76% 61%)'),  // Fallback: a warm orange-red
      getThemeColor('--color-chart-1', 'hsl(173 58% 39%)'),   // Fallback: a teal color
      getThemeColor('--color-chart-5', 'hsl(197 37% 24%)')    // Fallback: a deep blue
    ]
    const themeColors = colors && colors.length > 0 ? colors : defaultColors

    // Initialize random phases for a subtle starting variation
    let phaseX = Math.random() * 4 * Math.PI
    let phaseY = Math.random() * 4 * Math.PI
    const amplitude = 100  // Adjust amplitude for the movement

    const resize = () => {
      const container = canvas.parentElement
      if (!container) return
      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Increment phases slowly to simulate a gentle wave like motion
      phaseX += 0.007
      phaseY += 0.005

      // Calculate a moving center point based on sine/cosine waves
      const centerX = canvas.width / 2 + Math.sin(phaseX) * amplitude
      const centerY = canvas.height / 2 + Math.cos(phaseY) * amplitude

      gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, canvas.width
      )

      themeColors.forEach((color, index) => {
        // Spread the color stops evenly
        gradient.addColorStop(index / themeColors.length, color)
      })

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      frame = requestAnimationFrame(animate)
    }

    window.addEventListener('resize', resize)
    resize()
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(frame)
    }
  }, [colors])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full opacity-40"
      style={{ filter: 'blur(100px)' }}
    />
  )
} 