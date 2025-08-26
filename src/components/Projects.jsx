import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Projects = ({ projectsData }) => {
  const [githubProjects, setGithubProjects] = useState([]);
  const { githubUsername, manualProjects } = projectsData;

  useEffect(() => {
    const fetchGithubProjects = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}/repos`);
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.statusText}`);
        }
        const data = await response.json();
        setGithubProjects(data);
      } catch (error) {
        console.error('Error fetching GitHub projects:', error);
      }
    };

    if (githubUsername) {
      fetchGithubProjects();
    }
  }, [githubUsername]);

  const ProjectCard = ({ project, type }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <div
        ref={ref}
        className={`rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} flex flex-col justify-between
        ${type === 'github' ? 'bg-gray-900 border border-gray-700' : 'bg-gray-700 border border-blue-500'}`}
      >
        <div>
          <h3 className={`text-2xl font-bold mb-3 ${type === 'github' ? 'text-white' : 'text-blue-300'}`}>{project.name}</h3>
          <p className="text-gray-300 mb-5 text-base leading-relaxed">{project.description || 'No description available.'}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {(project.techStack || (project.language ? [project.language] : [])).map((tech, i) => (
              <span key={i} className={`text-xs font-semibold px-3 py-1 rounded-full ${type === 'github' ? 'bg-gray-700 text-gray-300' : 'bg-blue-600 text-white'}`}>
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
              className="bg-blue-600 text-white px-5 py-2 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md"
            >
              View Code
            </a>
          )}
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-5 py-2 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors duration-300 shadow-md"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="min-h-screen bg-gray-800 text-white py-16">
      <div className="container mx-auto px-6 text-center max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {githubProjects.map((project) => (
            <ProjectCard
              key={project.id}
              type="github"
              project={{
                name: project.name,
                description: project.description || 'No description available.',
                techStack: project.language ? [project.language] : [],
                repoLink: project.html_url,
                demoLink: project.homepage || null,
              }}
            />
          ))}

          {manualProjects.map((project, index) => (
            <ProjectCard key={index} type="manual" project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
