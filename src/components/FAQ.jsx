import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = ({ city }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: `What is the success rate of IVF at the ${city} center?`,
      answer: `Our ${city} center maintains an impressive success rate of over 68%, making us one of the highest-rated clinics in the region. Success rates vary based on individual factors like age and medical history, which our doctors will discuss during your consultation.`
    },
    {
      question: "Is the IVF procedure painful?",
      answer: "The IVF process involves mostly painless injections and medications. The egg retrieval is performed under mild anesthesia, so you won't feel any pain. Some women experience mild cramping afterwards, similar to a menstrual period."
    },
    {
      question: "How much does IVF cost, and are there hidden charges?",
      answer: "We believe in 100% transparency. During your initial consultation, we provide a comprehensive cost breakdown. There are no hidden charges. We also offer flexible EMI options to ease the financial burden."
    },
    {
      question: "How many clinic visits are required during a cycle?",
      answer: "Typically, a complete cycle requires 5 to 7 clinic visits over a span of 3 to 4 weeks. These visits include ultrasound monitoring, blood tests, egg retrieval, and embryo transfer."
    },
    {
      question: "Can I choose the gender of my baby?",
      answer: "No. Gender determination is strictly prohibited by law in India (PCPNDT Act). We focus solely on ensuring a healthy pregnancy and a healthy baby."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Clear answers to help you make an informed decision.</p>
        </div>

        <div className="space-y-4 animate-on-scroll">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-xl transition-colors duration-300 ${openIndex === index ? 'border-brand bg-brand/5' : 'border-gray-200 bg-white hover:border-gray-300'}`}
            >
              <button 
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-brand' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-brand flex-shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
