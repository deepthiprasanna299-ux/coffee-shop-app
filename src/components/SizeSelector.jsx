import { SIZES } from '../data/products'

export default function SizeSelector({ selected, onSelect }) {
  return (
    <div className="flex gap-3">
      {SIZES.map((size) => {
        const isActive = selected === size.id
        return (
          <button
            key={size.id}
            type="button"
            onClick={() => onSelect(size.id)}
            className={`relative flex-1 overflow-hidden rounded-2xl border-2 py-3.5 text-center transition-all duration-300 ${
              isActive
                ? 'border-coffee-500 bg-gradient-to-b from-coffee-50 to-white text-coffee-700 glow-ring scale-105'
                : 'border-coffee-200/80 bg-white text-coffee-500 hover:border-coffee-300'
            }`}
          >
            {isActive && (
              <span className="absolute inset-0 bg-gradient-to-t from-coffee-100/50 to-transparent" />
            )}
            <span className="relative block text-xs font-bold uppercase tracking-widest">
              {size.id}
            </span>
            <span className="relative block text-sm font-semibold">{size.label}</span>
          </button>
        )
      })}
    </div>
  )
}
