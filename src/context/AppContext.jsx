import { createContext, useContext, useState, useCallback } from 'react'
import { calculatePrice } from '../data/products'

const AppContext = createContext(null)

const DELIVERY_CHARGE = 2.5
const SERVICE_CHARGE = 1.0

export function AppProvider({ children }) {
  const [cart, setCart] = useState([])
  const [favorites, setFavorites] = useState([1, 4, 8])
  const [orderHistory, setOrderHistory] = useState([
    {
      id: 'ORD-001',
      date: '2026-08-10',
      items: ['Cappuccino', 'Chocolate Croissant'],
      total: 12.48,
      status: 'Delivered',
    },
    {
      id: 'ORD-002',
      date: '2026-08-05',
      items: ['Chai Latte', 'Mocha'],
      total: 15.28,
      status: 'Delivered',
    },
  ])

  const addToCart = useCallback((product, size = 'M', quantity = 1) => {
    const price = calculatePrice(product.price, size)
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.productId === product.id && item.size === size
      )
      if (existing) {
        return prev.map((item) =>
          item.productId === product.id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [
        ...prev,
        {
          cartId: `${product.id}-${size}-${Date.now()}`,
          productId: product.id,
          name: product.name,
          image: product.image,
          basePrice: product.price,
          price,
          size,
          quantity,
        },
      ]
    })
  }, [])

  const updateQuantity = useCallback((cartId, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.cartId === cartId
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }, [])

  const removeFromCart = useCallback((cartId) => {
    setCart((prev) => prev.filter((item) => item.cartId !== cartId))
  }, [])

  const clearCart = useCallback(() => setCart([]), [])

  const toggleFavorite = useCallback((productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    )
  }, [])

  const isFavorite = useCallback(
    (productId) => favorites.includes(productId),
    [favorites]
  )

  const checkout = useCallback(() => {
    if (cart.length === 0) return
    const currentSubtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const order = {
      id: `ORD-${String(orderHistory.length + 1).padStart(3, '0')}`,
      date: new Date().toISOString().split('T')[0],
      items: cart.map((item) => item.name),
      total: currentSubtotal + DELIVERY_CHARGE + SERVICE_CHARGE,
      status: 'Processing',
    }
    setOrderHistory((prev) => [order, ...prev])
    setCart([])
    return order
  }, [cart, orderHistory.length])

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const cartTotal = subtotal
  const total = subtotal + DELIVERY_CHARGE + SERVICE_CHARGE
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <AppContext.Provider
      value={{
        cart,
        cartCount,
        subtotal,
        cartTotal,
        total,
        deliveryCharge: DELIVERY_CHARGE,
        serviceCharge: SERVICE_CHARGE,
        favorites,
        orderHistory,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        toggleFavorite,
        isFavorite,
        checkout,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
