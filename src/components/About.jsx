import React from 'react';
import { useInView } from 'react-intersection-observer';

const About = ({ title, description, profilePicture }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gray-800 text-white py-16">
      <div ref={ref} className={`container mx-auto px-6 max-w-4xl transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-12 text-center">{title}</h2>
        <div className="bg-gray-900 rounded-xl shadow-lg p-8 md:p-12 border border-gray-700">
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <div className="md:w-1/3 mb-8 md:mb-0 flex-shrink-0">
              <img
                src={profilePicture} // Use profilePicture from props
                alt="Profile"
                className="rounded-full w-56 h-56 object-cover mx-auto border-4 border-blue-500 shadow-xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="md:w-2/3 text-lg text-gray-300 leading-relaxed text-left">
              {description.map((paragraph, index) => (
                <p key={index} className="mb-4 text-xl">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
