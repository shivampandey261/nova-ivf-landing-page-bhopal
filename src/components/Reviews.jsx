import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Ravi Verma",
    rating: 5,
    text: "The doctors and staff are incredibly supportive. They guided us perfectly through the IVF process, and we are now proud parents. Highly recommend!",
    time: "2 weeks ago"
  },
  {
    name: "Meera Patel",
    rating: 5,
    text: "Very transparent with the pricing and the procedures. Dr. Anjali was always available to answer our late-night queries. Best clinic.",
    time: "1 month ago"
  },
  {
    name: "Karan Singh",
    rating: 5,
    text: "The facility is world-class and extremely hygienic. The embryology lab must be fantastic because we had success on our first cycle.",
    time: "3 months ago"
  }
];

const Reviews = () => {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 animate-on-scroll">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Patient Reviews</h2>
            <p className="text-lg text-gray-600">Don't just take our word for it. See what our patients have to say on Google.</p>
          </div>
          <div className="mt-6 md:mt-0 flex items-center gap-4 bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900 leading-none">4.9</span>
              <div className="flex gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <div className="h-10 w-px bg-gray-200"></div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 leading-none">Google</span>
              <span className="text-sm text-gray-500">Based on 450+ reviews</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-on-scroll hover:shadow-md transition-shadow duration-300"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-bold text-gray-900">{review.name}</span>
                <span className="text-sm text-gray-500">{review.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
