import React, { useEffect, useRef, useState } from 'react'

type Props = {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right'
}

function Reveal({ children, className = '', delay, direction = 'up' }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const baseClass =
    direction === 'left' ? 'reveal-left' :
    direction === 'right' ? 'reveal-right' :
    'reveal'

  return (
    <div
      ref={ref}
      className={`${baseClass} ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}

export default Reveal
