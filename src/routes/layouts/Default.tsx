import Header from '@/components/Header'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className="min-h-screen w-full bg-red-200">
      <main className="mx-auto max-w-[1024px] w-full px-4 bg-orange-200">
        <Header />
        <Outlet />
      </main>
    </div>
  )
}
