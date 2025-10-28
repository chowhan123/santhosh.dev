import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-slate-900 dark:to-purple-950 px-4 sm:px-6 lg:px-10 pt-24 lg:pt-28 pb-20 overflow-hidden transition-colors duration-500"
    >
 
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-500 dark:from-blue-600 dark:to-cyan-700 rounded-full blur-3xl opacity-20 dark:opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-500 dark:from-purple-600 dark:to-pink-700 rounded-full blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-indigo-400 to-blue-500 dark:from-indigo-600 dark:to-blue-700 rounded-full blur-3xl opacity-15 dark:opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
           
            {/* Modern Greeting */}
            <div className="animate-fade-slide-in" style={{ animationDelay: '100ms' }}>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 font-medium">
                👋 Hey there! I'm
              </p>
            </div>
           
            {/* Name with Gradient */}
            <div className="animate-fade-slide-in" style={{ animationDelay: '200ms' }}>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none mb-4">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                  Santhosh
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                Full Stack MERN Developer
              </h2>
            </div>

            {/* Description */}
            <div className="animate-fade-slide-in" style={{ animationDelay: '400ms' }}>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                I built <span className="text-blue-600 dark:text-blue-400 font-semibold">production-ready web applications</span> using the MERN Stack,
                specializing in real-time features with <span className="text-purple-600 dark:text-purple-400 font-semibold">WebRTC & Socket.IO</span>,
                and integrating cutting-edge <span className="text-pink-600 dark:text-pink-400 font-semibold">AI technologies</span>.
              </p>
            </div>

            {/* Buttons */}
            <div className="animate-fade-slide-in flex flex-wrap gap-4" style={{ animationDelay: '600ms' }}>
              <a
                href="#portfolio"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 dark:from-blue-500 dark:via-purple-500 dark:to-pink-600 text-white rounded-xl font-bold overflow-hidden hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 dark:from-blue-600 dark:via-purple-600 dark:to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center gap-2">
                  Explore My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="https://drive.google.com/file/d/1PZJDugFfqL1rCzgk9ov7GBPeVwrOyS7n/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-900 dark:border-gray-600 text-gray-900 dark:text-white rounded-xl font-bold hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-all shadow-lg flex items-center gap-2"
              >
                Download CV
                <Download className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </a>
            </div>

            {/* Tech Stack */}
            <div className="animate-fade-slide-in" style={{ animationDelay: '800ms' }}>
             
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'React.js', light: 'bg-cyan-50 text-cyan-700 border-cyan-200', dark: 'dark:bg-cyan-950 dark:text-cyan-400 dark:border-cyan-800' },
                  { name: 'Node.js', light: 'bg-green-50 text-green-700 border-green-200', dark: 'dark:bg-green-950 dark:text-green-400 dark:border-green-800' },
                  { name: 'MongoDB', light: 'bg-emerald-50 text-emerald-700 border-emerald-200', dark: 'dark:bg-emerald-950 dark:text-emerald-400 dark:border-emerald-800' },
                  { name: 'WebRTC', light: 'bg-purple-50 text-purple-700 border-purple-200', dark: 'dark:bg-purple-950 dark:text-purple-400 dark:border-purple-800' },
                  { name: 'AI APIs', light: 'bg-orange-50 text-orange-700 border-orange-200', dark: 'dark:bg-orange-950 dark:text-orange-400 dark:border-orange-800' }
                ].map((tech) => (
                  <span
                    key={tech.name}
                    className={`px-4 py-2 ${tech.light} ${tech.dark} border text-sm font-semibold rounded-lg hover:scale-105 transition-all cursor-pointer`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Photo */}
          <div className="relative max-w-sm mx-auto lg:max-w-md lg:ml-auto animate-fade-slide-in" style={{ animationDelay: '300ms' }}>
            {/* Glow */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-400 to-cyan-500 dark:from-blue-600 dark:to-cyan-700 rounded-full blur-[100px] opacity-30 dark:opacity-20 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-700 rounded-full blur-[100px] opacity-25 dark:opacity-15 animate-pulse animation-delay-1000"></div>
            </div>

            {/* Decoratives */}
            <div className="absolute -top-8 right-4 z-0">
              <svg width="80" height="50" viewBox="0 0 80 50" className="animate-float opacity-60 dark:opacity-40">
                <path d="M 0 25 Q 20 10, 40 25 T 80 25" stroke="url(#gradient1)" strokeWidth="4" fill="none" strokeLinecap="round" />
                <defs>
                  <linearGradient id="gradient1">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="absolute top-24 -left-6 z-0 space-y-2">
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full animate-slide-right"></div>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 rounded-full animate-slide-right animation-delay-200"></div>
              <div className="w-14 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 rounded-full animate-slide-right animation-delay-400"></div>
            </div>

            {/* Floating Particles */}
            <div className="absolute top-1/4 -right-2 w-2 h-2 bg-gradient-to-br from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 rounded-full animate-bounce shadow-lg shadow-blue-500/50"></div>
            <div className="absolute top-1/3 -left-3 w-1.5 h-1.5 bg-gradient-to-br from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 rounded-full animate-bounce animation-delay-300 shadow-lg"></div>
            <div className="absolute bottom-1/4 -right-4 w-2.5 h-2.5 bg-gradient-to-br from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 rounded-full animate-bounce animation-delay-600 shadow-lg"></div>

            {/* Photo */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-1000"></div>
              
              <img
                src="/images/Santhu.png"
                alt="Santhosh - Full Stack Developer"
                className="relative w-full h-auto z-10 transform group-hover:scale-[1.02] transition-all duration-700"
                style={{
                  filter: 'drop-shadow(0 25px 60px rgba(59, 130, 246, 0.3))',
                  maxWidth: '420px',
                  maxHeight: '520px',
                  objectFit: 'contain'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-slide-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.05); }
          50% { transform: translate(-15px, 25px) scale(0.95); }
          75% { transform: translate(15px, 10px) scale(1.02); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes slide-right {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(8px); }
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-fade-slide-in {
          animation: fade-slide-in 1s ease-out forwards;
          opacity: 0;
        }

        .animate-blob { animation: blob 8s ease-in-out infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-slide-right { animation: slide-right 2.5s ease-in-out infinite; }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
};

export default Hero;
