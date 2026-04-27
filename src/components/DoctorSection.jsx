import React from 'react';
import { Award, Users, Star, CheckCircle } from 'lucide-react';

const DoctorSection = ({ doctorSlug, city }) => {
  // Mock data - in a real app, this would be fetched or passed from a CMS based on doctorSlug
  const doctorData = {
    name: "Dr. Anjali Sharma",
    experience: "15+ Years",
    patients: "3,500+",
    specialization: "Senior IVF Specialist & Endoscopist",
    awards: ["Best IVF Specialist MP 2022", "Excellence in Reproductive Medicine"],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden relative">
      {/* Decorative background blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Your Expert in {city}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Compassionate care backed by decades of clinical excellence.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl overflow-hidden shadow-xl hover:-translate-y-2 transition-transform duration-500 animate-on-scroll">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 relative">
                <img 
                  src={doctorData.image} 
                  alt={doctorData.name} 
                  className="w-full h-full object-cover min-h-[300px]"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur rounded-lg p-3 shadow-lg flex items-center justify-center gap-2 text-brand font-bold">
                  <Star className="fill-brand text-brand" size={18} />
                  <span>{doctorData.experience} Experience</span>
                </div>
              </div>
              
              <div className="p-8 md:w-3/5 bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{doctorData.name}</h3>
                <p className="text-brand font-medium mb-6">{doctorData.specialization}</p>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Dedicated to helping families grow, {doctorData.name} combines advanced medical protocols with a deeply empathetic approach to ensure you feel supported at every step of your IVF journey in {city}.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex flex-col">
                    <span className="flex items-center gap-2 text-gray-900 font-bold mb-1">
                      <Users size={18} className="text-brand" /> {doctorData.patients}
                    </span>
                    <span className="text-sm text-gray-500">Happy Families</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="flex items-center gap-2 text-gray-900 font-bold mb-1">
                      <CheckCircle size={18} className="text-brand" /> 68%
                    </span>
                    <span className="text-sm text-gray-500">Success Rate</span>
                  </div>
                </div>

                <div className="space-y-3 border-t border-gray-100 pt-6">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Awards & Recognition</p>
                  {doctorData.awards.map((award, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Award size={16} className="text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{award}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
