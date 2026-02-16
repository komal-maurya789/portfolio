import React from 'react';
import { Download, Mail, MapPin, Calendar } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`py-24 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full max-w-sm mx-auto rounded-xl shadow-xl overflow-hidden">
            <img
              src="../images/Photo.jpeg"
              alt="Komal Maurya"
              className="w-full h-full object-cover aspect-[3/4] transition-transform duration-500 hover:scale-105"
            />
            {/* <div className={`absolute inset-0 ${darkMode ? 'bg-blue-900' : 'bg-blue-600'} opacity-20`}></div> */}
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">
              Web Developer
            </h3>

            <p className="mb-6 leading-relaxed">
              Enthusiastic Web Developer with experience in HTML, CSS, JavaScript, Bootstrap, PHP, React.js,
              Node.js, and MongoDB. Skilled in creating responsive websites and full-stack applications with
              scalable, efficient code. Passionate about problem-solving and delivering impactful digital solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <Mail size={18} className="text-blue-500 mr-2" />
                <span>komalmaurya0780@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="text-blue-500 mr-2" />
                <span>Bhayander (E) 401105</span>
              </div>
              <div className="flex items-center">
                <Calendar size={18} className="text-blue-500 mr-2" />
                <span>Fresher</span>
              </div>
            </div>

            <a
              href="./images/Komal_maurya_CV.pdf"
              download="Komal_maurya_CV.pdf"
              className="inline-block"
            >
              <button
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 
               transition-colors shadow-md hover:shadow-lg flex items-center"
              >
                <Download size={18} className="mr-2" />
                Download Resume
              </button>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;