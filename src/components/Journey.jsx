import React from 'react';
import { ClipboardList, Stethoscope, TestTube, Microscope, Baby, Activity } from 'lucide-react';

const steps = [
  {
    title: "Initial Consultation",
    description: "Meet your doctor to discuss your medical history and emotional needs.",
    icon: <Stethoscope size={28} />
  },
  {
    title: "Comprehensive Testing",
    description: "Advanced diagnostics to identify the root cause and personalize your treatment.",
    icon: <ClipboardList size={28} />
  },
  {
    title: "Ovarian Stimulation",
    description: "Hormone medications are carefully monitored to encourage egg development.",
    icon: <Activity size={28} />
  },
  {
    title: "Egg Retrieval",
    description: "A minor, painless procedure under mild sedation to collect mature eggs.",
    icon: <TestTube size={28} />
  },
  {
    title: "Fertilization (ICSI/IVF)",
    description: "Eggs and sperm are combined in our state-of-the-art embryology lab.",
    icon: <Microscope size={28} />
  },
  {
    title: "Embryo Transfer",
    description: "The healthiest embryo is gently placed into the uterus, beginning your wait.",
    icon: <Baby size={28} />
  }
];

const Journey = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Journey to Parenthood</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">A transparent, step-by-step process designed to minimize stress and maximize success.</p>
        </div>

        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center animate-on-scroll relative"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Mobile Connecting Line */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden absolute top-[45px] left-1/2 w-0.5 h-16 bg-gray-100 translate-y-full z-[-1]"></div>
                )}
                
                <div className="w-20 h-20 bg-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center text-brand mb-6 relative group transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(160,40,80,0.2)]">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand text-white rounded-full flex items-center justify-center text-sm font-bold border-2 border-white shadow-sm">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed px-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
