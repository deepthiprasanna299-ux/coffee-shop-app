import { Search } from 'lucide-react'

export default function SearchBar({ value, onChange, placeholder = 'Search coffee...' }) {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-coffee-300/0 via-coffee-400/0 to-coffee-300/0 opacity-0 blur transition duration-300 group-focus-within:from-coffee-300/30 group-focus-within:via-coffee-400/20 group-focus-within:to-coffee-300/30 group-focus-within:opacity-100" />
      <Search
        size={18}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-coffee-400 transition group-focus-within:text-coffee-600"
        aria-hidden
      />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="relative w-full rounded-2xl border border-coffee-200/80 bg-white/90 py-3.5 pl-11 pr-4 text-sm text-coffee-800 shadow-sm placeholder:text-coffee-300 outline-none backdrop-blur-sm transition focus:border-coffee-400 focus:bg-white focus:shadow-md focus:ring-2 focus:ring-coffee-200/60"
      />
    </div>
  )
}
