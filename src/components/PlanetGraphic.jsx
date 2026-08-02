// Pure CSS planet - no image files needed, so nothing to upload or
// misplace. The sphere is a radial gradient in lavender/blue tones to
// match the site's palette (the reference used purple/pink - we're
// keeping our existing accent colors instead). Sits in the hero next
// to the text on desktop; CSS hides/shrinks it on small screens.
export default function PlanetGraphic() {
  return (
    <div className="planet-wrap" aria-hidden="true">
      <div className="planet-ring" />
      <div className="planet-sphere" />
    </div>
  )
}
