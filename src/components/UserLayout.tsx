import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'

export const UserLayout = () => {
  return (
    <div className='flex flex-col h-screen text-gray-600 font-bold font-mono bg-[var(--bg-color)] transition-bg delay-75 duration-200'>
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  )
}
