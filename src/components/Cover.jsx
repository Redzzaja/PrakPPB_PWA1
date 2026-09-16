const ART = [
  ['#1ed760', '#0b6e4f'],
  ['#7c3aed', '#2e1065'],
  ['#f59e0b', '#7c2d12'],
  ['#38bdf8', '#0c4a6e'],
  ['#ec4899', '#831843'],
  ['#14b8a6', '#134e4a'],
]

// ponytail: generated cover art keyed to track id — no image assets.
// Swap for real artwork URLs when the lab gets media.
export default function Cover({ id, className = '' }) {
  const [from, to] = ART[(id - 1) % ART.length]
  return (
    <div
      aria-hidden="true"
      className={`shrink-0 ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle at 30% 20%, rgba(255,255,255,.28), transparent 62%), linear-gradient(135deg, ${from}, ${to})`,
      }}
    />
  )
}
