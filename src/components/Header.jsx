import React from 'react';
import { Link } from 'react-scroll';

const Header = ({ name }) => {
  return (
    <header className="fixed w-full z-20 bg-gray-900/80 backdrop-blur-sm shadow-lg transition-colors duration-300">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-400 tracking-wide">
          {name}
        </div>
        <div className="flex items-center space-x-6">
          <Link to="hero" smooth={true} duration={700} className="text-gray-300 hover:text-blue-400 cursor-pointer text-lg font-medium transition-colors duration-300 tracking-wide">Home</Link>
          <Link to="about" smooth={true} duration={700} className="text-gray-300 hover:text-blue-400 cursor-pointer text-lg font-medium transition-colors duration-300 tracking-wide">About</Link>
          <Link to="experience" smooth={true} duration={700} className="text-gray-300 hover:text-blue-400 cursor-pointer text-lg font-medium transition-colors duration-300 tracking-wide">Experience</Link>
          <Link to="projects" smooth={true} duration={700} className="text-gray-300 hover:text-blue-400 cursor-pointer text-lg font-medium transition-colors duration-300 tracking-wide">Projects</Link>
          <Link to="skills" smooth={true} duration={700} className="text-gray-300 hover:text-blue-400 cursor-pointer text-lg font-medium transition-colors duration-300 tracking-wide">Skills</Link>
          <Link to="contact" smooth={true} duration={700} className="text-gray-300 hover:text-blue-400 cursor-pointer text-lg font-medium transition-colors duration-300 tracking-wide">Contact</Link>
          {/* Optionally add a Resume link here */}
          {/* <a href="#" className="text-gray-300 hover:text-blue-400 cursor-pointer text-lg font-medium transition-colors duration-300">Resume</a> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
