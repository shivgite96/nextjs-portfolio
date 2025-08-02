
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-slate-800">
            <span className="text-blue-900">Mahesh</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-slate-700 hover:text-blue-900 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-700 hover:text-blue-900 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('resume')}
              className="text-slate-700 hover:text-blue-900 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              Resume
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-slate-700 hover:text-blue-900 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-700 hover:text-blue-900 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              Contact
            </button>
          </div>

          <button 
            className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl text-slate-800`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 px-6">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-slate-700 hover:text-blue-900 transition-colors duration-300 text-left whitespace-nowrap cursor-pointer"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-slate-700 hover:text-blue-900 transition-colors duration-300 text-left whitespace-nowrap cursor-pointer"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('resume')}
                className="text-slate-700 hover:text-blue-900 transition-colors duration-300 text-left whitespace-nowrap cursor-pointer"
              >
                Resume
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-slate-700 hover:text-blue-900 transition-colors duration-300 text-left whitespace-nowrap cursor-pointer"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-slate-700 hover:text-blue-900 transition-colors duration-300 text-left whitespace-nowrap cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
