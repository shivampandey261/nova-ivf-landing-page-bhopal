import React, { useState } from 'react';
import { ShieldCheck, Calendar, Clock } from 'lucide-react';

const CTA = ({ city }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate Zoho Form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

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

          <div className="lg:w-1/2 w-full animate-on-scroll">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 border-t-4 border-brand">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Book Free Consultation</h3>
                <p className="text-gray-500 text-sm">Fill out the form below and our team will contact you shortly.</p>
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
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-4 py-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 font-medium">
                        +91
                      </span>
                      <input 
                        type="tel" 
                        id="phone" 
                        required 
                        pattern="[0-9]{10}"
                        className="w-full px-4 py-3 rounded-r-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                        placeholder="98765 43210"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input 
                      type="text" 
                      id="city" 
                      value={city} 
                      readOnly
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-600 outline-none cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Preferred Time to Call</label>
                    <div className="relative">
                      <select 
                        id="time" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all appearance-none bg-white"
                      >
                        <option>Morning (9 AM - 12 PM)</option>
                        <option>Afternoon (12 PM - 4 PM)</option>
                        <option>Evening (4 PM - 7 PM)</option>
                      </select>
                      <Clock size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full bg-brand hover:bg-brand-light text-white font-bold py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Book My Free Consultation →'}
                  </button>
                  <p className="text-xs text-center text-gray-400 mt-4">By submitting this form, you agree to our privacy policy.</p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
