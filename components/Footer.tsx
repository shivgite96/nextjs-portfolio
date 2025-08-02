
'use client';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <div className="text-3xl font-bold mb-4">
              <span className="text-blue-400">Mahesh</span>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
              Mechanical Engineering Student passionate about innovation, automation, and creating 
              sustainable engineering solutions for tomorrow's challenges.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/mahesh-gite-2a400827a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-blue-600 hover:bg-blue-700 
                         rounded-lg transition-all duration-300 transform hover:scale-110 cursor-pointer"
              >
                <i className="ri-linkedin-fill"></i>
              </a>
              <a
                href="https://github.com/shivgite96"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-slate-700 hover:bg-slate-600 
                         rounded-lg transition-all duration-300 transform hover:scale-110 cursor-pointer"
              >
                <i className="ri-github-fill"></i>
              </a>
              <a
                href="https://www.instagram.com/shiv_gite123?igsh=MWwzbG84cXUwMHh4Yg=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 
                         hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-all duration-300 
                         transform hover:scale-110 cursor-pointer"
              >
                <i className="ri-instagram-fill"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-blue-400"></i>
                <span>2022bme046@sggs.ac.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-blue-400"></i>
                <span>+91-9699060605</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-map-pin-line text-blue-400"></i>
                <span>Hingoli, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-400 text-center md:text-left mb-4 md:mb-0">
              2024 Mahesh Shrinivas Gite. All rights reserved. Built with passion and engineering precision.
            </p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 flex items-center justify-center bg-blue-600 hover:bg-blue-700 
                       rounded-lg transition-all duration-300 transform hover:scale-110 cursor-pointer"
            >
              <i className="ri-arrow-up-line"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
