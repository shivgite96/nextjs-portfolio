
'use client';

import { useEffect, useState, useRef } from 'react';

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

 const projects = [
  {
    id: 1,
    title: 'Voice Commands using Three.js',
    description: 'Web-based tool to create 3D CAD models from voice commands using Three.js and speech recognition.',
    image: 'https://readdy.ai/api/search-image?query=3D%20CAD%20modeling%20interface%20with%20voice%20recognition%20technology&width=600&height=400&seq=voice-cad-project&orientation=landscape',
    technologies: ['Three.js', 'JavaScript', 'Speech Recognition', 'Web APIs', 'CAD Modeling'],
    category: 'AI/Web Development',
    status: 'Completed',
    fullDescription: 'This project combines voice recognition with 3D modeling using Three.js for interactive CAD design from natural speech commands.',
    challenges: 'Real-time voice processing, geometry conversion, browser compatibility.',
    results: '85% accuracy, 40% faster modeling.',
    githubUrl: 'https://github.com/shivgite96/voice-cad',
    liveUrl: '#'
  },
  {
    id: 2,
    title: 'Eco-Friendly Immersion Cooling System Using Castor Oil',
    description: 'Used castor oil to cool electronics in a sustainable way, reducing temperatures by 30%.',
    image: 'https://readdy.ai/api/search-image?query=Eco-friendly%20immersion%20cooling%20system%20with%20castor%20oil&width=600&height=400&seq=castor-cooling-project&orientation=landscape',
    technologies: ['Thermal Analysis', 'SolidWorks', 'Environmental Engineering'],
    category: 'Thermal Engineering',
    status: 'Completed',
    fullDescription: 'Built a cooling system using biodegradable castor oil to reduce electronics overheating.',
    challenges: 'Oil processing, leak-proof design.',
    results: '30% temperature drop, fully biodegradable, 25% cost saving.',
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: 3,
    title: 'Bamboo Starch Epoxy Composite Material Study',
    description: 'Created sustainable composite using bamboo starch and epoxy resin for green engineering.',
    image: 'https://readdy.ai/api/search-image?query=Bamboo%20starch%20epoxy%20composite%20materials%20testing&width=600&height=400&seq=bamboo-composite-project&orientation=landscape',
    technologies: ['Materials Science', 'Composite Analysis', 'Testing Protocols'],
    category: 'Materials Research',
    status: 'Completed',
    fullDescription: 'Developed biodegradable composites from bamboo starch and epoxy. Tested strength, weight, and sustainability.',
    challenges: 'Property consistency, strength vs. biodegradability.',
    results: '40% better strength-to-weight, 60% lower carbon footprint.',
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: 4,
    title: 'Design Projects',
    description: 'Explore my CAD and product design work including mechanical assemblies and technical drawings.',
    image: 'https://readdy.ai/api/search-image?query=CAD%20design%20projects%20gallery%2C%20solidworks%20assemblies%2C%20mechanical%20engineering%20designs&width=600&height=400&seq=design-projects&orientation=landscape',
    technologies: ['SolidWorks', 'AutoCAD', 'Fusion 360'],
    category: 'Design',
    status: 'Ongoing',
    fullDescription: 'This project includes several mechanical designs such as gear assemblies, chassis frames, and other 2D/3D engineering models.',
    challenges: 'Parametric accuracy, design constraints, manufacturing feasibility.',
    results: 'Efficient, optimized CAD models ready for prototyping.',
    githubUrl: '#',
    liveUrl: '#',
    viewProjects: [
      { name: 'Gear Assembly', image: 'link-to-your-gear-image.png' },
      { name: 'Chassis Frame', image: 'link-to-your-chassis-image.png' }
    ]
  },
  {
    id: 5,
    title: 'Data Analytics Projects',
    description: 'A collection of interactive dashboards and data visualizations using Power BI and Tableau.',
    image: 'https://readdy.ai/api/search-image?query=Power%20BI%20dashboard%20project%20example%2C%20data%20analytics%20and%20visualization%20interface&width=600&height=400&seq=data-analytics&orientation=landscape',
    technologies: ['Power BI', 'Tableau', 'Excel'],
    category: 'Data & Analytics',
    status: 'Completed',
    fullDescription: 'Includes projects like sales forecasting, time series analysis, and performance monitoring dashboards built using Power BI and Tableau.',
    challenges: 'Data cleaning, DAX formula optimization, visual storytelling.',
    results: 'Insightful dashboards that improved decision-making by 30%.',
    githubUrl: '#',
    liveUrl: '#',
    viewProjects: [
      { name: 'Sales Dashboard', image: 'link-to-your-dashboard.png' },
      { name: 'Time Series Forecasting', image: 'link-to-your-forecasting.png' }
    ]
  }
];

 
  const handleViewMore = (project: any) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section ref={sectionRef} id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Featured <span className="text-blue-900">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-lg text-slate-600 mt-6 max-w-3xl mx-auto">
              Explore my engineering projects that showcase innovation, problem-solving, and technical expertise 
              in mechanical engineering, web development, and sustainable technology solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 
                          transform hover:-translate-y-2 overflow-hidden ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.3 + index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                      project.status === 'Prototype' ? 'bg-purple-100 text-purple-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-black/70 text-white rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => handleViewMore(project)}
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg 
                               transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer
                               flex items-center space-x-2"
                    >
                      <span>View Details</span>
                      <i className="ri-arrow-right-line"></i>
                    </button>
                    
                    <div className="flex space-x-2">
                      <button className="w-10 h-10 flex items-center justify-center bg-slate-100 hover:bg-slate-200 
                                       rounded-lg transition-colors duration-300 cursor-pointer">
                        <i className="ri-github-line text-slate-600"></i>
                      </button>
                      <button className="w-10 h-10 flex items-center justify-center bg-slate-100 hover:bg-slate-200 
                                       rounded-lg transition-colors duration-300 cursor-pointer">
                        <i className="ri-external-link-line text-slate-600"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white 
                             font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto w-full">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 
                         text-white rounded-full transition-all duration-300 cursor-pointer"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
              <div className="absolute bottom-4 left-4 flex space-x-3">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  selectedProject.status === 'Completed' ? 'bg-green-100 text-green-800' :
                  selectedProject.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                  selectedProject.status === 'Prototype' ? 'bg-purple-100 text-purple-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {selectedProject.status}
                </span>
                <span className="px-3 py-1 bg-black/70 text-white rounded-full text-sm font-medium">
                  {selectedProject.category}
                </span>
              </div>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">{selectedProject.title}</h2>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center">
                    <i className="ri-information-line text-blue-600 mr-2"></i>
                    Project Overview
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{selectedProject.fullDescription}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center">
                    <i className="ri-tools-line text-blue-600 mr-2"></i>
                    Challenges
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{selectedProject.challenges}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center">
                    <i className="ri-trophy-line text-blue-600 mr-2"></i>
                    Results & Impact
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{selectedProject.results}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-slate-200">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg 
                                 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer
                                 flex items-center justify-center space-x-2">
                  <i className="ri-github-line"></i>
                  <span>View Source Code</span>
                </button>
                <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white 
                                 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 
                                 whitespace-nowrap cursor-pointer flex items-center justify-center space-x-2">
                  <i className="ri-external-link-line"></i>
                  <span>Live Demo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
