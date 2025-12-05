import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer 
      className={`py-10 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold tracking-tight mb-4 md:mb-0">
            <span>Komal Maurya</span>
            <span className="text-blue-500">.</span>
          </div>
          
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              &copy; {new Date().getFullYear()} Komal Maurya. All rights reserved.
            </p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className={`p-3 rounded-full transition-colors shadow-md ${
              darkMode 
                ? 'bg-gray-800 hover:bg-gray-700' 
                : 'bg-white hover:bg-gray-200'
            }`}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="text-blue-500" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;