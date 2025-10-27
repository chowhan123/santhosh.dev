import React, { useState, useEffect } from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Trophy, Star } from 'lucide-react';

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

const EducationCard = ({ education, delay, isLast }) => {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative flex gap-8">
        {/* Timeline Line & Dot */}
        <div className="hidden md:flex flex-col items-center">
          <div className={`w-16 h-16 ${education.gradientBg} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          {!isLast && (
            <div className="w-1 flex-1 bg-gradient-to-b from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 opacity-20 dark:opacity-30 mt-4"></div>
          )}
        </div>

        {/* Content Card */}
        <div className="flex-1 group">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500 relative overflow-hidden">
            {/* Decorative gradient on hover */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            {/* Mobile Icon */}
            <div className="md:hidden mb-4">
              <div className={`w-12 h-12 ${education.gradientBg} rounded-xl inline-flex items-center justify-center`}>
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Header */}
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {education.degree}
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-300 mb-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                  <span className="font-semibold">{education.institution}</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                  <span>{education.period}</span>
                </div>
                {education.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                    <span>{education.location}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              {education.description}
            </p>

            {/* Highlights */}
            {education.highlights && (
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {education.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full border border-blue-100 dark:border-blue-900"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CGPA/Grade Badge */}
            {education.cgpa && (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 text-white rounded-full text-sm font-bold shadow-md">
                  <Award className="w-4 h-4" />
                  <span>{education.gradeLabel}: {education.cgpa}</span>
                </div>
                {education.distinction && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-full text-xs font-semibold border border-yellow-200 dark:border-yellow-800">
                    <Star className="w-4 h-4" />
                    <span>Distinction</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  const educationData = [
    {
      degree: 'B.Tech in Electronics and Communication Engineering',
      institution: 'Malaviya National Institute of Technology, Jaipur',
      location: 'Jaipur, Rajasthan',
      period: '2022 - 2026',
      gradientBg: 'bg-gradient-to-br from-blue-500 to-purple-600',
      description: 'Specialized in full-stack development with strong understanding of CS fundamentals including OOPS, Computer Networks, DBMS, and Operating Systems. Led college Kabaddi team as captain, balancing technical excellence with sports leadership.',
      highlights: ['Full Stack Development','DSA', 'OOPS', 'DBMS', 'Computer Networks', 'Operating Systems', 'Kabaddi Captain'],
    },
    {
      degree: 'Intermediate (12th Grade)',
      institution: 'Narayana Junior College (DNI)',
      location: 'Hyderabad, Telangana',
      period: '2020 - 2022',
      gradientBg: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      description: 'Focused on Mathematics, Physics, and Computer Science. Developed strong foundation in programming fundamentals and analytical problem-solving skills.',
      highlights: ['Mathematics', 'Physics', 'Computer Science'],
      gradeLabel: 'Percentage',
      cgpa: '91.2%',
    },
    {
      degree: 'High School (10th Grade)',
      institution: 'New Chaitanya High School',
      location: 'Hyderabad, Telangana',
      period: '2019 - 2020',
      gradientBg: 'bg-gradient-to-br from-green-500 to-teal-600',
      description: 'Actively involved in sports and cultural events, demonstrating strong teamwork and leadership alongside academic achievement.',
      highlights: ['Sports Activities', 'Cultural Events', 'Leadership'],
      gradeLabel: 'Percentage',
      cgpa: '98%',
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          {/* Blue curved underline */}
          <div className="flex justify-center">
            <svg width="200" height="20" viewBox="0 0 200 20" className="mt-2">
              <path
                d="M 10 15 Q 100 5, 190 15"
                stroke="#3B82F6"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                className="dark:stroke-blue-400"
              />
            </svg>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            Academic journey and educational achievements
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8 md:space-y-12">
          {educationData.map((education, idx) => (
            <EducationCard
              key={idx}
              education={education}
              delay={idx * 150}
              isLast={idx === educationData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;