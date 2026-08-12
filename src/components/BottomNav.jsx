import { NavLink } from 'react-router-dom'
import { Home, UtensilsCrossed, ShoppingBag, User } from 'lucide-react'
import { useApp } from '../context/AppContext'

const navItems = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/menu', icon: UtensilsCrossed, label: 'Menu' },
  { to: '/cart', icon: ShoppingBag, label: 'Cart' },
  { to: '/profile', icon: User, label: 'Profile' },
]

export default function BottomNav() {
  const { cartCount } = useApp()

  return (
    <nav className="fixed bottom-0 left-1/2 z-50 w-full max-w-md -translate-x-1/2 px-4 pb-3 pt-1">
      <div className="flex items-center justify-around rounded-[24px] border border-[#eadfce] bg-[#f8f2ea] px-2 py-2 shadow-[0_12px_30px_rgba(109,79,57,0.08)]">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `relative flex flex-col items-center gap-0.5 rounded-xl px-4 py-2 text-[10px] font-semibold transition-all duration-300 ${
                isActive
                  ? 'bg-[#efe4d7] text-[#6d4731] shadow-sm scale-[1.02]'
                  : 'text-[#8a6a4b] hover:text-[#6d4731]'
              }`
            }
          >
            <Icon size={20} strokeWidth={2.1} />
            <span>{label}</span>
            {label === 'Cart' && cartCount > 0 && (
              <span className="absolute -right-0.5 top-0 flex h-4 min-w-4 animate-scale-in items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white ring-2 ring-white">
                {cartCount > 9 ? '9+' : cartCount}
              </span>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
