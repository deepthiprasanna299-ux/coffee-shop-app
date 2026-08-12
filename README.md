# Brew & Bean — Coffee Shop Mobile App

A modern, responsive coffee ordering mobile application built with **React**, **Vite**, and **Tailwind CSS**.

## Features

- **Home Screen** — Branding, search, greeting, categories, popular products, and product cards
- **Product Details** — Large image, description, size selection, quantity, favorites, and add to cart
- **Menu Screen** — Category tabs (Coffee, Tea, Cold Drinks, Desserts), search/filter, product grid
- **Cart Screen** — Quantity controls, remove items, subtotal, charges, and checkout
- **Profile Screen** — User info, order history, favorites, settings, and logout

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- React Router DOM
- Lucide React Icons

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── BottomNav.jsx
│   ├── CategoryPills.jsx
│   ├── MobileLayout.jsx
│   ├── ProductCard.jsx
│   ├── QuantitySelector.jsx
│   ├── Rating.jsx
│   ├── SearchBar.jsx
│   └── SizeSelector.jsx
├── context/          # Global state (cart, favorites, orders)
│   └── AppContext.jsx
├── data/             # Product catalog
│   └── products.js
├── pages/            # Screen components
│   ├── Home.jsx
│   ├── ProductDetails.jsx
│   ├── Menu.jsx
│   ├── Cart.jsx
│   └── Profile.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Deployment (Netlify)

1. Push the repository to GitHub
2. Connect the repo on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. The `public/_redirects` file handles SPA routing

## Author

Deepthi Prasanna C
