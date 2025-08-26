import React from 'react';

const Achievements = ({ isOpen, onClose, achievements }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-40 p-4">
      <div className="bg-gray-900 text-white font-mono w-full max-w-4xl h-3/4 rounded-lg shadow-2xl flex flex-col border border-gray-700">
        <div className="flex justify-between items-center bg-gray-800 p-3 rounded-t-lg border-b border-gray-700">
          <span className="text-sm">My Achievements</span>
          <button onClick={onClose} className="text-gray-400 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="flex-1 p-4 overflow-y-auto text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center text-center border border-gray-600">
                <span className="text-5xl mb-3">{achievement.icon}</span>
                <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
