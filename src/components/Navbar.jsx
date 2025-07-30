import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
   return (
     <nav className="flex justify-between items-center py-6 px-7 max-md:px-3">

       <h1 className="text-2xl font-bold text-white pacifico max-md:text-xs">Chinmaya<span className="text-indigo-600 hover:underline">...</span></h1>

       <ul className="flex max-md:space-x-2 space-x-6 text-white text-sm montser max-md:text-xs">

         <li><Link to="/" className="hover:text-indigo-600 hover:underline hover:font-bold visited:text-indigo-400">Home</Link></li>
         <li><Link to="/about" className="hover:text-indigo-600 hover:underline hover:font-bold visited:text-indigo-400">About</Link></li>
         <li><Link to="/projects" className="hover:text-indigo-600 hover:underline hover:font-bold visited:text-indigo-400">Projects</Link></li>
         <li><Link to="/contact" className="hover:text-indigo-600 hover:underline hover:font-bold visited:text-indigo-400">Contact</Link></li>


       </ul>

     </nav>
   )
}

export default Navbar