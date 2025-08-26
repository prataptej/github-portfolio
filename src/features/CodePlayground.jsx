import React, { useState, useEffect } from 'react';

const CodePlayground = ({ isOpen, onClose, initialCode, language }) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');

  useEffect(() => {
    setCode(initialCode);
    setOutput('');
  }, [initialCode]);

  if (!isOpen) return null;

  const runCode = () => {
    try {
      // Basic execution for JavaScript. For other languages, a backend or more complex setup would be needed.
      if (language === 'javascript') {
        let consoleOutput = '';
        const originalConsoleLog = console.log;
        console.log = (...args) => {
          consoleOutput += args.map(String).join(' ') + '\n';
        };
        
        // Use a Function constructor to execute code in a sandboxed environment
        new Function(code)();
        console.log = originalConsoleLog; // Restore original console.log
        setOutput(consoleOutput);
      } else {
        setOutput(`Execution for ${language} is not supported in this basic playground.`);
      }
    } catch (err) {
      setOutput(`Error: ${err.message}`);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-40 p-4">
      <div className="bg-gray-900 text-white font-mono w-full max-w-5xl h-3/4 rounded-lg shadow-2xl flex flex-col border border-gray-700">
        <div className="flex justify-between items-center bg-gray-800 p-3 rounded-t-lg border-b border-gray-700">
          <span className="text-sm">Code Playground ({language})</span>
          <button onClick={onClose} className="text-gray-400 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Code Editor */}
          <div className="flex-1 p-4 border-b lg:border-b-0 lg:border-r border-gray-700 overflow-auto">
            <textarea
              className="w-full h-full bg-transparent outline-none text-sm resize-none"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck="false"
            ></textarea>
          </div>
          {/* Output Console */}
          <div className="flex-1 p-4 overflow-auto bg-gray-800">
            <pre className="text-sm whitespace-pre-wrap">{output}</pre>
          </div>
        </div>
        <div className="p-3 border-t border-gray-700 flex justify-end">
          <button
            onClick={runCode}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-semibold transition-colors duration-300"
          >
            Run Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodePlayground;
