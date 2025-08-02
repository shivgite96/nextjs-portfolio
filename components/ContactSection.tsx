
'use client';

import { useEffect, useState, useRef } from 'react';

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Get In <span className="text-blue-900">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-lg text-slate-600 mt-6 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about engineering and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Let's Connect</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Whether you're a fellow engineer, a potential collaborator, or someone interested in my work, 
                  I'd love to hear from you. Drop me a message and let's start a conversation!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-lg">
                    <i className="ri-mail-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Email</h4>
                    <p className="text-slate-600">2022bme046@sggs.ac.in</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-lg">
                    <i className="ri-phone-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Phone</h4>
                    <p className="text-slate-600">+91-9699060605</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-lg">
                    <i className="ri-map-pin-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Location</h4>
                    <p className="text-slate-600">Hingoli, Maharashtra, India</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.linkedin.com/in/mahesh-gite-2a400827a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white 
                               rounded-lg transition-all duration-300 transform hover:scale-110 cursor-pointer"
                    >
                      <i className="ri-linkedin-fill text-xl"></i>
                    </a>
                    <a
                      href="https://github.com/shivgite96"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center bg-slate-800 hover:bg-slate-900 text-white 
                               rounded-lg transition-all duration-300 transform hover:scale-110 cursor-pointer"
                    >
                      <i className="ri-github-fill text-xl"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/shiv_gite123?igshid=MWwzbG84cXUwMHh4Yg=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 
                               hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-all duration-300 
                               transform hover:scale-110 cursor-pointer"
                    >
                      <i className="ri-instagram-fill text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <form id="contact-form" onSubmit={handleSubmit} className="bg-gradient-to-r from-blue-50 to-slate-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Send Me a Message</h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 
                             focus:border-transparent transition-all duration-300 text-sm"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 
                             focus:border-transparent transition-all duration-300 text-sm"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 
                             focus:border-transparent transition-all duration-300 resize-none text-sm"
                    placeholder="Tell me about your project, ideas, or just say hello!"
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    {formData.message.length}/500 characters
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || formData.message.length > 500}
                  className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white 
                           font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 
                           shadow-lg whitespace-nowrap cursor-pointer flex items-center justify-center space-x-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <i className="ri-send-plane-line text-xl"></i>
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
