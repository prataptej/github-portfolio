import React from 'react';

const Footer = ({ name }) => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg mb-2 tracking-wide">&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
        <p className="text-sm tracking-wide">Designed and Built with React, Vite, and Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
