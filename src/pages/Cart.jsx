import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2, ShoppingBag, CheckCircle } from 'lucide-react'
import ProductImage from '../components/ProductImage'
import { useApp } from '../context/AppContext'
import { useToast } from '../context/ToastContext'

const STAGGER = ['stagger-1', 'stagger-2', 'stagger-3', 'stagger-4', 'stagger-5', 'stagger-6']

export default function Cart() {
  const {
    cart,
    subtotal,
    deliveryCharge,
    serviceCharge,
    total,
    updateQuantity,
    removeFromCart,
    checkout,
  } = useApp()
  const { showToast } = useToast()

  const [orderPlaced, setOrderPlaced] = useState(false)

  const handleCheckout = () => {
    const order = checkout()
    if (order) {
      setOrderPlaced(true)
      showToast('Order placed successfully!', 'success', 4000)
    }
  }

  const handleRemove = (item) => {
    removeFromCart(item.cartId)
    showToast(`${item.name} removed from cart`, 'info')
  }

  if (orderPlaced) {
    return (
      <div className="flex min-h-[70dvh] flex-col items-center justify-center px-5 text-center animate-scale-in">
        <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-green-100 glow-coffee animate-float-slow">
          <CheckCircle size={44} className="text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-coffee-900">Order Placed!</h2>
        <p className="mt-2 max-w-xs text-sm text-coffee-500">
          Your order is being prepared. Enjoy your coffee!
        </p>
        <Link
          to="/"
          className="btn-glow mt-8 rounded-2xl bg-gradient-to-r from-coffee-600 to-coffee-700 px-10 py-3.5 font-semibold text-white shadow-lg"
        >
          Back to Home
        </Link>
      </div>
    )
  }

  if (cart.length === 0) {
    return (
      <div className="flex min-h-[70dvh] flex-col items-center justify-center px-5 text-center animate-fade-in-up">
        <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-coffee-100 animate-float-slow">
          <ShoppingBag size={40} className="text-coffee-400" />
        </div>
        <h2 className="text-2xl font-bold text-coffee-900">Your cart is empty</h2>
        <p className="mt-2 text-sm text-coffee-500">
          Add some delicious coffee to get started
        </p>
        <Link
          to="/menu"
          className="btn-glow mt-8 rounded-2xl bg-gradient-to-r from-coffee-600 to-coffee-700 px-10 py-3.5 font-semibold text-white shadow-lg"
        >
          Browse Menu
        </Link>
      </div>
    )
  }

  return (
    <div className="px-5 pt-6">
      <header className="mb-6 animate-fade-in-up">
        <h1 className="text-2xl font-bold text-coffee-900">My Cart</h1>
        <p className="mt-1 text-sm text-coffee-500">
          {cart.length} item{cart.length !== 1 ? 's' : ''} in your cart
        </p>
      </header>

      <div className="mb-6 flex flex-col gap-3">
        {cart.map((item, i) => (
          <div
            key={item.cartId}
            className={`card-3d flex items-center gap-3.5 rounded-2xl glass p-3.5 glow-coffee animate-fade-in-up ${STAGGER[Math.min(i, 5)]}`}
          >
            <div className="h-18 w-18 shrink-0 overflow-hidden rounded-2xl ring-2 ring-coffee-200/50">
              <ProductImage
                src={item.image}
                alt={item.name}
                wrapperClassName="h-16 w-16"
              />
            </div>
            <div className="flex flex-1 flex-col">
              <h3 className="font-semibold text-coffee-800">{item.name}</h3>
              <p className="text-xs text-coffee-400">Size: {item.size}</p>
              <p className="font-bold text-coffee-600">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <button
                type="button"
                onClick={() => handleRemove(item)}
                className="rounded-lg p-1 text-coffee-300 transition hover:bg-red-50 hover:text-red-500"
                aria-label={`Remove ${item.name}`}
              >
                <Trash2 size={16} />
              </button>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => updateQuantity(item.cartId, -1)}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-coffee-200 text-coffee-600 transition hover:bg-coffee-50"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-4 text-center text-sm font-bold">{item.quantity}</span>
                <button
                  type="button"
                  onClick={() => updateQuantity(item.cartId, 1)}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-coffee-600 text-white transition hover:bg-coffee-700"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl glass p-5 glow-coffee animate-fade-in-up stagger-4">
        <h2 className="mb-4 font-bold text-coffee-800">Order Summary</h2>
        <div className="flex flex-col gap-2.5 text-sm">
          <div className="flex justify-between text-coffee-500">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-coffee-500">
            <span>Delivery Charge</span>
            <span>${deliveryCharge.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-coffee-500">
            <span>Service Charge</span>
            <span>${serviceCharge.toFixed(2)}</span>
          </div>
          <div className="mt-2 flex justify-between border-t border-coffee-200/60 pt-3 text-lg font-bold text-coffee-800">
            <span>Total</span>
            <span className="text-coffee-600">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={handleCheckout}
        className="btn-glow mt-5 w-full rounded-2xl bg-gradient-to-r from-coffee-600 to-coffee-700 py-4 text-base font-bold text-white shadow-lg transition active:scale-[0.98] animate-fade-in-up stagger-5"
      >
        Checkout — ${total.toFixed(2)}
      </button>
    </div>
  )
}
