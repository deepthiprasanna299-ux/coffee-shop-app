import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import { ToastProvider } from './context/ToastContext'
import MobileLayout from './components/MobileLayout'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Menu from './pages/Menu'
import Cart from './pages/Cart'
import Profile from './pages/Profile'

export default function App() {
  return (
    <AppProvider>
      <ToastProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<MobileLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ToastProvider>
    </AppProvider>
  )
}
