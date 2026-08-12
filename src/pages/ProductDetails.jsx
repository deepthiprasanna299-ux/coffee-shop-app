import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, Heart, ShoppingBag, Sparkles, Check } from 'lucide-react'
import Rating from '../components/Rating'
import SizeSelector from '../components/SizeSelector'
import QuantitySelector from '../components/QuantitySelector'
import ProductImage from '../components/ProductImage'
import FloatingGlow from '../components/FloatingGlow'
import { getProductById, calculatePrice } from '../data/products'
import { useApp } from '../context/AppContext'
import { useToast } from '../context/ToastContext'

export default function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)
  const { addToCart, toggleFavorite, isFavorite } = useApp()
  const { showToast } = useToast()

  const [size, setSize] = useState('M')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="flex min-h-[60dvh] flex-col items-center justify-center gap-4 px-5">
        <p className="text-coffee-500">Product not found</p>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="rounded-xl bg-coffee-600 px-6 py-2 text-white transition active:scale-95"
        >
          Go Back
        </button>
      </div>
    )
  }

  const price = calculatePrice(product.price, size)
  const totalPrice = price * quantity
  const favorited = isFavorite(product.id)

  const handleToggleFavorite = () => {
    toggleFavorite(product.id)
    showToast(
      favorited ? `Removed ${product.name} from favorites` : `Added ${product.name} to favorites!`,
      favorited ? 'info' : 'success'
    )
  }

  const handleAddToCart = () => {
    addToCart(product, size, quantity)
    setAdded(true)
    showToast(
      `${quantity}× ${product.name} (${size}) added to cart!`,
      'success',
      3500
    )
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="relative pb-6">
      <FloatingGlow className="left-1/2 top-20 h-64 w-64 -translate-x-1/2" color="coffee" />

      <div className="relative overflow-hidden bg-gradient-to-b from-coffee-800 via-coffee-700 to-coffee-50 pb-8 pt-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,122,0.2)_0%,transparent_70%)]" />

        <div className="relative z-10 flex items-center justify-between px-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl glass-dark text-white transition hover:scale-105 active:scale-95"
            aria-label="Go back"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            type="button"
            onClick={handleToggleFavorite}
            className={`flex h-11 w-11 items-center justify-center rounded-2xl transition hover:scale-105 active:scale-95 ${
              favorited ? 'bg-red-500/25 glow-ring' : 'glass-dark text-white'
            }`}
            aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart
              size={20}
              className={`transition ${favorited ? 'fill-red-400 text-red-400' : 'text-white'}`}
            />
          </button>
        </div>

        <div className="hero-3d-stage relative z-10 mx-auto mt-2 flex justify-center">
          <div className="hero-3d-product animate-hero-float">
            <div className="relative h-64 w-64 overflow-hidden rounded-full ring-4 ring-white/25 glow-coffee-strong">
              <ProductImage
                src={product.image}
                srcHd={product.imageHd}
                alt={product.name}
                variant="hero"
                wrapperClassName="h-full w-full"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-2 left-1/2 h-8 w-40 -translate-x-1/2 rounded-full bg-coffee-900/30 blur-xl" />
          </div>
        </div>

        {product.tag && (
          <div className="relative z-10 mt-4 flex justify-center">
            <span className="flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
              <Sparkles size={12} className="text-amber-300" />
              {product.tag}
            </span>
          </div>
        )}
      </div>

      <div className="relative -mt-6 rounded-t-[2rem] bg-coffee-50 px-5 pt-7 animate-fade-in-up">
        <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-coffee-200" />

        <div className="mb-2 flex items-start justify-between gap-3">
          <h1 className="text-2xl font-bold text-coffee-900">{product.name}</h1>
          <Rating value={product.rating} reviews={product.reviews} size="lg" />
        </div>

        <p className="mb-6 text-sm leading-relaxed text-coffee-500">{product.description}</p>

        <section className="mb-6">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-coffee-500">
            Choose Size
          </h2>
          <SizeSelector selected={size} onSelect={setSize} />
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-coffee-500">
            Quantity
          </h2>
          <QuantitySelector value={quantity} onChange={setQuantity} />
        </section>

        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-white px-4 py-3 glow-coffee">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-coffee-400">
              Total
            </p>
            <p className="text-2xl font-bold text-coffee-700 transition-all duration-300">
              ${totalPrice.toFixed(2)}
            </p>
          </div>
          <button
            type="button"
            onClick={handleAddToCart}
            disabled={added}
            className={`btn-glow flex flex-1 items-center justify-center gap-2 rounded-2xl py-4 text-base font-semibold text-white shadow-lg transition active:scale-[0.97] ${
              added
                ? 'bg-green-600'
                : 'bg-gradient-to-r from-coffee-600 to-coffee-700 hover:from-coffee-700 hover:to-coffee-800'
            }`}
          >
            {added ? <Check size={20} /> : <ShoppingBag size={20} />}
            {added ? 'Added!' : 'Add to Cart'}
          </button>
        </div>

        {added && (
          <Link
            to="/cart"
            className="mt-3 block text-center text-sm font-semibold text-coffee-600 transition hover:text-coffee-700 animate-fade-in-up"
          >
            View Cart →
          </Link>
        )}
      </div>
    </div>
  )
}
