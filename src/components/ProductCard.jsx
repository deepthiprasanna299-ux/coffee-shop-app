import { Heart, Sparkles, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Rating from './Rating'
import ProductImage from './ProductImage'
import AddToCartButton from './AddToCartButton'
import { useApp } from '../context/AppContext'
import { useToast } from '../context/ToastContext'

const STAGGER = ['stagger-1', 'stagger-2', 'stagger-3', 'stagger-4', 'stagger-5', 'stagger-6']

export default function ProductCard({ product, variant = 'default', index = 0 }) {
  const navigate = useNavigate()
  const { addToCart } = useApp()
  const { showToast } = useToast()

  const handleAddToCart = () => {
    addToCart(product)
    showToast(`${product.name} added to cart!`, 'success')
  }

  const goToProduct = () => navigate(`/product/${product.id}`)

  const staggerClass = STAGGER[Math.min(index, 5)]

  if (variant === 'horizontal') {
    return (
      <article
        className={`card-3d group relative flex gap-3.5 rounded-[24px] border border-[#eadfce] bg-[#f9f2ea] p-3 shadow-[0_10px_28px_rgba(121,94,71,0.08)] animate-fade-in-up ${staggerClass}`}
      >
        <button
          type="button"
          onClick={goToProduct}
          className="flex flex-1 gap-3.5 text-left"
          aria-label={`View ${product.name}`}
        >
          <div className="relative shrink-0">
            <div className="h-24 w-24 overflow-hidden rounded-[20px] ring-2 ring-[#e6d8c7] transition group-hover:ring-[#caa97d]">
              <ProductImage
                src={product.image}
                srcHd={product.imageHd}
                alt={product.name}
                wrapperClassName="h-full w-full"
              />
            </div>
            {product.popular && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 shadow-md">
                <Sparkles size={10} className="text-white" />
              </span>
            )}
          </div>
          <div className="flex flex-1 flex-col justify-between py-0.5">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-semibold text-[#4b392f]">{product.name}</h3>
                {product.tag && (
                  <span className="rounded-full bg-[#f0e5d5] px-2 py-0.5 text-[10px] font-medium text-[#7d5b45]">
                    {product.tag}
                  </span>
                )}
              </div>
              <Rating value={product.rating} />
            </div>
            <span className="text-lg font-bold text-[#6d4731]">${product.price.toFixed(2)}</span>
          </div>
        </button>
        <div className="flex items-end pb-0.5">
          <AddToCartButton onAdd={handleAddToCart} label={product.name} size="sm" />
        </div>
      </article>
    )
  }

  return (
    <article
      className={`card-3d group relative overflow-hidden rounded-[26px] border border-[#eadfce] bg-[#f8f2ea] p-2 shadow-[0_10px_25px_rgba(121,94,71,0.08)] animate-fade-in-up ${staggerClass}`}
    >
      <div className="relative">
        <button
          type="button"
          onClick={goToProduct}
          className="block w-full overflow-hidden transition duration-500 group-hover:scale-[1.02]"
          aria-label={`View ${product.name}`}
        >
          <div className="relative h-44 overflow-hidden rounded-[22px]">
            <ProductImage
              src={product.image}
              srcHd={product.imageHd}
              alt={product.name}
              wrapperClassName="h-full w-full"
            />
          </div>
        </button>

        <button
          type="button"
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-white/80 text-[#6d4731] shadow-sm backdrop-blur-sm transition hover:scale-105"
          aria-label={`Save ${product.name}`}
        >
          <Heart size={16} strokeWidth={2.2} fill="none" />
        </button>
      </div>

      <div className="px-2 pb-2 pt-3">
        <div className="mb-2 flex items-center gap-1 text-[11px] font-medium text-[#9d7440]">
          <Star size={12} className="fill-[#f7c66d] text-[#f7c66d]" />
          <span>{product.rating.toFixed(1)}</span>
          <span className="text-[#9a8b7a]">• {product.tag || 'Desserts'}</span>
        </div>

        <button
          type="button"
          onClick={goToProduct}
          className="block w-full text-left"
          aria-label={`View ${product.name} details`}
        >
          <h3 className="text-[1.05rem] font-bold text-[#4a382d] transition group-hover:text-[#6d4731]">
            {product.name}
          </h3>
        </button>

        <div className="mt-3 flex items-center justify-between gap-2">
          <p className="text-[1.05rem] font-bold text-[#734d30]">${product.price.toFixed(2)}</p>
          <AddToCartButton onAdd={handleAddToCart} label={product.name} size="sm" />
        </div>
      </div>
    </article>
  )
}
