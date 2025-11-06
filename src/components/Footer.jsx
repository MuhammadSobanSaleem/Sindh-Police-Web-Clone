import React from 'react';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import sindhPoliceLogo from '../assets/sp_white_logo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1a0a0a] text-white">
      {/* Red Diagonal Stripes */}
      <div className="h-4 bg-gradient-to-r from-red-600 via-red-600 to-red-600 relative overflow-hidden">
        <div className="absolute inset-0 flex">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-16 h-full bg-red-600"
              style={{
                transform: 'skewX(-20deg)',
                marginRight: '8px',
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Section - Logo */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src={sindhPoliceLogo} 
              alt="Sindh Police Logo" 
              className="w-32 h-32 mb-4 object-contain"
            />
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold tracking-wider mb-2">
                SINDH
              </h2>
              <h2 className="text-4xl font-bold tracking-wider mb-3">
                POLICE
              </h2>
              <div className="flex items-center gap-3">
                <div className="h-px bg-white w-8"></div>
                <p className="text-sm tracking-[0.3em] font-light">PROUD TO SERVE</p>
                <div className="h-px bg-white w-8"></div>
              </div>
            </div>
          </div>

          {/* Middle Section - Links & Social Media */}
          <div className="flex flex-col items-center">
            {/* Top Social Icons */}
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-black text-xl">📱</span>
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-black text-xl">📱</span>
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-black text-xl">📱</span>
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-black text-xl">📱</span>
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-black text-xl">📱</span>
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-blue-600 text-xl">♪</span>
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-black text-xl">📷</span>
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-black text-xl">𝕏</span>
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-blue-600 text-xl">f</span>
              </a>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
              <a href="#" className="hover:text-blue-400 transition-colors">Go to Main Website</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#" className="hover:text-blue-400 transition-colors">About Us</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Gallery</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a>
            </div>

            {/* Additional Links */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-blue-400">
              <a href="#" className="hover:text-blue-300 transition-colors">Sindh Police Welfare</a>
              <a href="#" className="hover:text-blue-300 transition-colors">Driving License Branch</a>
              <a href="#" className="hover:text-blue-300 transition-colors">Online Character Certificate</a>
            </div>

            {/* Bottom Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-blue-600 text-xl">f</span>
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-blue-600 text-xl">f</span>
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-blue-600 text-xl">f</span>
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-black text-xl">𝕏</span>
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-black text-xl">📷</span>
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-blue-600 text-xl">in</span>
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-red-600 text-xl">▶</span>
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-black text-xl">♪</span>
              </a>
            </div>

            {/* WhatsApp Icon */}
            <div className="mt-4">
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-green-600 text-2xl">💬</span>
              </a>
            </div>
          </div>

          {/* Right Section - Contact Info */}
          <div className="flex flex-col gap-6 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
              <p>DIGP Traffic Office, Aga Khan III Road, Karachi, Police Headquarter Garden, South Karachi</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <p>0219-9216355</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 flex-shrink-0" />
              <p>trafficpolicekhi@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#1e3a8a] py-4 px-8 relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <p>© 2024 Sindh Police - All Rights Reserved.</p>
          <p>Powered By: Software Section, I.T Directorate Sindh, Sindh Police.</p>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute right-8 -top-6 bg-red-600 hover:bg-red-700 text-white p-3 rounded-md shadow-lg transition-colors duration-300"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;