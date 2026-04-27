import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, Heart } from 'lucide-react';

const Hero = ({ city, stage }) => {
  const [fomoNumber, setFomoNumber] = useState(47);
  
  // Fake a slightly dynamic FOMO number based on day of month for local realism
  useEffect(() => {
    const today = new Date().getDate();
    setFomoNumber(Math.max(12, today * 2 + 3));
  }, []);

  const getSubheadline = () => {
    if (stage === 'retry') {
      return "Every journey is unique. If you've faced setbacks before, our advanced protocols and compassionate team are here to offer renewed hope and personalized care.";
    }
    return "Parenthood is a beautiful journey. Let our empathetic team of experts guide you with personalized care, advanced technology, and unwavering support.";
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-32 overflow-hidden bg-gray-900 min-h-[90vh] md:min-h-0 flex items-center">
      {/* Background Image - WebP format, preloaded if possible */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1543868641-78eb4b745408?q=80&w=2070&auto=format&fit=crop" 
          alt="Warm Indian couple holding hands" 
          className="w-full h-full object-cover object-center opacity-80"
          fetchPriority="high"
        />
        {/* Custom Gradient Overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(72,0,22,0.85) 0%, rgba(72,0,22,0.6) 50%, transparent 100%)' }}></div>
        {/* Mobile Gradient Overlay (bottom to top for readability) */}
        <div className="absolute inset-0 md:hidden bg-gradient-to-t from-[#480016] via-[rgba(72,0,22,0.8)] to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-6xl animate-fade-in">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/30">
            <Heart size={16} className="text-pink-300" />
            <span>Bringing Joy to {city} Families</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white drop-shadow-md">
            {city}'s Most Trusted IVF Specialists — <br className="hidden md:block" />
            <span className="text-pink-200">1,200+ Babies Born</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed max-w-xl drop-shadow">
            {getSubheadline()}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href="#book-consultation" className="bg-brand hover:bg-brand-light text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(160,40,80,0.4)] hover:shadow-[0_0_30px_rgba(160,40,80,0.6)] hover:-translate-y-1">
              Book Free Consultation <ArrowRight size={20} />
            </a>
            <a href="tel:+919876543210" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/40 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center transition-all">
              Talk to a Specialist
            </a>
          </div>
          
          <div className="flex items-center gap-3 text-sm font-medium text-pink-100 bg-black/30 w-fit px-4 py-2.5 rounded-lg border border-white/10">
            <Clock size={18} className="text-pink-300 animate-pulse" />
            <span>{fomoNumber} couples from {city} started their IVF journey this month. Only 3 consultation slots left this week.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
