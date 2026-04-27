import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "After 3 years of trying, we finally found hope at Nova IVF. The doctors were incredibly patient and didn't treat us like just another case. Today, we are holding our baby girl.",
    author: "Priya & Rahul",
    time: "2 months ago",
    initials: "PR",
    color: "bg-pink-100 text-pink-700"
  },
  {
    id: 2,
    text: "The transparency in the process and the emotional support we received made all the difference. We knew exactly what was happening at each step.",
    author: "Neha S.",
    time: "5 months ago",
    initials: "NS",
    color: "bg-purple-100 text-purple-700"
  },
  {
    id: 3,
    text: "Having failed IVF cycles elsewhere, we were hesitant. But the advanced protocols here worked on our first try. Words cannot express our gratitude.",
    author: "Amit & Sneha",
    time: "1 year ago",
    initials: "AS",
    color: "bg-blue-100 text-blue-700"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((current) => (current + 1) % testimonials.length);
  const prev = () => setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stories of Hope</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Real experiences from families who trusted us with their journey to parenthood.</p>
        </div>

        <div className="relative animate-on-scroll">
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4 md:px-12">
                  <div className="bg-gray-50 rounded-2xl p-8 md:p-12 relative shadow-sm border border-gray-100">
                    <Quote className="absolute top-6 left-6 text-gray-200 w-16 h-16 rotate-180 -z-0" />
                    
                    <div className="relative z-10">
                      <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-8 italic">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${testimonial.color}`}>
                          {testimonial.initials}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                          <span className="text-sm text-gray-500">{testimonial.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-brand transition-colors z-10 focus:outline-none">
            <ChevronLeft size={24} />
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-brand transition-colors z-10 focus:outline-none">
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === activeIndex ? 'bg-brand w-8' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
