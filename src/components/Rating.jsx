import { Star } from 'lucide-react'

export default function Rating({ value, reviews, size = 'sm' }) {
  const starSize = size === 'lg' ? 18 : 14

  return (
    <div className="flex items-center gap-1">
      <Star
        size={starSize}
        className="fill-amber-400 text-amber-400"
        aria-hidden
      />
      <span className={`font-semibold text-coffee-800 ${size === 'lg' ? 'text-base' : 'text-sm'}`}>
        {value}
      </span>
      {reviews !== undefined && (
        <span className="text-coffee-400 text-xs">({reviews})</span>
      )}
    </div>
  )
}
