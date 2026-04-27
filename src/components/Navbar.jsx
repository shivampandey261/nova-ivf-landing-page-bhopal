import React, { useState, useEffect } from 'react';
import { PhoneCall } from 'lucide-react';

const Navbar = ({ city }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 md:bg-transparent md:backdrop-blur-sm py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center max-w-6xl">
        <div className="flex items-center gap-2">
          {/* Logo placeholder - using text to represent Nova IVF */}
          <div className="font-bold text-2xl tracking-tight text-brand">
            Nova IVF <span className="text-gray-700 font-medium text-lg">Fertility</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <span className={`font-medium ${isScrolled ? 'text-gray-600' : 'text-gray-800'}`}>
            Top IVF Center in {city}
          </span>
          <a href="#book-consultation" className="bg-brand text-white px-6 py-2.5 rounded-full font-medium hover:bg-brand-dark transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Book Consultation
          </a>
        </div>
        
        <div className="md:hidden flex items-center">
          <a href="tel:+919876543210" className="bg-brand text-white p-2.5 rounded-full shadow-md">
            <PhoneCall size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
