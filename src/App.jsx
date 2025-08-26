import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GitHubStats from './components/GitHubStats'; // Import GitHubStats
import TerminalFab from './features/terminal/TerminalFab';
import Terminal from './features/terminal/Terminal';
import portfolioData from './portfolioData.json';
import './App.css';

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  const toggleTerminal = () => {
    setIsTerminalOpen(!isTerminalOpen);
  };

  return (
    <div className="bg-gray-800 text-white">
      <Header name={portfolioData.name} />
      <Hero name={portfolioData.name} tagline={portfolioData.tagline} profilePicture={portfolioData.profilePicture} contact={portfolioData.contact} aboutDescription={portfolioData.about.description}/>
      <About title={portfolioData.about.title} description={portfolioData.about.description} profilePicture={portfolioData.profilePicture}/>
      <GitHubStats githubUsername={portfolioData.projects.githubUsername} /> {/* Integrate GitHubStats */}
      <Experience experiences={portfolioData.experience} />
      <Projects projectsData={portfolioData.projects} />
      <Skills skills={portfolioData.skills} />
      <Contact contact={portfolioData.contact} />
      <Footer name={portfolioData.name} />
      <TerminalFab onClick={toggleTerminal} />
      <Terminal isOpen={isTerminalOpen} onClose={toggleTerminal} portfolioData={portfolioData} />
    </div>
  );
}

export default App;
