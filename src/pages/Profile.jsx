import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronRight,
  Crown,
  Heart,
  LogOut,
  MapPin,
  Package,
  Settings,
  User,
  X,
} from 'lucide-react'
import ProductImage from '../components/ProductImage'
import { useApp } from '../context/AppContext'
import { useToast } from '../context/ToastContext'
import { products } from '../data/products'

const settingsItems = [
  {
    icon: MapPin,
    label: 'Delivery Address',
    detail: '123 Coffee St, NYC',
    message: 'Delivery address: 123 Coffee St, New York, NY 10001',
  },
  {
    icon: Settings,
    label: 'App Settings',
    detail: 'Notifications, theme',
    message: 'Settings saved! Notifications enabled.',
  },
]

const STAGGER = ['stagger-1', 'stagger-2', 'stagger-3', 'stagger-4', 'stagger-5', 'stagger-6']

export default function Profile() {
  const { favorites, orderHistory } = useApp()
  const { showToast } = useToast()
  const [loggedOut, setLoggedOut] = useState(false)
  const [activeSetting, setActiveSetting] = useState(null)

  const favoriteProducts = products.filter((p) => favorites.includes(p.id))

  const handleLogout = () => {
    setLoggedOut(true)
    showToast('You have been logged out successfully', 'info')
  }

  const handleLogin = () => {
    setLoggedOut(false)
    showToast('Welcome back, Deepthi!', 'success')
  }

  if (loggedOut) {
    return (
      <div className="flex min-h-[70dvh] flex-col items-center justify-center px-5 text-center animate-scale-in">
        <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-coffee-100 animate-float-slow">
          <LogOut size={36} className="text-coffee-500" />
        </div>
        <h2 className="text-2xl font-bold text-coffee-900">Logged Out</h2>
        <p className="mt-2 text-sm text-coffee-500">See you again soon!</p>
        <button
          type="button"
          onClick={handleLogin}
          className="btn-glow mt-8 rounded-2xl bg-gradient-to-r from-coffee-600 to-coffee-700 px-10 py-3.5 font-semibold text-white shadow-lg active:scale-95"
        >
          Log Back In
        </button>
      </div>
    )
  }

  return (
    <div className="px-5 pt-6">
      <div className="relative mb-6 overflow-hidden rounded-3xl bg-gradient-to-br from-coffee-700 via-coffee-600 to-coffee-800 p-5 text-white shadow-xl glow-coffee-strong animate-fade-in-up">
        <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
        <div className="relative flex items-center gap-4">
          <div className="relative">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-2xl font-bold ring-2 ring-white/30 backdrop-blur-sm">
              DP
            </div>
            <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-amber-400 text-coffee-900">
              <Crown size={12} />
            </span>
          </div>
          <div>
            <h1 className="text-xl font-bold">Deepthi Prasanna</h1>
            <p className="text-sm text-coffee-200">deepthi@email.com</p>
            <p className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-0.5 text-xs font-semibold backdrop-blur-sm">
              ☕ Gold Member
            </p>
          </div>
        </div>
      </div>

      <section className="mb-6 animate-fade-in-up stagger-2">
        <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-coffee-800">
          <Package size={20} className="text-coffee-500" />
          Order History
        </h2>
        <div className="flex flex-col gap-2.5">
          {orderHistory.map((order, i) => (
            <button
              key={order.id}
              type="button"
              onClick={() =>
                showToast(`Order ${order.id}: ${order.items.join(', ')}`, 'info', 3500)
              }
              className={`w-full rounded-2xl glass p-4 text-left glow-coffee transition hover:shadow-md active:scale-[0.99] animate-fade-in-up ${STAGGER[i] || 'stagger-3'}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-coffee-800">{order.id}</span>
                <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700">
                  {order.status}
                </span>
              </div>
              <p className="mt-1 text-xs text-coffee-400">{order.date}</p>
              <p className="mt-2 text-sm text-coffee-600">{order.items.join(', ')}</p>
              <p className="mt-1 text-base font-bold text-coffee-700">${order.total.toFixed(2)}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="mb-6 animate-fade-in-up stagger-3">
        <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-coffee-800">
          <Heart size={20} className="fill-red-400 text-red-400" />
          Favorite Items
        </h2>
        {favoriteProducts.length > 0 ? (
          <div className="flex gap-3 overflow-x-auto pb-2">
            {favoriteProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="card-3d flex w-32 shrink-0 flex-col items-center rounded-2xl glass p-3 glow-coffee transition active:scale-95"
              >
                <div className="h-20 w-20 overflow-hidden rounded-2xl ring-2 ring-coffee-200/50">
                  <ProductImage
                    src={product.image}
                    srcHd={product.imageHd}
                    alt={product.name}
                    wrapperClassName="h-full w-full"
                  />
                </div>
                <p className="mt-2 text-center text-xs font-bold text-coffee-800">
                  {product.name}
                </p>
                <p className="text-xs font-bold text-coffee-600">${product.price.toFixed(2)}</p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl glass p-6 text-center">
            <p className="text-sm text-coffee-500">No favorites yet</p>
            <Link
              to="/menu"
              className="mt-2 inline-block text-sm font-semibold text-coffee-600 hover:text-coffee-700"
            >
              Browse Menu →
            </Link>
          </div>
        )}
      </section>

      <section className="mb-6 animate-fade-in-up stagger-4">
        <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-coffee-800">
          <User size={20} className="text-coffee-500" />
          Settings
        </h2>
        <div className="flex flex-col gap-2">
          {settingsItems.map(({ icon: Icon, label, detail }) => (
            <button
              key={label}
              type="button"
              onClick={() => setActiveSetting(label)}
              className="card-3d flex w-full items-center justify-between rounded-2xl glass p-4 glow-coffee transition active:scale-[0.99]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-coffee-100 to-coffee-200">
                  <Icon size={18} className="text-coffee-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-coffee-800">{label}</p>
                  <p className="text-xs text-coffee-400">{detail}</p>
                </div>
              </div>
              <ChevronRight size={18} className="text-coffee-300" />
            </button>
          ))}
        </div>
      </section>

      <button
        type="button"
        onClick={handleLogout}
        className="mb-4 flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-red-200/80 bg-red-50/50 py-3.5 text-sm font-semibold text-red-500 transition hover:bg-red-50 active:scale-[0.98] animate-fade-in-up stagger-5"
      >
        <LogOut size={18} />
        Logout
      </button>

      {activeSetting && (
        <div
          className="fixed inset-0 z-[90] flex items-end justify-center bg-coffee-900/40 backdrop-blur-sm animate-fade-in-up"
          onClick={() => setActiveSetting(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-md rounded-t-3xl bg-white p-6 shadow-2xl animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-coffee-900">{activeSetting}</h3>
              <button
                type="button"
                onClick={() => setActiveSetting(null)}
                className="rounded-xl p-2 text-coffee-400 hover:bg-coffee-50"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            {activeSetting === 'Delivery Address' ? (
              <div className="space-y-3">
                <p className="text-sm text-coffee-600">
                  123 Coffee Street, Apt 4B<br />
                  New York, NY 10001<br />
                  United States
                </p>
                <button
                  type="button"
                  onClick={() => {
                    showToast('Address updated successfully!', 'success')
                    setActiveSetting(null)
                  }}
                  className="btn-glow w-full rounded-2xl bg-coffee-600 py-3 font-semibold text-white active:scale-95"
                >
                  Save Address
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {['Push Notifications', 'Email Updates', 'Dark Mode'].map((opt) => (
                  <label key={opt} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-coffee-700">{opt}</span>
                    <input
                      type="checkbox"
                      defaultChecked={opt !== 'Dark Mode'}
                      className="h-5 w-5 accent-coffee-600"
                    />
                  </label>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    showToast('Settings saved successfully!', 'success')
                    setActiveSetting(null)
                  }}
                  className="btn-glow w-full rounded-2xl bg-coffee-600 py-3 font-semibold text-white active:scale-95"
                >
                  Save Settings
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
