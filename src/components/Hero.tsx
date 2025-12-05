import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className={`min-h-screen flex flex-col justify-center relative ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fadeIn">
            <span className="block">Hi! I'm</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              Komal Maurya
            </span>
          </h1>
          
          <div className="h-1 w-24 bg-blue-500 mx-auto mb-8 animate-scaleIn"></div>
          
          <h2 className="text-xl md:text-2xl font-medium mb-8 leading-relaxed animate-fadeInUp opacity-90">
            A passionate <span className="text-blue-500 font-semibold">Web Development</span> specialized in 
            creating beautiful, functional & user-friendly websites
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fadeInUp animation-delay-200">
            <button 
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  window.scrollTo({
                    top: contactSection.offsetTop - 80,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Contact Me
            </button>
            <button 
              className={`px-8 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl ${
                darkMode 
                  ? 'bg-gray-800 text-white hover:bg-gray-700' 
                  : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  window.scrollTo({
                    top: projectsSection.offsetTop - 80,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              View My Work
            </button>
          </div>
          
          <div className="absolute bottom-12 left-0 right-0 flex justify-center animate-bounce">
            <button 
              onClick={scrollToAbout} 
              className="p-2 rounded-full border-2 border-blue-500"
              aria-label="Scroll to About section"
            >
              <ChevronDown size={24} className="text-blue-500" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500 rounded-full"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-500 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;