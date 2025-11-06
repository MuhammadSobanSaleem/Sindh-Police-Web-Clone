import React, { useState } from 'react'
import logo from '../assets/sp_logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-black/70 backdrop-blur-md fixed w-screen top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Main Row: Logo + Links */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <img src={logo} alt="Sindh Police Logo" className="w-20 h-20 object-contain" />
            <div className="flex flex-col">
              <h1 className="text-white text-4xl font-bold tracking-wider uppercase">SINDH POLICE</h1>
              <p className="text-gray-300 text-sm tracking-[0.6rem] uppercase">Proud to Serve</p>
            </div>
          </div>

          <button className="md:hidden flex flex-col gap-1.5" onClick={()=>setIsMenuOpen(v=>!v)} aria-label="Toggle menu">
            <span className={`w-8 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-8 h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-8 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              <li><a href="#home" className="text-white">Home</a></li>
              <li><a href="#about" className="text-white">About Us</a></li>
              <li><a href="#welfare" className="text-white">Welfare</a></li>
              <li><a href="#traffic" className="text-white">Traffic Sections</a></li>
              <li><a href="#transfer" className="text-white">Transfer Orders</a></li>
              <li><a href="#jobs" className="text-white">Jobs</a></li>
              <li><a href="#contact" className="text-white">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        <ul className={`md:hidden flex flex-col mt-3 overflow-hidden transition-all ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <li><a href="#home" className="text-white px-4 py-3 block">Home</a></li>
          <li><a href="#about" className="text-white px-4 py-3 block">About Us</a></li>
          <li><a href="#welfare" className="text-white px-4 py-3 block">Welfare</a></li>
          <li><a href="#traffic" className="text-white px-4 py-3 block">Traffic Sections</a></li>
          <li><a href="#transfer" className="text-white px-4 py-3 block">Transfer Orders</a></li>
          <li><a href="#jobs" className="text-white px-4 py-3 block">Jobs</a></li>
          <li><a href="#contact" className="text-white px-4 py-3 block">Contact Us</a></li>
        </ul>

        {/* Social Icons Row - Inside Nav */}
        <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-gray-700">
          <a href="#instagram" aria-label="Instagram">
            <i className="fa-brands fa-instagram text-white text-2xl hover:text-blue-400 transition-colors"></i>
          </a>
          <a href="#twitter" aria-label="Twitter">
            <i className="fa-brands fa-x-twitter text-white text-2xl hover:text-blue-400 transition-colors"></i>
          </a>
          <a href="#facebook" aria-label="Facebook">
            <i className="fa-brands fa-facebook text-white text-2xl hover:text-blue-400 transition-colors"></i>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar