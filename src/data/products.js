import { getProductImages } from '../utils/images'

export const CATEGORIES = [
  { id: 'coffee', label: 'Coffee', icon: '☕' },
  { id: 'tea', label: 'Tea', icon: '🍵' },
  { id: 'cold-drinks', label: 'Cold Drinks', icon: '🧊' },
  { id: 'desserts', label: 'Desserts', icon: '🍰' },
]

export const SIZES = [
  { id: 'S', label: 'Small', multiplier: 0.85 },
  { id: 'M', label: 'Medium', multiplier: 1 },
  { id: 'L', label: 'Large', multiplier: 1.2 },
]

export const products = [
  {
    id: 1,
    name: 'Cappuccino',
    category: 'coffee',
    price: 4.99,
    rating: 4.8,
    reviews: 234,
    ...getProductImages('cappuccino'),
    description:
      'A classic Italian coffee drink made with equal parts espresso, steamed milk, and milk foam. Rich, creamy, and perfectly balanced.',
    popular: true,
    tag: 'Best Seller',
  },
  {
    id: 2,
    name: 'Espresso',
    category: 'coffee',
    price: 3.49,
    rating: 4.9,
    reviews: 412,
    ...getProductImages('espresso'),
    description:
      'A concentrated shot of finely ground coffee beans brewed under high pressure. Bold, intense, and full-bodied.',
    popular: true,
    tag: 'Classic',
  },
  {
    id: 3,
    name: 'Latte',
    category: 'coffee',
    price: 5.49,
    rating: 4.7,
    reviews: 189,
    ...getProductImages('latte'),
    description:
      'Smooth espresso combined with steamed milk and a light layer of foam. Mild and creamy with a gentle coffee flavor.',
    popular: true,
    tag: 'Creamy',
  },
  {
    id: 4,
    name: 'Mocha',
    category: 'coffee',
    price: 5.99,
    rating: 4.6,
    reviews: 156,
    ...getProductImages('mocha'),
    description:
      'A delightful blend of espresso, steamed milk, and rich chocolate. Sweet, indulgent, and comforting.',
    popular: true,
    tag: 'Chocolate',
  },
  {
    id: 5,
    name: 'Americano',
    category: 'coffee',
    price: 3.99,
    rating: 4.5,
    reviews: 98,
    ...getProductImages('americano'),
    description:
      'Espresso diluted with hot water for a smooth, clean coffee taste. Light body with a rich aroma.',
    popular: false,
    tag: 'Bold',
  },
  {
    id: 6,
    name: 'Flat White',
    category: 'coffee',
    price: 5.29,
    rating: 4.8,
    reviews: 167,
    ...getProductImages('flatWhite'),
    description:
      'Velvety microfoam poured over a double shot of espresso. Silky texture with a strong coffee punch.',
    popular: false,
    tag: 'Smooth',
  },
  {
    id: 7,
    name: 'Green Tea',
    category: 'tea',
    price: 3.49,
    rating: 4.4,
    reviews: 87,
    ...getProductImages('greenTea'),
    description:
      'Premium Japanese green tea leaves steeped to perfection. Light, refreshing, and packed with antioxidants.',
    popular: false,
    tag: 'Organic',
  },
  {
    id: 8,
    name: 'Chai Latte',
    category: 'tea',
    price: 4.79,
    rating: 4.7,
    reviews: 203,
    ...getProductImages('chaiLatte'),
    description:
      'Aromatic spiced tea blended with steamed milk. Warm notes of cinnamon, cardamom, and ginger.',
    popular: true,
    tag: 'Spiced',
  },
  {
    id: 9,
    name: 'Earl Grey',
    category: 'tea',
    price: 3.29,
    rating: 4.3,
    reviews: 64,
    ...getProductImages('earlGrey'),
    description:
      'Classic black tea infused with bergamot oil. Elegant, citrusy, and perfectly balanced.',
    popular: false,
    tag: 'Elegant',
  },
  {
    id: 10,
    name: 'Iced Coffee',
    category: 'cold-drinks',
    price: 4.49,
    rating: 4.6,
    reviews: 178,
    ...getProductImages('icedCoffee'),
    description:
      'Cold-brewed coffee served over ice. Smooth, refreshing, and less acidic than hot coffee.',
    popular: true,
    tag: 'Refreshing',
  },
  {
    id: 11,
    name: 'Iced Latte',
    category: 'cold-drinks',
    price: 5.29,
    rating: 4.5,
    reviews: 134,
    ...getProductImages('icedLatte'),
    description:
      'Espresso poured over cold milk and ice. Creamy, chilled, and energizing.',
    popular: false,
    tag: 'Iced',
  },
  {
    id: 12,
    name: 'Frappe',
    category: 'cold-drinks',
    price: 5.99,
    rating: 4.7,
    reviews: 221,
    ...getProductImages('frappe'),
    description:
      'Blended iced coffee with milk and ice. Thick, frothy, and perfect for hot days.',
    popular: true,
    tag: 'Blended',
  },
  {
    id: 13,
    name: 'Chocolate Croissant',
    category: 'desserts',
    price: 3.99,
    rating: 4.8,
    reviews: 312,
    ...getProductImages('chocolateCroissant'),
    description:
      'Buttery, flaky croissant filled with rich dark chocolate. Baked fresh every morning.',
    popular: true,
    tag: 'Fresh',
  },
  {
    id: 14,
    name: 'Cheesecake',
    category: 'desserts',
    price: 6.49,
    rating: 4.9,
    reviews: 267,
    ...getProductImages('cheesecake'),
    description:
      'Creamy New York-style cheesecake with a graham cracker crust. Rich and velvety smooth.',
    popular: false,
    tag: 'Premium',
  },
  {
    id: 15,
    name: 'Tiramisu',
    category: 'desserts',
    price: 6.99,
    rating: 4.9,
    reviews: 198,
    ...getProductImages('tiramisu'),
    description:
      'Classic Italian dessert with espresso-soaked ladyfingers and mascarpone cream. Light and indulgent.',
    popular: true,
    tag: 'Italian',
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === Number(id))
}

export function getProductsByCategory(category) {
  return products.filter((p) => p.category === category)
}

export function getPopularProducts() {
  return products.filter((p) => p.popular)
}

export function getSizeMultiplier(sizeId) {
  return SIZES.find((s) => s.id === sizeId)?.multiplier ?? 1
}

export function calculatePrice(basePrice, sizeId) {
  return Math.round(basePrice * getSizeMultiplier(sizeId) * 100) / 100
}
