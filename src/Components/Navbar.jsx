import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      {/* Top Black Bar */}
      <div className="bg-black text-yellow-400 text-xs uppercase px-6 py-2 font-bold flex justify-end space-x-4">
        <div className="flex items-center text-md space-x-4">
          <Link to="#">Search</Link>
          <span className="h-4 w-px bg-white"></span>
          <Link to="/login">Login</Link>
          <span className="h-4 w-px bg-white"></span>
          <Link to="/register">Register</Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white  border-b border-gray-200 shadow-sm">
        <div className="px-6  py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center   ">
            <img src="/1.png" alt="Logo" className="w-48 h-20  object-cover" />
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex space-x-6 text-sm uppercase font-bold">
            <Link to="/sale" className="hover:text-yellow-500 hover:bg-black py-3 px-2">Flash Sale</Link>
            <Link to="/new-arrivals" className="hover:text-yellow-500 hover:bg-black py-3 px-2">New Arrivals</Link>
            <Link to="/products" className="hover:text-yellow-500 hover:bg-black py-3 px-2">Products</Link>
            <Link to="/top-selling" className="hover:text-yellow-500 hover:bg-black py-3 px-2">Top Selling</Link>
            <Link to="/audio" className="hover:text-yellow-500 hover:bg-black py-3 px-2">Audio</Link>
            <Link to="/smart-phones" className="hover:text-yellow-500 hover:bg-black py-3 px-2">Smart Phones</Link>
            <Link to="/charging-and-power" className="hover:text-yellow-500 hover:bg-black py-3 px-2">Charging and Power</Link>
            <Link to="/projects" className="hover:text-yellow-500 hover:bg-black py-3 px-2">Projects</Link>
          </div>

          {/* Hamburger Icon */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden px-6 pb-4 space-y-2 text-sm font-bold uppercase">
            <Link to="/sale" className="block text-black hover:text-yellow-500 hover:bg-black py-3 px-2">Flash Sale</Link>
            <Link to="/new-arrivals" className="block text-black hover:text-yellow-500 hover:bg-black py-3 px-2">New Arrivals</Link>
            <Link to="/products" className="block text-black hover:text-yellow-500 hover:bg-black py-3 px-2">Products</Link>
            <Link to="/top-selling" className="block text-black hover:text-yellow-500 hover:bg-black py-3 px-2">Top Selling</Link>
            <Link to="/audio" className="block text-black hover:text-yellow-500 hover:bg-black py-3 px-2">Audio</Link>
            <Link to="/smart-phones" className="block text-black hover:text-yellow-500 hover:bg-black py-3 px-2">Smart Phones</Link>
            <Link to="/charging-and-power" className="block text-black hover:text-yellow-500 hover:bg-black py-3 px-2">Charging and Power</Link>
            <Link to="/projects" className="block text-black hover:text-yellow-500 hover:bg-black py-3 px-2">Projects</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
