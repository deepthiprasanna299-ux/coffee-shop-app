import { useState } from 'react'
import { UtensilsCrossed } from 'lucide-react'
import SearchBar from '../components/SearchBar'
import CategoryPills from '../components/CategoryPills'
import ProductCard from '../components/ProductCard'
import { CATEGORIES, products } from '../data/products'

export default function Menu() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('coffee')

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = p.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="px-5 pt-6">
      <header className="mb-6 animate-fade-in-up">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-coffee-500 to-coffee-700 text-white shadow-lg glow-coffee">
            <UtensilsCrossed size={20} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-coffee-900">Menu</h1>
            <p className="text-sm text-coffee-500">Browse our full selection</p>
          </div>
        </div>
      </header>

      <div className="mb-5 animate-fade-in-up stagger-1">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search menu items..."
        />
      </div>

      <div className="mb-6 animate-fade-in-up stagger-2">
        <CategoryPills
          categories={CATEGORIES}
          active={activeCategory}
          onSelect={setActiveCategory}
        />
      </div>

      <p className="mb-4 text-sm font-medium text-coffee-400 animate-fade-in-up stagger-3">
        {filteredProducts.length} item{filteredProducts.length !== 1 ? 's' : ''} found
      </p>

      <div className="grid grid-cols-2 gap-3.5 pb-4">
        {filteredProducts.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="flex flex-col items-center py-16 text-center animate-scale-in">
          <span className="mb-3 text-5xl animate-float">🔍</span>
          <p className="font-semibold text-coffee-600">No items found</p>
          <p className="mt-1 text-sm text-coffee-400">Try a different search or category</p>
        </div>
      )}
    </div>
  )
}
