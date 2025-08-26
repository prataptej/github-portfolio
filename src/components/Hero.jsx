import React from 'react';
import { Link } from 'react-scroll';

const Hero = ({ name, tagline }) => {
  return (
    <section id="hero" className="relative h-screen flex flex-col justify-center items-center bg-gray-900 text-white overflow-hidden">
      {/* Background elements for subtle animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center p-6 bg-gray-800/70 rounded-lg shadow-2xl backdrop-blur-sm">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in-down">Hello, I'm {name}</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-down animation-delay-500">
          {tagline}
        </p>
        <Link
          to="about"
          smooth={true}
          duration={700}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer animate-fade-in-down animation-delay-1000"
        >
          Discover More
        </Link>
      </div>
    </section>
  );
};

export default Hero;
