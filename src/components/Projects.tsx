import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../types';

interface ProjectsProps {
  darkMode: boolean;
}

// Utility function to normalize category strings (lowercase & trimmed)
const normalize = (str: string) => str.trim().toLowerCase();

// Utility to format back for display (capitalize each word)
const formatCategory = (str: string) =>
  str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A fully responsive Pet e-commerce platform built with HTML,CSS,JS and PHP backend',
      image: './images/Pet care.jpg',
      categories: ['HTML', 'CSS', 'JS', 'BOOTSTRAP', 'PHP'],
      link: '#',
    },
    {
      id: 2,
      title: 'E-Learning Platform',
      description: 'Customize E-Learning Platform for Education Purpose. Its fully react js based project',
      image: './images/home_banner.png',
      categories: ['HTML', 'CSS', 'JavaScript', 'React Js'],
      link: '#',
    },
    {
      id: 3,
      title: 'Attendance Management',
      description: 'Attendance Management Website Design With react js Store the data in localhost',
      image: './images/hero-img.png',
      categories: ['HTML', 'CSS', 'JAVASCRIPT', 'React Js'],
      link: '#',
    },
    {
      id: 4,
      title: 'Youtube clone',
      description: 'Interactive Youtube clone with html,css,js',
      image: './images/Youtube-clone.png',
      categories: ['HTML', 'CSS', 'JAVASCRIPT'],
      link: '#',
    },
    {
      id: 5,
      title: 'Login and Register',
      description: 'Interactive Login-And-Register a small website with Reactjs and mongodb',
      image: './images/Signup_login.png',
      categories: ['React js', 'Mongodb'],
      link: '#',
    },
    {
      id: 6,
      title: 'oneline job portal',
      description: 'A small website of oneline job portal with React.js',
      image: './images/Oneline.png',
      categories: ['React js'],
      link: '#',
    },
    {
      id: 7,
      title: 'Construction website',
      description: 'A small website of Construction Project Management (CPM) is the overall planning, coordination, and control of a project from beginning to completion.',
      image: './images/Construction.png',
      categories: ['Html,CSS,JS,Bootstrap'],
      link: '#',
    },
    {
      id: 8,
      title: 'Academy website',
      description: 'Developed a responsive academy website using WordPress and Elementor',
      image: './images/Wordpress1.png',
      categories: ['Html,CSS,Elementor'],
      link: '#',
    },
    {
      id: 9,
      title: 'Lighting Industry Website',
      description: 'Designed and customized the website using WordPress and Elementor.',
      image: './images/Wordpress2.png',
      categories: ['Html,Elementor'],
      link: '#',
    },
  ];

  // Get all unique normalized categories
  const uniqueCategories = Array.from(
    new Set(projects.flatMap(project => project.categories.map(normalize)))
  );

  const allCategories = ['all', ...uniqueCategories];

  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [animateCards, setAnimateCards] = useState(false);

  const handleFilterClick = (category: string) => {
    setActiveFilter(category);
    setAnimateCards(true);

    setTimeout(() => {
      if (category === 'all') {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(
          projects.filter(project =>
            project.categories.some(cat => normalize(cat) === normalize(category))
          )
        );
      }
      setAnimateCards(false);
    }, 500);
  };

  return (
    <section
      id="projects"
      className={`py-24 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built with attention to detail and
            focus on user experience.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 overflow-x-auto">
          {allCategories.map((category, index) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={index}
                onClick={() => handleFilterClick(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : darkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {formatCategory(category)}
              </button>
            );
          })}
        </div>

        {/* Project Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
            animateCards ? 'opacity-0' : 'opacity-100'
          } transition-opacity duration-500`}
        >
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
