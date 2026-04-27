import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const Footer = ({ city }) => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Col */}
          <div>
            <div className="font-bold text-2xl tracking-tight text-white mb-6">
              Nova IVF <span className="font-medium text-brand">Fertility</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Bringing joy to families in {city} with compassionate care and advanced reproductive technology. Your journey to parenthood is our priority.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand hover:text-white transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand hover:text-white transition-colors text-sm font-bold">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand hover:text-white transition-colors text-sm font-bold">
                YT
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-brand transition-colors">About Nova IVF</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Our Doctors</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">IVF Cost in {city}</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Blog</a></li>
            </ul>
          </div>
          
          {/* Contact Col */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand flex-shrink-0 mt-1" size={18} />
                <span className="text-sm">123 Health Avenue, Medical District, Near Main Square, {city}, 462001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand flex-shrink-0" size={18} />
                <a href="tel:+919876543210" className="text-sm hover:text-white transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand flex-shrink-0" size={18} />
                <a href="mailto:info.bhopal@novaivf.com" className="text-sm hover:text-white transition-colors">info.bhopal@novaivf.com</a>
              </li>
            </ul>
          </div>
          
          {/* Map Placeholder */}
          <div>
            <h4 className="text-white font-bold mb-6">Find Us</h4>
            <div className="w-full h-40 bg-gray-800 rounded-lg overflow-hidden relative">
              {/* This would be an actual Google Maps iframe in production */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm p-4 text-center">
                Interactive Google Map of {city} Clinic Location
              </div>
              <div className="absolute bottom-2 right-2 text-[10px] text-gray-600">Map Data ©2024</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Nova IVF Fertility. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
