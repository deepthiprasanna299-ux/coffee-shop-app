import { useState } from 'react'
import { Plus, Check } from 'lucide-react'

export default function AddToCartButton({
  onAdd,
  label,
  size = 'md',
  className = '',
}) {
  const [added, setAdded] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    onAdd()
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  const sizes = {
    sm: 'h-9 w-9',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
  }

  const iconSizes = { sm: 16, md: 18, lg: 20 }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`btn-glow flex items-center justify-center rounded-full shadow-lg transition-all duration-300 active:scale-90 ${
        added
          ? 'bg-green-600 text-white scale-110'
          : 'bg-coffee-600 text-white hover:bg-coffee-700'
      } ${sizes[size]} ${className}`}
      aria-label={added ? `${label} added` : `Add ${label} to cart`}
    >
      {added ? (
        <Check size={iconSizes[size]} strokeWidth={2.5} className="animate-scale-in" />
      ) : (
        <Plus size={iconSizes[size]} strokeWidth={2.5} />
      )}
    </button>
  )
}
