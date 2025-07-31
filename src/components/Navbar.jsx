import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
   return (
     <nav className="flex justify-between items-center py-6 px-7 max-md:px-3">

       <h1 className="text-2xl font-bold text-white pacifico max-md:text-xs cursor-pointer items-center justify-center">Chinmaya<span className="text-indigo-600">...</span></h1>

       <ul className="flex max-md:space-x-2 space-x-6 text-white text-sm montser max-md:text-xs items-center justify-center">

         <li><Link to="/" className="hover:text-indigo-600 hover:font-bold ">Home</Link></li>
         <li><Link to="/about" className="hover:text-indigo-600 hover:font-bold ">About</Link></li>
         <li><Link to="/projects" className="hover:text-indigo-600 hover:font-bold ">Projects</Link></li>
         <li><Link to="/contact" className="hover:text-indigo-600 hover:font-bold ">Contact</Link></li>


       </ul>

     </nav>
   )
}

export default Navbar