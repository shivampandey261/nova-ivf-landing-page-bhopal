import React from 'react';

const TrustBar = () => {
  return (
    <section className="bg-white py-8 border-b border-gray-100">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">Recognized & Trusted By</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Replacing actual logos with textual representations for now, 
              in a real scenario these would be SVG or WebP images */}
          <div className="text-xl font-bold font-serif text-gray-800">The Times of India</div>
          <div className="text-xl font-bold font-serif text-gray-800">Hindustan Times</div>
          <div className="text-xl font-bold font-sans tracking-tighter text-blue-800">Forbes</div>
          <div className="text-xl font-bold font-serif italic text-red-700">Healthline</div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
