import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
   return (
     <nav className="flex justify-between items-center py-6 px-10">

       <h1 className="text-2xl font-bold text-white pacifico">Chinmaya<span className="text-cyan-500">...</span></h1>

       <ul className="flex space-x-6 text-white text-sm montser">

         <li><Link to="/" className="hover:text-cyan-300 hover:font-bold">Home</Link></li>
         <li><Link to="/about" className="hover:text-cyan-300 hover:font-bold">About</Link></li>
         <li><Link to="/projects" className="hover:text-cyan-300 hover:font-bold">Projects</Link></li>
         <li><Link to="/contact" className="hover:text-cyan-300 hover:font-bold">Contact</Link></li>
         

       </ul>

     </nav>
   )
}

export default Navbar