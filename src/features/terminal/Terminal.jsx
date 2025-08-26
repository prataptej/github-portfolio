import React, { useState, useEffect, useRef } from 'react';

const Terminal = ({ isOpen, onClose, portfolioData }) => {
  const [history, setHistory] = useState([]);
  const [command, setCommand] = useState('');
  const terminalRef = useRef(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (isOpen) {
      setHistory(['Type "help" for a list of commands.']);
      setCommand('');
    }
  }, [isOpen]);

  const handleCommand = (cmd) => {
    const output = [];
    const lowerCmd = cmd.toLowerCase().trim();

    switch (lowerCmd) {
      case 'help':
        output.push('Available commands:');
        output.push('- about: Learn more about me.');
        output.push('- experience: View my work experience.');
        output.push('- projects: See my projects.');
        output.push('- skills: Check out my skills.');
        output.push('- contact: Get in touch.');
        output.push('- clear: Clears the terminal screen.');
        output.push('- close: Closes the terminal.');
        break;
      case 'about':
        output.push('About Me:');
        portfolioData.about.description.forEach(p => output.push(p));
        break;
      case 'experience':
        output.push('Work Experience:');
        portfolioData.experience.forEach(exp => {
          output.push(`- ${exp.title} at ${exp.company} (${exp.duration})`);
          exp.description.forEach(desc => output.push(`  - ${desc}`));
        });
        break;
      case 'projects':
        output.push('My Projects:');
        portfolioData.projects.manualProjects.forEach(proj => {
          output.push(`- ${proj.name}: ${proj.description} (${proj.techStack.join(', ')})`);
        });
        output.push('(GitHub projects are fetched dynamically via API and not listed here. Please visit the Projects section.)');
        break;
      case 'skills':
        output.push('My Skills:');
        output.push(portfolioData.skills);
        break;
      case 'contact':
        output.push('Get in Touch:');
        output.push(`- Email: ${portfolioData.contact.email}`);
        output.push(`- GitHub: ${portfolioData.contact.github}`);
        output.push(`- LinkedIn: ${portfolioData.contact.linkedin}`);
        break;
      case 'clear':
        setHistory([]);
        setCommand('');
        return;
      case 'close':
        onClose();
        return;
      default:
        output.push(`Command not found: "${cmd}". Type "help" for a list of commands.`);
    }
    setHistory((prevHistory) => [...prevHistory, `$ ${cmd}`, ...output]);
    setCommand('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(command);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-40 p-4">
      <div className="bg-gray-900 text-green-400 font-mono w-full max-w-4xl h-3/4 rounded-lg shadow-2xl flex flex-col border border-gray-700">
        <div className="flex justify-between items-center bg-gray-800 p-3 rounded-t-lg border-b border-gray-700">
          <span className="text-sm">CLI Terminal</span>
          <button onClick={onClose} className="text-gray-400 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div ref={terminalRef} className="flex-1 p-4 overflow-y-auto text-sm whitespace-pre-wrap">
          {history.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
        <div className="p-4 border-t border-gray-700 flex items-center">
          <span className="text-green-400 mr-2">$</span>
          <input
            type="text"
            className="flex-1 bg-transparent border-none outline-none text-green-400 caret-green-400"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
