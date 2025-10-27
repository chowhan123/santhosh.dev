import React, { useState, useEffect } from 'react';
import { Layout, Server, Wrench } from 'lucide-react';

const useInView = () => {
  const [ref, setRef] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref]);

  return [setRef, isVisible];
};

const ProgressBar = ({ skill, percentage, delay }) => {
  const [ref, isVisible] = useInView();
  
  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">{skill}</span>
        <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-purple-500 rounded-full transition-all duration-1500 ease-out"
          style={{
            width: isVisible ? `${percentage}%` : '0%',
            transitionDelay: `${delay}ms`
          }}
        />
      </div>
    </div>
  );
};

const SkillCategory = ({ category, delay }) => {
  const [ref, isVisible] = useInView();
  const IconComponent = category.icon;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl dark:hover:shadow-blue-900/30 transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 h-full">
        {/* Category Header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
          <div className={`w-12 h-12 ${category.gradientBg} rounded-xl flex items-center justify-center shadow-md`}>
            <IconComponent className="w-6 h-6 text-white" strokeWidth={2.5} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
        </div>

        {/* Skills Progress Bars */}
        <div>
          {category.skills.map((skill, idx) => (
            <ProgressBar
              key={skill.skill}
              {...skill}
              delay={delay + (idx * 50)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      icon: Layout,
      title: 'Frontend Development',
      gradientBg: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      skills: [
        { skill: 'JavaScript', percentage: 85 },
        { skill: 'React.js', percentage: 75},
        { skill: 'HTML5', percentage: 95 },
        { skill: 'CSS3', percentage: 90 },
        { skill: 'Tailwind CSS', percentage: 70 },
        { skill: 'Bootstrap', percentage: 85},
        { skill: 'Material UI', percentage: 70 }
      ]
    },
    {
      icon: Server,
      title: 'Backend Development',
      gradientBg: 'bg-gradient-to-br from-green-500 to-emerald-600',
      skills: [
        { skill: 'Node.js', percentage: 90 },
        { skill: 'Express.js', percentage: 92 },
        { skill: 'Java', percentage: 80 },
        { skill: 'RESTful APIs', percentage: 93 },
        { skill: 'WebRTC', percentage: 80 },
        { skill: 'Socket.IO', percentage: 85 },
        { skill: 'JWT Auth', percentage: 90 }
      ]
    },
    {
      icon: Wrench,
      title: 'DevOps & Tools',
      gradientBg: 'bg-gradient-to-br from-purple-500 to-violet-600',
      skills: [
        { skill: 'Git/GitHub', percentage: 95 },
        { skill: 'MongoDB', percentage: 90 },
        { skill: 'MySQL', percentage: 82 },
        { skill: 'Postman', percentage: 93 },
        { skill: 'VS Code', percentage: 95 },
        { skill: 'IntelliJ IDEA', percentage: 85 },
        { skill: 'Cloudinary', percentage: 90 },
      ]
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          {/* Blue curved underline */}
          <div className="flex justify-center">
            <svg width="200" height="20" viewBox="0 0 200 20" className="mt-2">
              <path
                d="M 10 15 Q 100 5, 190 15"
                className="stroke-blue-600 dark:stroke-blue-400"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <SkillCategory
              key={idx}
              category={category}
              delay={idx * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;