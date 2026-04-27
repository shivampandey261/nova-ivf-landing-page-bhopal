import React from 'react';
import { Phone } from 'lucide-react';

const Navbar = ({ city }) => {
  return (
    <nav className="fixed w-full z-50 bg-brand text-white shadow-md">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center h-16 max-w-6xl">
        {/* Logo - left */}
        <div className="flex items-center gap-2">
          <img src="/nova-ivf-logo.png" alt="Nova IVF Fertility" className="h-10 object-contain" />
        </div>
        
        {/* CTA - right */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col text-right mr-2">
            <span className="text-xs text-white/80 font-medium">Top IVF Center in {city}</span>
            <span className="text-sm font-bold">Call Us Now</span>
          </div>
          <a href="tel:08044474588" className="bg-white text-brand px-6 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            <Phone size={18} />
            <span className="hidden sm:inline tracking-wide">08044474588</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
