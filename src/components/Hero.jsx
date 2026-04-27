import React, { useState, useEffect } from 'react';
import { ShieldCheck, Clock, Heart, Calendar } from 'lucide-react';

const Hero = ({ city, stage }) => {
  const [fomoNumber, setFomoNumber] = useState(47);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  useEffect(() => {
    const today = new Date().getDate();
    setFomoNumber(Math.max(12, today * 2 + 3));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const getSubheadline = () => {
    if (stage === 'retry') {
      return "Every journey is unique. If you've faced setbacks before, our advanced protocols and compassionate team are here to offer renewed hope and personalized care.";
    }
    return "Parenthood is a beautiful journey. Let our empathetic team of experts guide you with personalized care, advanced technology, and unwavering support.";
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gray-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl animate-fade-in relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:w-3/5 text-gray-900 mt-8 md:mt-0">
            <div className="inline-flex items-center gap-2 bg-brand/10 text-brand px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-brand/20">
              <Heart size={16} />
              <span>Bringing Joy to {city} Families</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
              {city}'s Most Trusted IVF Specialists — <br className="hidden md:block" />
              <span className="text-brand">1,200+ Babies Born</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              {getSubheadline()}
            </p>
            
            <div className="flex items-center gap-3 text-sm font-medium text-brand bg-white w-fit px-4 py-3 rounded-xl border border-gray-100 shadow-sm mb-8">
              <Clock size={18} className="animate-pulse" />
              <span>{fomoNumber} couples from {city} started their IVF journey this month. Only 3 consultation slots left this week.</span>
            </div>
            
            <div className="hidden lg:flex items-center gap-6 mt-12">
              <div className="flex items-center gap-2 text-gray-700 font-medium text-sm">
                <ShieldCheck className="text-brand" size={20} />
                No Hidden Costs
              </div>
              <div className="flex items-center gap-2 text-gray-700 font-medium text-sm">
                <ShieldCheck className="text-brand" size={20} />
                High Success Rate
              </div>
              <div className="flex items-center gap-2 text-gray-700 font-medium text-sm">
                <ShieldCheck className="text-brand" size={20} />
                EMI Available
              </div>
            </div>
          </div>
          
          {/* Right Column - Form Card */}
          <div className="lg:w-2/5 w-full max-w-[450px]">
            <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 md:p-8 border border-gray-100">
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Book Free Consultation</h3>
                <p className="text-gray-500 text-sm">Take the first step towards parenthood today.</p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Request Received!</h4>
                  <p className="text-gray-600">Our {city} care coordinator will call you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-4 py-2.5 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 font-medium">
                        +91
                      </span>
                      <input 
                        type="tel" 
                        id="phone" 
                        required 
                        pattern="[0-9]{10}"
                        className="w-full px-4 py-2.5 rounded-r-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                        placeholder="98765 43210"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Preferred Time to Call</label>
                    <div className="relative">
                      <select 
                        id="time" 
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all appearance-none bg-white"
                      >
                        <option>Morning (9 AM - 12 PM)</option>
                        <option>Afternoon (12 PM - 4 PM)</option>
                        <option>Evening (4 PM - 7 PM)</option>
                      </select>
                      <Calendar size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full mt-2 bg-brand hover:bg-brand-dark text-white font-bold py-3.5 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Book My Consultation'}
                  </button>
                  <p className="text-[11px] text-center text-gray-500 mt-3">100% Confidentiality Guaranteed</p>
                </form>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
