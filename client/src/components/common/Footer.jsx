// client/src/components/common/Footer.jsx
import React from 'react';
import { ArrowRight, MapPin, Phone, Mail, Linkedin, MessageCircle, Instagram, Github, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors duration-300 w-full max-w-full overflow-x-hidden">
      {/* Main Footer Content */}
      <div className="pt-16 pb-8 px-4 sm:px-6 lg:px-8 w-full max-w-full overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Left - About & Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Santhosh<span className="text-blue-500 dark:text-blue-400">.dev</span>
              </h3>
              <p className="text-gray-400 dark:text-gray-500 mb-6 leading-relaxed">
                Full Stack Developer & GenAI Enthusiast passionate about building innovative solutions with modern technologies.
              </p>
              
              {/* Availability Status */}
              <div className="mb-6 p-4 bg-green-500/10 dark:bg-green-500/5 border border-green-500/30 dark:border-green-500/20 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 dark:text-green-300 font-semibold">Available for hire</span>
                </div>
                <p className="text-sm text-gray-400 dark:text-gray-500">Open to full-time & freelance opportunities</p>
              </div>

              {/* Contact Details */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-gray-400 dark:text-gray-500">
                  <MapPin className="w-5 h-5 text-blue-500 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="break-words">Jaipur, Rajasthan, India</span>
                </div>
                <div className="flex items-start gap-3 text-gray-400 dark:text-gray-500">
                  <Phone className="w-5 h-5 text-blue-500 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <a href="tel:+918106606929" className="hover:text-blue-400 transition-colors break-words">
                    +91 8106606929
                  </a>
                </div>
                <div className="flex items-start gap-3 text-gray-400 dark:text-gray-500">
                  <Mail className="w-5 h-5 text-blue-500 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <a href="mailto:Santhoshnaik6929@gmail.com" className="hover:text-blue-400 transition-colors break-all">
                    Santhoshnaik6929@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Middle - Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white dark:text-gray-200">Quick Links</h4>
              <div className="space-y-3">
                <a href="#home" className="block text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors flex items-center gap-2">
                  <span>→</span> Home
                </a>
                <a href="#about" className="block text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors flex items-center gap-2">
                  <span>→</span> Skills
                </a>
                <a href="#portfolio" className="block text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors flex items-center gap-2">
                  <span>→</span> Projects
                </a>
                <a href="#internship" className="block text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors flex items-center gap-2">
                  <span>→</span> Experience
                </a>
                <a href="#education" className="block text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors flex items-center gap-2">
                  <span>→</span> Education
                </a>
                <a href="#achievements" className="block text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors flex items-center gap-2">
                  <span>→</span> Achievements
                </a>
                <a href="#contact" className="block text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors flex items-center gap-2">
                  <span>→</span> Contact
                </a>
              </div>
            </div>

            {/* Right - Social Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white dark:text-gray-200">Connect With Me</h4>
              <div className="space-y-3 mb-8">
                <a 
                  href="https://github.com/chowhan123" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors group"
                >
                  <Github className="w-5 h-5 flex-shrink-0" />
                  <span>GitHub</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/santhoshc1/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors group"
                >
                  <Linkedin className="w-5 h-5 flex-shrink-0" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a 
                  href="https://wa.me/918106606929" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors group"
                >
                  <MessageCircle className="w-5 h-5 flex-shrink-0" />
                  <span>WhatsApp</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a 
                  href="https://www.instagram.com/_santuuuuuu/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors group"
                >
                  <Instagram className="w-5 h-5 flex-shrink-0" />
                  <span>Instagram</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

              {/* Newsletter Signup - FIXED */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-400 dark:text-gray-500 mb-3">Stay Updated</h4>
                <div className="flex gap-2 max-w-full">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 min-w-0 px-4 py-2 bg-gray-800 dark:bg-gray-950 border border-gray-700 dark:border-gray-800 rounded-lg focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 text-white text-sm placeholder-gray-500 dark:placeholder-gray-600 transition-colors"
                  />
                  <button className="flex-shrink-0 px-4 py-2 bg-blue-600 dark:bg-blue-500 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-t border-gray-800 dark:border-gray-950 mb-8" />

          {/* Tech Stack - FIXED WITH FLEX-WRAP */}
          <div className="text-center mb-8">
            <p className="text-sm text-gray-500 dark:text-gray-600 mb-3">Built with</p>
            <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
              {['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Express'].map((tech) => (
                <span 
                  key={tech} 
                  className="px-4 py-2 bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-800 rounded-lg text-sm text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 hover:border-blue-600 dark:hover:border-blue-500 transition-all whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Large Portfolio Text - RESPONSIVE */}
          <div className="text-center mb-8 overflow-hidden">
            <h2 className="text-6xl sm:text-7xl md:text-9xl font-black text-white dark:text-gray-200 tracking-wider select-none opacity-10 dark:opacity-50 break-words">
              PORTFOLIO
            </h2>
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-gray-800 dark:border-gray-950">
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              © 2025 Santhosh. All rights reserved. | Designed & Developed with ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;