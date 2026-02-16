// import React from 'react'

function Skills() {
  return (
    <>
      <div className="py-12 px-4 md:px-10 bg-gray-50 text-dark">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto">
            With expertise in a wide range of technologies, I can handle all aspects of web development
            from design to deployment.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-10 justify-items-center text-white font-bold">

          {/* Skill Card Example */}
<div className="w-32 h-32 bg-blue-600 bg-opacity-60 rounded-xl flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
            <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="HTML/HTML5" className="h-12 object-contain mb-2" />
            <span className="text-sm">HTML/HTML5</span>
          </div>

           <div className="w-32 h-32 bg-blue-600 bg-opacity-60 rounded-xl flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
            <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS" className="h-12 object-contain mb-2" />
            <span className="text-sm">CSS</span>
          </div>

          
          <div className="w-32 h-32 bg-blue-600 bg-opacity-60 rounded-xl flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
            <img src="https://img.icons8.com/color/48/000000/bootstrap.png" alt="Bootstrap" className="h-12 object-contain mb-2" />
            <span className="text-sm">Bootstrap</span>
          </div>

          
          <div className="w-32 h-32 bg-blue-600 bg-opacity-60 rounded-xl flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
            <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt="JavaScript" className="h-12 object-contain mb-2" />
            <span className="text-sm">JavaScript</span>
          </div>

          <div className="w-32 h-32 bg-blue-600 bg-opacity-60 rounded-xl flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
            <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" alt="ReactJS" className="h-12 object-contain mb-2" />
            <span className="text-sm">ReactJS</span>
          </div>

          <div className="w-32 h-32 bg-blue-600 bg-opacity-60 rounded-xl flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
            <img src="https://img.icons8.com/fluency/48/000000/node-js.png" alt="ExpressJS" className="h-12 object-contain mb-2" />
            <span className="text-sm">ExpressJS</span>
          </div>

          <div className="w-32 h-32 bg-blue-600 bg-opacity-60 rounded-xl flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
            <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="NodeJS" className="h-12 object-contain mb-2" />
            <span className="text-sm">NodeJS</span>
          </div>

          <div className="w-32 h-32 bg-blue-600 bg-opacity-60 rounded-xl flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
            <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="MongoDB" className="h-12 object-contain mb-2" />
            <span className="text-sm">MongoDB</span>
          </div>

          <div className="w-32 h-32 bg-blue-600 bg-opacity-60 rounded-xl flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
            <img src="https://img.icons8.com/offices/48/000000/php-logo.png" alt="PHP" className="h-12 object-contain mb-2" />
            <span className="text-sm">PHP</span>
          </div>

          <div className="w-32 h-32 bg-blue-600 bg-opacity-60 rounded-xl flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
            <img src="https://img.icons8.com/color/48/000000/wordpress.png" alt="WordPress" className="h-12 object-contain mb-2" />
            <span className="text-sm">WordPress</span>
          </div>

          <div className="w-32 h-32 bg-blue-600 bg-opacity-60 rounded-xl flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
            <img src="https://img.icons8.com/?size=100&id=64074&format=png&color=000000" alt="MS OFFICE" className="h-12 object-contain mb-2" />
            <span className="text-sm">MS OFFICE</span>
          </div>

          <div className="w-32 h-32 bg-blue-600 bg-opacity-60 rounded-xl flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
            <img src="https://img.icons8.com/?size=100&id=MCtfF4BV5B6W&format=png&color=000000" alt="Graphic Designing" className="h-12 object-contain mb-2" />
            <span className="text-sm"> Graphic Designing</span>
          </div>

          <div className="w-32 h-32 bg-blue-600 bg-opacity-60 rounded-xl flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
            <img src="https://img.icons8.com/?size=100&id=86701&format=png&color=000000" alt="Advanced Tally" className="h-12 object-contain mb-2" />
            <span className="text-sm">Advanced Tally</span>
          </div>

          {/* Add more skills as needed */}

        </div>
      </div>
    </>
  )
}

export default Skills
