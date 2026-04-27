import React from 'react';
import { ShieldCheck, Calendar, Clock } from 'lucide-react';

const CTA = ({ city }) => {

  return (
    <section id="book-consultation" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background styling */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=2070&auto=format&fit=crop" 
          alt="Clinic environment" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-brand/90"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="lg:w-1/2 text-white animate-on-scroll">
            <div className="inline-flex items-center gap-2 bg-brand/30 border border-brand/50 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Calendar size={16} />
              <span>Limited Consultations Available</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Take the First Step Towards <span className="text-pink-300">Parenthood</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Book your free initial consultation with our {city} experts today. We'll listen to your story, review your medical history, and outline a path forward.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <ShieldCheck className="text-brand flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-200">100% Confidentiality Guaranteed</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="text-brand flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-200">No Hidden Costs</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="text-brand flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-200">Personalized Care Plan</span>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/2 w-full lg:max-w-[450px] mx-auto lg:mx-0 animate-on-scroll">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-brand">
              <iframe 
                aria-label="Book A Free Consultation!" 
                frameBorder="0" 
                style={{ height: '500px', width: '99%', border: 'none' }} 
                src="https://forms.zohopublic.in/shivampandeyji261gm1/form/BookAFreeConsultation/formperma/AxoijC2Q9C03O6fI2wHOiM7Wf-PIC7BvFAgSyFMKRN4"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
