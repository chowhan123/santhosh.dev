import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isDark, setIsDark] = useState(false);

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect active section (excluding home)
      const sections = ['about', 'portfolio', 'internship', 'education', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize dark mode
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Skills' },
    { id: 'portfolio', label: 'Projects' },
    { id: 'internship', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 transition-all duration-300"
          style={{ 
            width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` 
          }}
        />
      </div>

      {/* Main Navbar - Fixed Width Container */}
      <nav className="fixed top-1 left-0 right-0 z-40 px-2 sm:px-4">
        <div className="max-w-7xl mx-auto">
          <div 
            className={`rounded-2xl lg:rounded-full transition-all duration-300 ${
              isScrolled 
                ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl shadow-blue-500/10 dark:shadow-purple-500/10 border-2 border-white dark:border-white/10' 
                : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg border-2 border-white dark:border-white/10'
            }`}
          >
            <div className="flex justify-between items-center h-16 lg:h-18 px-3 sm:px-4 lg:px-6">
              {/* Logo with Custom Icon */}
              <button 
                onClick={() => scrollToSection('home')}
                className="flex items-center gap-2 lg:gap-3 group flex-shrink-0"
              >
                {/* Professional Custom Icon - Hexagon with S */}
                <div className="relative w-9 h-9 lg:w-11 lg:h-11 flex-shrink-0">
                  {/* Animated gradient ring */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 rounded-xl rotate-45 opacity-20 group-hover:opacity-40 blur-sm transition-all duration-300"></div>
                  
                  {/* Main hexagon icon */}
                  <svg viewBox="0 0 100 100" className="relative w-full h-full group-hover:scale-110 transition-transform duration-300">
                    <defs>
                      <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" className="text-blue-600 dark:text-blue-400" stopColor="currentColor" />
                        <stop offset="50%" className="text-purple-600 dark:text-purple-400" stopColor="currentColor" />
                        <stop offset="100%" className="text-pink-600 dark:text-pink-400" stopColor="currentColor" />
                      </linearGradient>
                    </defs>
                    
                    {/* Hexagon shape */}
                    <polygon 
                      points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" 
                      fill="url(#icon-gradient)" 
                      className="drop-shadow-lg"
                    />
                    
                    {/* Letter S in center */}
                    <text 
                      x="50" 
                      y="70" 
                      fontSize="50" 
                      fontWeight="900" 
                      textAnchor="middle" 
                      fill="white"
                      className="font-black"
                    >
                      S
                    </text>
                  </svg>
                </div>

                {/* Text Logo */}
                <div className="flex items-center">
                  <span className="text-lg lg:text-2xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent whitespace-nowrap">
                    Santhosh
                  </span>
                  <span className="text-lg lg:text-2xl font-black text-blue-600 dark:text-blue-400 whitespace-nowrap">.dev</span>
                </div>
              </button>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1.5 xl:gap-2 ml-4 xl:ml-8 flex-1 justify-center max-w-3xl">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`relative px-3 xl:px-5 py-2 xl:py-2.5 rounded-full font-semibold text-xs xl:text-sm transition-all duration-300 whitespace-nowrap ${
                      activeSection === link.id && link.id !== 'home'
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white shadow-lg shadow-blue-500/30'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105'
                    }`}
                  >
                    {link.label}
                    
                    {/* Active indicator dot */}
                    {activeSection === link.id && link.id !== 'home' && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"></span>
                    )}
                  </button>
                ))}
              </div>

              {/* Right Section - Social + Dark Mode */}
              <div className="hidden lg:flex items-center gap-2 xl:gap-3 flex-shrink-0">
                {/* Social Links */}
                <a
                  href="https://github.com/chowhan123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 xl:p-2.5 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/santhoshc1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 xl:p-2.5 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                {/* Divider */}
                <div className="h-8 w-px bg-gray-300 dark:bg-gray-700"></div>

                {/* Dark Mode Toggle */}
                <button
                  onClick={toggleDarkMode}
                  className="p-2 xl:p-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all hover:scale-110"
                  aria-label="Toggle dark mode"
                >
                  {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden flex items-center gap-2 flex-shrink-0">
                {/* Dark Mode Toggle Mobile */}
                <button
                  onClick={toggleDarkMode}
                  className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
                  aria-label="Toggle dark mode"
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>

                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="lg:hidden border-t border-gray-200 dark:border-gray-800">
                <div className="px-4 py-6 space-y-2">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl font-semibold transition-all ${
                        activeSection === link.id && link.id !== 'home'
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white shadow-lg'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}

                  {/* Mobile Social Links */}
                  <div className="flex justify-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-800 mt-4">
                    <a
                      href="https://github.com/chowhan123"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:scale-110"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/santhoshc1/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;