import { NavLink } from "react-router";

export default function NavBar() {
  return (

    <nav className='w-full border-s-[#1e2d3d] border-b-1 flex navbar-animated'>
      <NavLink to="/" className="p-6 w-fit">Opeyemi Raphael-Ogbe</NavLink>
      <div className="flex justify-between ml-auto w-[80%] ">
        
        <NavLink to="/about" className={({isActive}) => `border-gray-800 border-l-2 p-6 ${isActive ? "border-b-[var(--nav-text-hover-color)] border-b-4": "text-gray-700"} hover:text-[var(--nav-text-hover-color)]`}>_about</NavLink>
        
        <NavLink to="/projects" className={({isActive}) => `border-gray-800 border-l-2 border-r-2 p-6 ${isActive ? "border-b-[var(--nav-text-hover-color)] border-b-4" : "text-gray-700"} hover:text-[var(--nav-text-hover-color)]`}>_projects</NavLink>
        
        <NavLink to="/contact" className={({isActive}) => `ml-auto flex border-l-gray-800 border-l-2 p-6 ${isActive ? "border-b-[var(--nav-text-hover-color)] border-b-4": "text-gray-700"} hover:text-[var(--nav-text-hover-color)]`}>_contact_me</NavLink>
      </div>
    </nav>
  )
}
