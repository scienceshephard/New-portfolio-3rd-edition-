import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'

export const UserLayout = () => {
  return (
    <div className='flex flex-col min-h-screen text-gray-600 font-bold  bg-[var(--bg-color)]'>
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  )
}
