import { NavLink } from "react-router";

export default function NavBar() {
  return (

    <nav className='w-full border-s-[#1e2d3d] border-b-1 flex navbar-animated '>
      <NavLink to="/" className={({isActive}) =>`p-6 w-fit ${isActive ? "border-b-[var(--nav-text-hover-color)] border-b-4": "text-gray-700"} hover:text-[var(--nav-text-hover-color)]`} >Opeyemi Raphael-Ogbe</NavLink>
      <div className="flex justify-around w-[80%] ">
        
        <NavLink to="/about" className={({isActive}) => `border-gray-800 border-x-2 p-6 ${isActive ? "border-b-[var(--nav-text-hover-color)] border-b-4": "text-gray-700"} hover:text-[var(--nav-text-hover-color)]`}>_about</NavLink>
        
        <NavLink to="/projects" className={({isActive}) => `border-gray-800 border-l-2 border-r-2 p-6 ${isActive ? "border-b-[var(--nav-text-hover-color)] border-b-4" : "text-gray-700"} hover:text-[var(--nav-text-hover-color)]`}>_projects</NavLink>
        
      </div>
    </nav>
  )
}
