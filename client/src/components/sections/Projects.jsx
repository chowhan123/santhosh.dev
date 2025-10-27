// client/src/components/sections/Projects.jsx - DARK MODE VERSION
import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';

const useInView = () => {
  const [ref, setRef] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref]);

  return [setRef, isVisible];
};

const ProjectCard = ({ project, delay }) => {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="group h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl dark:hover:shadow-blue-900/30 transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 flex flex-col">
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-1 shadow-lg">
            <Star className="w-3 h-3 fill-white" />
            FEATURED
          </div>
        )}

        {/* Project Image */}
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-400 to-purple-600 dark:from-blue-600 dark:to-purple-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
          
          {/* Hover Buttons */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110 shadow-xl"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full hover:bg-purple-600 hover:text-white transition-all transform hover:scale-110 shadow-xl"
            >
              <ExternalLink className="w-6 h-6" />
            </a>
          </div>

          {/* Status Badge */}
          <div className="absolute bottom-4 left-4">
            <span className={`px-3 py-1 backdrop-blur-sm text-xs font-bold rounded-full ${
              project.status === 'Live' 
                ? 'bg-green-500/90 text-white' 
                : 'bg-yellow-500/90 text-white'
            }`}>
              {project.status}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3">
            {project.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed flex-1">
            {project.description}
          </p>
          
          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-full border border-blue-100 dark:border-blue-800"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex gap-3 mt-auto">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 dark:bg-gray-700 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-600 transition-all"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 dark:bg-blue-500 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Wanderlust',
      description: 'Full-stack accommodation booking platform with MERN Stack, Mapbox geolocation, and Cloudinary integration, handling 1000+ daily requests with 40% booking conversion boost',
      image: '/images/WonderLust.png',
      status: 'Live',
      tags: ['EJS', 'Node.js', 'MongoDB', 'Bootstrap', 'Mapbox', 'Cloudinary'],
      github: 'https://github.com/chowhan123/Wonderlust',
      demo: 'https://wonderlust-ffz4.onrender.com/',
    },
    {
      title: 'MeetSpace',
      description: 'Production-ready video conferencing platform with WebRTC P2P architecture, dual authentication, and automated CI/CD pipeline reducing deployment from 20 to 3 minutes',
      image: '/images/MeetSpace.png',
      status: 'Live',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Material UI', 'WebRTC', 'Socket.IO'],
      github: 'https://github.com/chowhan123/MeetSpace',
      demo: 'https://meetspacefrontend.onrender.com/',
    },
    {
      title: 'TripPocket',
      description: 'AI-powered trip planner leveraging OpenAI GPT-3.5 and Gemini AI for personalized itineraries with real-time Socket.IO updates and 70% improved response time',
      image: '/images/TripPocket.png',
      status: 'Live',
      tags: ['React.js', 'Node.js', 'OpenAI', 'Gemini AI', 'Socket.IO', 'Google Maps'],
      github: 'https://github.com/chowhan123/TripPocket-AI-Trip-Planner',
      demo: '#'
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="flex justify-center">
            <svg width="200" height="20" viewBox="0 0 200 20" className="mt-2">
              <path
                d="M 10 15 Q 100 5, 190 15"
                className="stroke-blue-600 dark:stroke-blue-400"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
            Full-stack web development projects showcasing modern technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} delay={idx * 100} />
          ))}
        </div>

        {/* GitHub Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/chowhan123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all"
          >
            <Github className="w-5 h-5" />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;