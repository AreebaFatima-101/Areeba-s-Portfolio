// Replaces the earlier "subtle blob" background with a starfield, to
// match the space-themed reference. Stars are generated once (useMemo)
// so they don't re-randomize on every re-render - that would look like
// flickering instead of a fixed sky. Each star gets a random size,
// position, and twinkle delay for a natural, non-repeating look.
import { useMemo } from 'react'

function generateStars(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 4 + 1,
    delay: Math.random() * 6,
    duration: 3 + Math.random() * 2,
  }))
}

export default function AnimatedBackground() {
  const stars = useMemo(() => generateStars(90), [])

  return (
    <div className="starfield" aria-hidden="true">
      {stars.map((star) => (
        <span
          key={star.id}
          className="star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  )
}
