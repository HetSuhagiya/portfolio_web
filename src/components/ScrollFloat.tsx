import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, type ReactNode } from 'react'

interface ScrollFloatProps {
  children: ReactNode
  animationDuration?: number
  stagger?: number
}

export default function ScrollFloat({
  children,
  animationDuration = 1,
  stagger = 0
}: ScrollFloatProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  useEffect(() => {
    if (!ref.current) return
    const elements = ref.current.querySelectorAll('*')
    elements.forEach((element, index) => {
      if (element instanceof HTMLElement) {
        element.style.transitionDelay = `${index * stagger}s`
      }
    })
  }, [stagger])

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        opacity,
        transition: `all ${animationDuration}s`
      }}
    >
      {children}
    </motion.div>
  )
} 