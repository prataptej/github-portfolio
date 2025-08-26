import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Projects = ({ projectsData }) => {
  const { manualProjects } = projectsData;
  const [activeFilter, setActiveFilter] = useState('All');

  // Combine only manual projects for display
  const allProjects = manualProjects.map(proj => ({ ...proj, isManual: true }));

  // Extract all unique tech stacks for filters from manual projects
  const allTechStacks = Array.from(new Set(
    allProjects.flatMap(project => project.techStack)
  )).sort();
  const filterOptions = ['All', ...allTechStacks];

  // Filter projects based on activeFilter
  const filteredProjects = activeFilter === 'All'
    ? allProjects
    : allProjects.filter(project =>
        project.techStack.includes(activeFilter)
      );

  const ProjectCard = ({ project }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <div
        ref={ref}
        className={`rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} flex flex-col justify-between
        bg-gray-700 border border-blue-500`}
      >
        <div>
          <h3 className={`text-2xl font-bold mb-3 text-blue-300 leading-snug`}>{project.name}</h3>
          <p className="text-gray-300 mb-5 text-base leading-relaxed">{project.description || 'No description available.'}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech, i) => (
              <span key={i} className={`text-xs font-semibold px-3 py-1 rounded-full bg-blue-600 text-white tracking-wide`}>
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-center space-x-4 mt-auto">
          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-md"
              aria-label="View Code"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16L2 12l4-4"></path></svg>
            </a>
          )}
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors duration-300 shadow-md"
              aria-label="Live Demo"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
          )}
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="min-h-screen bg-gray-800 text-white py-16">
      <div className="container mx-auto px-6 text-center max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-12 tracking-tight">My Projects</h2>
        
        {/* Filter Buttons */}
        {allProjects.length > 0 && (
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {filterOptions.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300
                  ${activeFilter === filter ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
              >
                {filter}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
