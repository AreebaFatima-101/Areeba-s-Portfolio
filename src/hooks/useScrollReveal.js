import { useEffect } from 'react'

// Watches every element with class "reveal" and adds "in-view" to it
// once it scrolls into the viewport. The CSS transition (in index.css)
// does the actual animating - this hook just flips the class at the
// right moment. Runs once on mount; re-scans if the page content changes.
export default function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            // Once revealed, stop watching it - no need to re-check
            // every scroll event for something already visible.
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
