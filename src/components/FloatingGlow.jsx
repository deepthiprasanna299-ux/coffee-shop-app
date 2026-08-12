export default function FloatingGlow({ className = '', color = 'coffee', delay = 0 }) {
  const colorMap = {
    coffee: 'from-coffee-400/30 via-coffee-300/10 to-transparent',
    amber: 'from-amber-400/25 via-orange-300/10 to-transparent',
    cream: 'from-coffee-200/40 via-coffee-100/15 to-transparent',
  }

  return (
    <div
      className={`pointer-events-none absolute rounded-full bg-gradient-radial blur-3xl animate-float ${colorMap[color] || colorMap.coffee} ${className}`}
      style={{ animationDelay: `${delay}s` }}
      aria-hidden
    />
  )
}
