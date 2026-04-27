import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = ({ city }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after 8 seconds as per requirements
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 8000);

    // Or show on scroll
    const handleScroll = () => {
      if (window.scrollY > 300 && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  const message = encodeURIComponent(`Hi, I'd like to book a consultation in ${city}`);
  // Using the requested phone number (formatting for India +91, stripping leading 0 from STD code if necessary, or just using as is if it's a direct WA number)
  const waUrl = `https://wa.me/918044474588?text=${message}`;

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 animate-fade-up">
      <div className="bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-100 relative max-w-[200px] text-sm font-medium text-gray-700 animate-fade-in hidden md:block">
        Need help? Chat with our experts!
        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b border-r border-gray-100 transform rotate-45"></div>
      </div>
      
      <a 
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default WhatsAppButton;
