import React from 'react';

const VideoSection = () => {
  const videoIds = ['XGE3bq0L_3Q', 'olcIebgb0sw', 'uTPix482Gis'];

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Educational Resources</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Learn more about the IVF process directly from our experts.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {videoIds.map((id, index) => (
            <div 
              key={id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden animate-on-scroll transform transition-transform hover:-translate-y-2"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Aspect ratio for YouTube Shorts (9:16) */}
              <div className="relative w-full pb-[177.77%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`}
                  title={`IVF Educational Video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
