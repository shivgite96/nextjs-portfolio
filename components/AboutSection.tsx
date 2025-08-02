
'use client';

import { useEffect, useState, useRef } from 'react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
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

  const skills = [
    { icon: 'ri-code-line', name: 'Python', description: 'Data analysis & automation' },
    { icon: 'ri-database-2-line', name: 'MySQL', description: 'Database management' },
    { icon: 'ri-function-line', name: 'MATLAB', description: 'Engineering simulations' },
    { icon: 'ri-pencil-ruler-2-line', name: 'AutoCAD', description: '2D technical drawings' },
    { icon: 'ri-cube-line', name: 'SolidWorks', description: '3D modeling & design' },
    { icon: 'ri-team-line', name: 'Teamcenter', description: 'PLM solutions' }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            About <span className="text-blue-900">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="w-80 h-80 mx-auto relative">
                <img
                  src="https://public.readdy.ai/ai/img_res/192decc8-d5d8-40d6-af11-e05124e7dc3e.jpg"
                  alt="Mahesh's Profile"
                  className="w-full h-full object-cover rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/20 to-transparent"></div>
              </div>
              
              <div className="absolute top-4 right-4 w-16 h-16 flex items-center justify-center animate-spin-slow">
                <i className="ri-settings-3-line text-3xl text-blue-600"></i>
              </div>
              <div className="absolute bottom-4 left-4 w-12 h-12 flex items-center justify-center animate-bounce">
                <i className="ri-hammer-line text-2xl text-slate-600"></i>
              </div>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                I'm a motivated <strong className="text-blue-900">Mechanical Engineering student</strong> 
                with a strong foundation in CAD design, engineering analysis, and project-based problem-solving. 
                I'm skilled in applying Python and MySQL for technical automation and data management.
              </p>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                My experience spans across industrial optimization, automotive performance, sustainable 
                technology research, and manufacturing improvements. I'm passionate about creating 
                efficient solutions and contributing to technological advancement.
              </p>

              <div className="pt-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Technical Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className={`p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 
                                transform hover:-translate-y-2 cursor-pointer ${
                        isVisible ? 'animate-fade-in-up' : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                    >
                      <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mb-3 mx-auto">
                        <i className={`${skill.icon} text-xl text-blue-600`}></i>
                      </div>
                      <h4 className="font-semibold text-slate-800 text-center">{skill.name}</h4>
                      <p className="text-sm text-slate-600 text-center mt-1">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
