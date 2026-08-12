import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Sparkles } from 'lucide-react'
import SearchBar from '../components/SearchBar'
import CategoryPills from '../components/CategoryPills'
import ProductCard from '../components/ProductCard'
import { CATEGORIES, products, getPopularProducts } from '../data/products'

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good Morning'
  if (hour < 17) return 'Good Afternoon'
  return 'Good Evening'
}

export default function Home() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('coffee')

  const popularProducts = getPopularProducts()
  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = p.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="relative overflow-hidden">
      <div className="relative px-5 pb-2 pt-6">
        <header className="mb-5 animate-fade-in-up">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7c4f37] to-[#4c2e24] text-xl shadow-[0_12px_24px_rgba(94,62,48,0.2)]">
                ☕
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.22em] text-[#7b5845] uppercase">Coffee Haven</p>
                <p className="mt-1 flex items-center gap-1 text-[10px] font-medium text-[#8a6955]">
                  <Sparkles size={11} className="text-[#d7a35b]" />
                  Fresh • Premium • Roasted
                </p>
              </div>
            </div>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e8d9c6] bg-[#f8f2ea] text-[#6f4833] shadow-sm"
              aria-label="Favorites"
            >
              <Heart size={16} strokeWidth={2.2} fill="none" />
            </button>
          </div>
        </header>

        <section className="mb-4 animate-fade-in-up stagger-1">
          <h1 className="text-[1.9rem] font-black leading-none tracking-[-0.04em] text-[#3d2c24]">
            {getGreeting()} 👋
          </h1>
          <p className="mt-2 text-sm text-[#7a6154]">What would you like to drink today?</p>
        </section>

        <section className="mb-5 animate-fade-in-up stagger-2">
          <div className="mb-3 flex items-center justify-between">
            <p className="flex items-center gap-2 text-[10px] font-bold tracking-[0.18em] text-[#8a654b] uppercase">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#f1e5d8] text-base text-[#5d3b2b]">☕</span>
              Daily Special
            </p>
            <button
              type="button"
              className="rounded-full border border-[#d7c1a5] bg-[#f6efe8] px-3 py-1.5 text-[11px] font-semibold text-[#5b3d31]"
            >
              Order now
            </button>
          </div>

          <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#8a4d3f] via-[#5b352d] to-[#2a1a16] p-4 shadow-[0_18px_38px_rgba(74,47,26,0.22)]">
            <div className="absolute -right-6 top-3 h-28 w-28 rounded-full bg-[#f3d7a6]/20 blur-2xl" />
            <div className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-[#f9ebd8]/10 blur-2xl" />

            <div className="relative flex items-center justify-between gap-3">
              <div className="min-w-0 flex-1">
                <p className="mb-2 text-[10px] font-semibold tracking-[0.22em] text-[#f7d8ac] uppercase">
                  Brewed with passion
                </p>
                <h2 className="text-[1.55rem] font-black leading-[1.05] tracking-[-0.05em] text-white">
                  served with love.
                </h2>
                <Link
                  to="/menu"
                  className="mt-3 inline-flex items-center rounded-full bg-[#f7f0ea] px-4 py-2 text-[11px] font-bold text-[#4d352c] transition hover:scale-[1.02]"
                >
                  Order now →
                </Link>
              </div>

              <Link
                to="/menu"
                className="relative flex h-[6.6rem] w-[6.6rem] shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-white/20 bg-[#f3e0c3] shadow-[0_18px_40px_rgba(20,12,8,0.32)]"
                aria-label="Open menu"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.9),transparent_30%)]" />
                <div className="relative h-full w-full">
                  {products[0] && (
                    <img
                      src={products[0].image}
                      alt={products[0].name}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
              </Link>
            </div>
          </div>
        </section>

        <div className="mb-5 animate-fade-in-up stagger-3">
          <SearchBar value={search} onChange={setSearch} placeholder="Search coffee..." />
        </div>

        <section className="mb-5 animate-fade-in-up stagger-4">
          <CategoryPills
            categories={CATEGORIES}
            active={activeCategory}
            onSelect={setActiveCategory}
          />
        </section>

        <section className="mb-6">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#45372e]">
              {CATEGORIES.find((c) => c.id === activeCategory)?.label}
            </h2>
            <Link
              to="/menu"
              className="text-sm font-semibold text-[#8a6a4b] transition hover:text-[#6d4731] active:scale-95"
            >
              See all →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3.5">
            {filteredProducts.slice(0, 4).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <p className="py-8 text-center text-sm text-[#8a6a4b]">No products found</p>
          )}
        </section>

        <section className="mb-4">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-lg font-bold text-[#45372e]">
              <Sparkles size={18} className="text-[#d8a35d]" />
              Popular Treats
            </h2>
            <Link
              to="/menu"
              className="text-sm font-semibold text-[#8a6a4b] transition hover:text-[#6d4731] active:scale-95"
            >
              View menu →
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {popularProducts.slice(0, 3).map((product, i) => (
              <ProductCard key={product.id} product={product} variant="horizontal" index={i} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
