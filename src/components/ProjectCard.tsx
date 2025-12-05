import React from 'react';
import { ExternalLink} from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  darkMode: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, darkMode }) => {
  return (
    <div 
      className={`group rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl ${
        darkMode ? 'bg-gray-700' : 'bg-white'
      }`}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <div className="flex flex-wrap gap-2">
              {project.categories.map((category, index) => (
                <span 
                  key={index} 
                  className="inline-block px-2 py-1 text-xs rounded-full bg-blue-600 text-white"
                >
                  {category}
                </span>
              ))}
            </div>
            <div className="flex justify-end space-x-3 mt-3">
              <a 
                href="#" 
                className="p-2 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/40 transition-colors"
                aria-label="View source code on GitHub"
              >
                {/* <Github size={18} /> */}
              </a>
              <a 
                href={project.link} 
                className="p-2 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/40 transition-colors"
                aria-label="View live project"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;