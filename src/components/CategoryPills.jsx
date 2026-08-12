export default function CategoryPills({ categories, active, onSelect }) {
  return (
    <div className="flex gap-2.5 overflow-x-auto pb-1 scrollbar-none">
      {categories.map((cat) => {
        const isActive = active === cat.id
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelect(cat.id)}
            className={`relative flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-semibold transition-all duration-300 ${
              isActive
                ? 'bg-[#5d3b2b] text-white shadow-[0_12px_22px_rgba(93,59,43,0.18)]'
                : 'border border-[#eadfce] bg-[#f8f2ea] text-[#7d5b45]'
            }`}
          >
            <span>{cat.icon}</span>
            <span>{cat.label}</span>
          </button>
        )
      })}
    </div>
  )
}
