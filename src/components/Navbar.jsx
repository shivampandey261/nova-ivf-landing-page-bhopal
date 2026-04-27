import React from 'react';
import { Phone } from 'lucide-react';

const Navbar = ({ city }) => {
  return (
    <nav className="fixed w-full z-50 bg-brand text-white shadow-md">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center h-16 max-w-6xl">
        {/* Logo - left */}
        <div className="flex items-center gap-2">
          {/* Custom SVG approximating the Nova IVF wave logo */}
          <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
            <path d="M20 50 C 30 30, 50 30, 60 50 C 70 70, 90 70, 100 50" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none"/>
            <circle cx="20" cy="50" r="4" fill="currentColor"/>
          </svg>
          <div className="flex flex-col uppercase tracking-wider leading-none">
            <span className="font-bold text-xl">NOVA IVF</span>
            <span className="text-[10px] tracking-[0.2em] opacity-90 mt-1">FERTILITY</span>
          </div>
        </div>
        
        {/* CTA - right */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col text-right mr-2">
            <span className="text-xs text-white/80 font-medium">Top IVF Center in {city}</span>
            <span className="text-sm font-bold">Call Us Now</span>
          </div>
          <a href="tel:+919876543210" className="bg-white text-brand px-5 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-gray-100 transition-colors shadow-sm">
            <Phone size={18} />
            <span className="hidden sm:inline">+91 98765 43210</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
