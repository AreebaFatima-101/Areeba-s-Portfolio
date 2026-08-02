import { useEffect, useState } from 'react'

// Tracks scroll position as a 0-100 percentage and renders it as a
// filled bar. Recalculates on every scroll event, but the work is
// cheap (just division), so no debouncing needed here.
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(pct)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="scroll-progress-track">
      <div className="scroll-progress-fill" style={{ width: `${progress}%` }} />
    </div>
  )
}
