import { Minus, Plus } from 'lucide-react'

export default function QuantitySelector({ value, onChange, min = 1, max = 99 }) {
  return (
    <div className="inline-flex items-center gap-5 rounded-2xl bg-white px-4 py-2 glow-coffee">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-coffee-200 bg-coffee-50 text-coffee-700 transition hover:bg-coffee-100 disabled:opacity-40"
        aria-label="Decrease quantity"
      >
        <Minus size={18} />
      </button>
      <span className="min-w-[2rem] text-center text-xl font-bold text-coffee-800">{value}</span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className="btn-glow flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-coffee-600 to-coffee-700 text-white transition disabled:opacity-40"
        aria-label="Increase quantity"
      >
        <Plus size={18} />
      </button>
    </div>
  )
}
