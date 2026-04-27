import React, { useState, useEffect } from 'react';
import { ShieldCheck, Clock, Heart, Calendar } from 'lucide-react';

const Hero = ({ city, stage }) => {
  const [fomoNumber, setFomoNumber] = useState(47);
  
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
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-[#DEDDDC] min-h-screen flex items-center">
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
          <div className="lg:w-2/5 w-full lg:max-w-[450px] mx-auto lg:mx-0">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <iframe 
                aria-label="Book A Free Consultation!" 
                frameBorder="0" 
                style={{ height: '500px', width: '99%', border: 'none' }} 
                src="https://forms.zohopublic.in/shivampandeyji261gm1/form/BookAFreeConsultation/formperma/AxoijC2Q9C03O6fI2wHOiM7Wf-PIC7BvFAgSyFMKRN4"
                title="Zoho Booking Form"
              ></iframe>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
