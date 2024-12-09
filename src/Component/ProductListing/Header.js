import React from 'react'
import { Link } from 'react-router-dom' // Use 'react-router-dom' for routing
import logo from '../../assets/Images/WhatsApp Image 2024-11-26 at 08.10.55.jpeg'

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-full h-16 object-cover rounded-full" />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8">
          <Link to="/" className="text-lg font-semibold text-gray-700 hover:text-blue-500">Products</Link>
          <Link to="/kbis" className="text-lg font-semibold text-gray-700 hover:text-blue-500">KBIS</Link>
          <Link to="/inspiration" className="text-lg font-semibold text-gray-700 hover:text-blue-500">Inspiration</Link>
          <Link to="/dealers" className="text-lg font-semibold text-gray-700 hover:text-blue-500">Dealers</Link>
          <Link to="/q12" className="text-lg font-semibold text-gray-700 hover:text-blue-500">Q12</Link>
          <Link to="/blog" className="text-lg font-semibold text-gray-700 hover:text-blue-500">Blog</Link>
          <Link to="/about" className="text-lg font-semibold text-gray-700 hover:text-blue-500">About</Link>
          <Link to="/login" className="text-lg font-semibold text-blue-500 hover:text-blue-700">Login</Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

