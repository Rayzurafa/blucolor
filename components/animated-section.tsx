"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "fade" | "scale" | "blur"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: AnimationType
  delay?: number
  duration?: number
  threshold?: number
}

// On mobile (< md) elements are always visible — animation classes only apply on md+
const animationStyles: Record<AnimationType, { initial: string; visible: string }> = {
  "fade-up": {
    initial: "md:opacity-0 md:translate-y-8",
    visible: "md:opacity-100 md:translate-y-0",
  },
  "fade-down": {
    initial: "md:opacity-0 md:-translate-y-8",
    visible: "md:opacity-100 md:translate-y-0",
  },
  "fade-left": {
    initial: "md:opacity-0 md:translate-x-8",
    visible: "md:opacity-100 md:translate-x-0",
  },
  "fade-right": {
    initial: "md:opacity-0 md:-translate-x-8",
    visible: "md:opacity-100 md:translate-x-0",
  },
  fade: {
    initial: "md:opacity-0",
    visible: "md:opacity-100",
  },
  scale: {
    initial: "md:opacity-0 md:scale-95",
    visible: "md:opacity-100 md:scale-100",
  },
  blur: {
    initial: "md:opacity-0 md:blur-sm",
    visible: "md:opacity-100 md:blur-0",
  },
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold })
  const styles = animationStyles[animation]

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        isVisible ? styles.visible : styles.initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

interface StaggeredChildrenProps {
  children: React.ReactNode
  className?: string
  animation?: AnimationType
  staggerDelay?: number
  duration?: number
  threshold?: number
}

export function StaggeredChildren({
  children,
  className,
  animation = "fade-up",
  staggerDelay = 100,
  duration = 700,
  threshold = 0.1,
}: StaggeredChildrenProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold })
  const styles = animationStyles[animation]

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className={cn(
                "transition-all ease-out",
                isVisible ? styles.visible : styles.initial
              )}
              style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${index * staggerDelay}ms`,
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  )
}
