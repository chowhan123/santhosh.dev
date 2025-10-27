// // client/src/App.jsx
// import React, { useState, useEffect } from 'react';
// import { ChevronUp } from 'lucide-react';

// // Import Components
// import Navbar from './components/common/Navbar';
// import Hero from './components/section/Hero';
// import ThemeToggle from './components/common/ThemeToggle';
// import Skills from './components/section/skills';
// import Education from './components/section/Education';
// import Experience from './components/section/Experience';
// import Projects from './components/section/Projects';
// import Achievements from './components/section/Achievements';
// import Footer from './components/common/Footer';

// function App() {
//   const [scrollY, setScrollY] = useState(0);
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//       setShowScrollTop(window.scrollY > 500);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navigation Bar */}
//       <Navbar />
//       <ThemeToggle />

//       {/* Main Content */}
//       <main>
//         <Hero />
//         <Skills />
//         <Education />
//         <Experience />
//         <Projects />
//         <Achievements />
//       </main>

//       {/* Footer */}
//       <Footer />

//     </div>
//   );
// }

// export default App;

import React from 'react';
//import './App.css';
import Navbar from './components/common/Navbar';
import ScrollToTop from './components/common/ScrollToTop';
import Hero from './components/sections/Hero';
import Skills from './components/sections/skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Achievements from './components/sections/Achievements';
import ContactForm from './components/sections/ContactForm';
import Footer from './components/common/Footer';


function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* All your sections */}
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;