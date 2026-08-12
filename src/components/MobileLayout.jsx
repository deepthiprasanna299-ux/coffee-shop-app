import { Outlet } from 'react-router-dom'
import BottomNav from './BottomNav'
import FloatingGlow from './FloatingGlow'

export default function MobileLayout() {
  return (
    <div className="relative mx-auto min-h-dvh max-w-md overflow-hidden bg-[#f3ecdf] shadow-[0_25px_80px_rgba(72,48,28,0.15)]">
      <FloatingGlow className="-left-20 top-40 h-56 w-56 opacity-40" color="coffee" />
      <FloatingGlow className="-right-16 bottom-60 h-44 w-44 opacity-30" color="amber" delay={2} />
      <main className="relative z-10 pb-24">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  )
}
