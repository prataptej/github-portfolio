import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Header = ({ name }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full z-20 bg-gray-900/80 backdrop-blur-sm shadow-lg transition-colors duration-300">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-400 tracking-wide">
          {name}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="hero" smooth={true} duration={700} className="text-gray-300 hover:text-blue-400 cursor-pointer text-lg font-medium transition-colors duration-300 tracking-wide">Home</Link>
          <Link to="about" smooth={true} duration={700} className="text-gray-300 hover:text-blue-400 cursor-pointer text-lg font-medium transition-colors duration-300 tracking-wide">About</Link>
          <Link to="experience" smooth={true} duration={700} className="text-gray-300 hover:text-blue-400 cursor-pointer text-lg font-medium transition-colors duration-300 tracking-wide">Experience</Link>
          <Link to="projects" smooth={true} duration={700} className="text-gray-300 hover:text-blue-400 cursor-pointer text-lg font-medium transition-colors duration-300 tracking-wide">Projects</Link>
          <Link to="skills" smooth={true} duration={700} className="text-gray-300 hover:text-blue-400 cursor-pointer text-lg font-medium transition-colors duration-300 tracking-wide">Skills</Link>
          <Link to="contact" smooth={true} duration={700} className="text-gray-300 hover:text-blue-400 cursor-pointer text-lg font-medium transition-colors duration-300 tracking-wide">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300 focus:outline-none focus:text-blue-400">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-900/95 z-30 flex flex-col items-center justify-center space-y-8">
          <button onClick={toggleMenu} className="absolute top-6 right-6 text-gray-300 focus:outline-none focus:text-blue-400">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <Link to="hero" smooth={true} duration={700} onClick={closeMenu} className="text-gray-300 hover:text-blue-400 cursor-pointer text-3xl font-medium transition-colors duration-300 tracking-wide">Home</Link>
          <Link to="about" smooth={true} duration={700} onClick={closeMenu} className="text-gray-300 hover:text-blue-400 cursor-pointer text-3xl font-medium transition-colors duration-300 tracking-wide">About</Link>
          <Link to="experience" smooth={true} duration={700} onClick={closeMenu} className="text-gray-300 hover:text-blue-400 cursor-pointer text-3xl font-medium transition-colors duration-300 tracking-wide">Experience</Link>
          <Link to="projects" smooth={true} duration={700} onClick={closeMenu} className="text-gray-300 hover:text-blue-400 cursor-pointer text-3xl font-medium transition-colors duration-300 tracking-wide">Projects</Link>
          <Link to="skills" smooth={true} duration={700} onClick={closeMenu} className="text-gray-300 hover:text-blue-400 cursor-pointer text-3xl font-medium transition-colors duration-300 tracking-wide">Skills</Link>
          <Link to="contact" smooth={true} duration={700} onClick={closeMenu} className="text-gray-300 hover:text-blue-400 cursor-pointer text-3xl font-medium transition-colors duration-300 tracking-wide">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
