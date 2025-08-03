
'use client';

import { useEffect, useState, useRef } from 'react';

export default function ResumeSection() {
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

  const handleDownloadResume = () => {
    alert('Resume download would be available here');
  };

  return (
    <section ref={sectionRef} id="resume" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            My <span className="text-blue-900">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-lg mr-3">
                    <i className="ri-graduation-cap-line text-white"></i>
                  </div>
                  Education
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h4 className="text-xl font-semibold text-slate-800">B.Tech - Mechanical Engineering</h4>
                    <p className="text-blue-600 font-medium">Shri Guru Gobind Singh Ji Institute of Engineering and Technology, Nanded</p>
                    <p className="text-slate-600">2022 - 2026</p>
                    <p className="text-slate-700 mt-2">Specialization in machine design, automation, and engineering analysis</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-lg mr-3">
                    <i className="ri-briefcase-line text-white"></i>
                  </div>
                  Experience
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h4 className="text-xl font-semibold text-slate-800">Intern</h4>
                    <p className="text-blue-600 font-medium">Indorama Ventures Yarns Pvt. Ltd., Nagpur</p>
                    <p className="text-slate-600">May 2025 - Jun 2025</p>
                    <ul className="text-slate-700 mt-2 space-y-1">
                      <li>• Conducted preventive maintenance on industrial machines</li>
                      <li>• Reduced downtime by 20% through workflow optimization</li>
                      <li>• Performed detailed time study analysis to identify bottlenecks</li>
                      <li>• Recommended operational improvements based on analysis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-lg mr-3">
                    <i className="ri-tools-line text-white"></i>
                  </div>
                  Technical Skills
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Programming & Data</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'MySQL'].map(skill => (
                        <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Tools & Software</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Microsoft Excel', 'PowerPoint', 'Power BI', 'Tabular', 'MATLAB', 'GitHub', 'Teamcenter'].map(skill => (
                        <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Design & Analysis</h4>
                    <div className="flex flex-wrap gap-2">
                      {['SolidWorks', 'AutoCAD', 'ANSYS'].map(skill => (
                        <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-lg mr-3">
                    <i className="ri-award-line text-white"></i>
                  </div>
                  Certifications
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <i className="ri-medal-line text-blue-600 text-xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-slate-800">SolidWorks Specialization</h4>
                      <p className="text-slate-600">Dassault Systemes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <i className="ri-award-line text-blue-600 text-xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-slate-800">AutoCAD Certification</h4>
                      <p className="text-slate-600">Autodesk</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <i className="ri-bar-chart-line text-blue-600 text-xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-slate-800">Data Analytics</h4>
                      <p className="text-slate-600">Professional Certification</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <i className="ri-function-line text-blue-600 text-xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-slate-800">MATLAB Certification</h4>
                      <p className="text-slate-600">MathWorks</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <i className="ri-money-dollar-circle-line text-blue-600 text-xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-slate-800">Fundamentals of Loan</h4>
                      <p className="text-slate-600">Financial Certification</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
  <a
    href="/resume.pdf"
    download
    className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg 
             transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer
             flex items-center mx-auto space-x-3"
  >
    <i className="ri-download-line text-xl"></i>
    <span>Download Full Resume</span>
  </a>
</div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
