
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
      description: 'Developed a web-based tool that generates 3D CAD models from voice commands using Three.js, speech recognition APIs, and parametric modeling. Enabled engineers to create CAD designs with faster and more natural interface.',
      image: 'https://readdy.ai/api/search-image?query=3D%20CAD%20modeling%20interface%20with%20voice%20recognition%20technology%2C%20Three.js%203D%20visualization%2C%20speech%20waveforms%2C%20modern%20web-based%20engineering%20design%20tool%2C%20interactive%203D%20models%2C%20voice%20command%20interface%20with%20technical%20blueprints&width=600&height=400&seq=voice-cad-project&orientation=landscape',
      technologies: ['Three.js', 'JavaScript', 'Speech Recognition', 'Web APIs', 'CAD Modeling'],
      category: 'AI/Web Development',
      status: 'Completed',
      fullDescription: 'This innovative project combines voice recognition technology with 3D modeling capabilities to revolutionize CAD design workflows. The system processes natural language voice commands and translates them into parametric 3D models using Three.js rendering engine. Key features include real-time voice processing, intelligent command interpretation, and interactive 3D visualization. The tool significantly reduces design time and provides an intuitive interface for engineers to create complex geometries through simple voice instructions.',
      challenges: 'Managing real-time voice processing accuracy, handling complex geometric transformations, and ensuring cross-browser compatibility.',
      results: 'Achieved 85% voice recognition accuracy and reduced CAD modeling time by 40% for basic geometric shapes.',
      githubUrl: 'https://github.com/shivgite96/voice-cad',
      liveUrl: '#'
    },
    {
      id: 2,
      title: 'Eco-Friendly Immersion Cooling System Using Castor Oil',
      description: 'Designed an electronic cooling system using non-conductive processed castor oil. Built electronic component overheating by up to 30% while maintaining an environmentally safe solution.',
      image: 'https://readdy.ai/api/search-image?query=Eco-friendly%20immersion%20cooling%20system%20with%20castor%20oil%2C%20sustainable%20electronic%20cooling%20solution%2C%20green%20technology%20for%20computer%20cooling%2C%20environmental%20engineering%20design%2C%20liquid%20cooling%20tank%20with%20electronic%20components%20immersed&width=600&height=400&seq=castor-cooling-project&orientation=landscape',
      technologies: ['Thermal Analysis', 'SolidWorks', 'Environmental Engineering', 'Sustainable Design'],
      category: 'Thermal Engineering',
      status: 'Completed',
      fullDescription: 'This groundbreaking thermal management project explores the use of processed castor oil as an eco-friendly alternative to traditional synthetic cooling fluids. The system features complete immersion cooling for electronic components, utilizing castor oil\'s excellent dielectric properties and thermal conductivity. The design includes custom-fabricated cooling chambers, circulation pumps, and temperature monitoring systems. The project addresses both performance requirements and environmental sustainability concerns in electronic cooling applications.',
      challenges: 'Processing castor oil to achieve optimal dielectric properties, designing leak-proof immersion chambers, and maintaining consistent thermal performance.',
      results: 'Achieved 30% reduction in component temperatures, 100% biodegradable cooling solution, and 25% lower operating costs compared to synthetic alternatives.',
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: 3,
      title: 'Bamboo Starch Epoxy Composite Material Study',
      description: 'Conducted comprehensive research using bamboo starch as the matrix and epoxy resin as reinforcement. Achieved a lightweight, high-strength, and biodegradable material suitable for sustainable manufacturing.',
      image: 'https://readdy.ai/api/search-image?query=Bamboo%20starch%20epoxy%20composite%20materials%20testing%2C%20sustainable%20material%20science%20laboratory%2C%20eco-friendly%20composite%20materials%2C%20bamboo%20fiber%20research%2C%20green%20materials%20engineering%2C%20material%20testing%20equipment&width=600&height=400&seq=bamboo-composite-project&orientation=landscape',
      technologies: ['Materials Science', 'Composite Analysis', 'Sustainability Research', 'Testing Protocols'],
      category: 'Materials Research',
      status: 'Completed',
      fullDescription: 'This comprehensive materials research project investigates the potential of bamboo starch-epoxy composites as sustainable alternatives to traditional synthetic materials. The study involves extensive testing of mechanical properties, biodegradability, and manufacturing feasibility. Various bamboo starch concentrations and processing methods were evaluated to optimize strength-to-weight ratios. The research includes tensile testing, impact resistance analysis, and environmental degradation studies. The project contributes to the development of eco-friendly materials for automotive and construction applications.',
      challenges: 'Optimizing bamboo starch processing methods, achieving consistent material properties, and balancing strength with biodegradability.',
      results: 'Developed a composite material with 40% better strength-to-weight ratio than conventional materials, 60% reduction in carbon footprint, and complete biodegradability within 2 years.',
      githubUrl: '#',
      liveUrl: '#'
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
