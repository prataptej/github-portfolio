import React from 'react';
import { useInView } from 'react-intersection-observer';

const Contact = ({ contact }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-800 text-white py-16">
      <div ref={ref} className={`container mx-auto px-6 text-center max-w-4xl transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-12 tracking-tight">Get In Touch</h2>
        <p className="text-xl text-gray-300 mb-10 leading-relaxed">
          Have a question, a project idea, or just want to say hello? I'm always open to new connections!
          Feel free to reach out through any of the platforms below.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
          <a
            href={`mailto:${contact.email}`}
            className="flex flex-col items-center p-6 bg-gray-900 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 border border-gray-700 group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/gmail.svg" alt="Email" className="w-16 h-16 mb-3 filter grayscale group-hover:grayscale-0 transition-all duration-300" />
            <p className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300 tracking-wide">Email</p>
          </a>
          <a
            href={contact.github}
            className="flex flex-col items-center p-6 bg-gray-900 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 border border-gray-700 group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg" alt="GitHub" className="w-16 h-16 mb-3 filter grayscale group-hover:grayscale-0 transition-all duration-300" />
            <p className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300 tracking-wide">GitHub</p>
          </a>
          <a
            href={contact.linkedin}
            className="flex flex-col items-center p-6 bg-gray-900 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 border border-gray-700 group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/linkedin.svg" alt="LinkedIn" className="w-16 h-16 mb-3 filter grayscale group-hover:grayscale-0 transition-all duration-300" />
            <p className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300 tracking-wide">LinkedIn</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
