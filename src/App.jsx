import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CurrentlyLearning from './components/CurrentlyLearning';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GitHubStats from './components/GitHubStats';
import FeaturesFab from './features/FeaturesFab';
import Terminal from './features/terminal/Terminal';
import Achievements from './features/Achievements'; // Import Achievements
import CodePlayground from './features/CodePlayground'; // Import CodePlayground
import portfolioData from './portfolioData.json';
import './App.css';

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);
  const [isCodePlaygroundOpen, setIsCodePlaygroundOpen] = useState(false);

  const toggleTerminal = () => {
    setIsTerminalOpen(!isTerminalOpen);
  };

  const toggleAchievements = () => {
    setIsAchievementsOpen(!isAchievementsOpen);
  };

  const toggleCodePlayground = () => {
    setIsCodePlaygroundOpen(!isCodePlaygroundOpen);
  };

  const fabFeatures = [
    { label: 'Terminal', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>, onClick: toggleTerminal },
    { label: 'Achievements', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>, onClick: toggleAchievements },
    { label: 'Code Playground', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16L2 12l4-4"></path></svg>, onClick: toggleCodePlayground },
  ];

  return (
    <div className="bg-gray-800 text-white">
      <Header name={portfolioData.name} />
      <Hero name={portfolioData.name} tagline={portfolioData.tagline} profilePicture={portfolioData.profilePicture} contact={portfolioData.contact} aboutDescription={portfolioData.about.description}/>
      <About title={portfolioData.about.title} description={portfolioData.about.description} profilePicture={portfolioData.profilePicture}/>
      <GitHubStats githubUsername={portfolioData.projects.githubUsername} />
      <Experience experiences={portfolioData.experience} />
      <Projects projectsData={portfolioData.projects} />
      <Skills skills={portfolioData.skills} />
      <CurrentlyLearning learningItems={portfolioData.currentlyLearning} />
      <Contact contact={portfolioData.contact} />
      <Footer name={portfolioData.name} />
      
      <FeaturesFab features={fabFeatures} />
      {isTerminalOpen && <Terminal isOpen={isTerminalOpen} onClose={toggleTerminal} portfolioData={portfolioData} />}
      {isAchievementsOpen && <Achievements isOpen={isAchievementsOpen} onClose={toggleAchievements} achievements={portfolioData.achievements} />}
      {isCodePlaygroundOpen && <CodePlayground isOpen={isCodePlaygroundOpen} onClose={toggleCodePlayground} initialCode={portfolioData.codePlayground.initialCode} language={portfolioData.codePlayground.language} />}
    </div>
  );
}

export default App;
