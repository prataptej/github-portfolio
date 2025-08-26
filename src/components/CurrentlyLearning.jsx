import React from 'react';
import { useInView } from 'react-intersection-observer';

const CurrentlyLearning = ({ learningItems }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="currently-learning" className="min-h-screen bg-gray-800 text-white py-16 flex items-center justify-center">
      <div ref={ref} className={`container mx-auto px-6 text-center max-w-6xl transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-12 tracking-tight">What I'm Currently Learning</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center border border-gray-700 transform hover:scale-105 transition-transform duration-300"
            >
              {item.icon && (
                <img src={item.icon} alt={item.name} className="w-16 h-16 mb-4 filter grayscale hover:grayscale-0 transition-all duration-300" />
              )}
              <h3 className="text-2xl font-semibold text-white tracking-wide">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentlyLearning;
