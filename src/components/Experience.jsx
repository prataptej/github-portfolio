import React from 'react';
import { useInView } from 'react-intersection-observer';

const Experience = ({ experiences }) => {
  return (
    <section id="experience" className="min-h-screen bg-gray-800 text-white py-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-12 text-center">Work Experience</h2>
        <div className="relative">
          {/* Vertical line for timeline effect */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700 hidden md:block"></div>

          {experiences.map((exp, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            return (
              <div key={index} ref={ref} className={`mb-12 md:mb-16 flex flex-col items-center w-full transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Experience Card */}
                <div className={`w-full md:w-1/2 p-6 rounded-lg shadow-lg bg-gray-900 border border-gray-700 transform hover:scale-105 transition-transform duration-300 ${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                  <h3 className="text-2xl font-semibold text-blue-300 mb-2 text-center">{exp.title}</h3>
                  <p className="text-xl font-medium text-white mb-1 text-center">{exp.company}</p>
                  <p className="text-gray-400 mb-4 text-center">{exp.duration}</p>
                  <ul className="text-gray-300 space-y-2 text-center">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Circle on timeline */}
                <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 border-4 border-gray-800 absolute left-1/2 transform -translate-x-1/2 z-10">
                  <span className="text-white text-lg font-bold"></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
