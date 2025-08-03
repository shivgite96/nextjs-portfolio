'use client';

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20mechanical%20engineering%20blueprint%20background%20with%20technical%20drawings%2C%20gear%20mechanisms%2C%20and%20engineering%20schematics%20in%20deep%20blue%20and%20silver%20tones.%20Clean%2C%20professional%20design%20with%20geometric%20patterns%2C%20technical%20line%20art%2C%20and%20industrial%20elements.%20Minimalist%20aesthetic%20with%20subtle%20gradients%20and%20precision%20engineering%20details.&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/60 to-transparent"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Hi, I'm <span className="text-blue-300">Mahesh</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Mechanical Engineering Student & Innovator
            </p>
            <p className="text-lg text-blue-200 mb-12 max-w-2xl leading-relaxed">
              Motivated Mechanical Engineering student with a strong foundation in CAD design, 
              engineering analysis, and project-based problem-solving. Skilled in applying Python 
              and MySQL for technical automation and data management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg 
                         transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
              >
                View My Projects
              </button>
              
              <a
                href="/resume.pdf"
                download
                className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 
                         font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer text-center"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="w-8 h-8 flex items-center justify-center text-white hover:text-blue-300 transition-colors duration-300 cursor-pointer"
        >
          <i className="ri-arrow-down-line text-2xl"></i>
        </button>
      </div>
    </section>
  );
}
