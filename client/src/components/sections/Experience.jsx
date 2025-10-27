import React, { useState, useEffect } from 'react';
import { CheckCircle2, MapPin, ExternalLink, Briefcase } from 'lucide-react';

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

const ExperienceCard = ({ experience, delay }) => {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500">
        {/* Check Icon and Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0">
            <CheckCircle2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="flex-1">
            {/* Role Title */}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {experience.role}
            </h3>
            
            {/* Company & Period */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <p className="text-gray-600 dark:text-gray-300 font-medium">
                {experience.company}
              </p>
              <span className="text-gray-400 dark:text-gray-500">•</span>
              <span className="text-gray-400 dark:text-gray-500">{experience.period}</span>
            </div>

            {/* Location, Remote, Website */}
            <div className="flex flex-wrap items-center gap-3 text-sm">
              {/* Location */}
              {experience.location && (
                <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>{experience.location}</span>
                </div>
              )}

              {/* Remote/In-office Badge */}
              {experience.workType && (
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  experience.workType === 'Remote' 
                    ? 'bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-900'
                    : 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900'
                }`}>
                  {experience.workType}
                </span>
              )}

              {/* Company Website Link */}
              {experience.website && (
                <a
                  href={experience.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium group/link"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Company Website</span>
                  <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed pl-12 mb-4">
          {experience.description}
        </p>

        {/* Key Points */}
        {experience.points && (
          <ul className="pl-12 space-y-2">
            {experience.points.map((point, idx) => (
              <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Skills Tags */}
        {experience.skills && (
          <div className="flex flex-wrap gap-2 mt-4 pl-12">
            {experience.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium border border-blue-100 dark:border-blue-900"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Experience = () => {
  const experienceData = [
    {
      role: 'Backend Development Intern',
      company: 'DataValley Web Services',
      period: 'Mar 2025 - Jun 2025',
      location: 'Tripunithura , Kerala',
      workType: 'Remote',
      website: 'https://www.datavalley.in',
      description: 'Contributed to backend team developing AI-powered social media bot that auto-publishes trending content to LinkedIn, Instagram & Twitter with OpenAI-generated hashtags',
      points: [
        'Developed LinkedIn automation bot using Node.js & LinkedIn API, increasing outreach by 80%.',
        'Integrated OpenAI GPT, Google Trends & Twitter API to auto-generate hashtags, boosting social media engagement.',
        'Implemented JWT-based authentication with role-based authorization, ensuring secure API access and user management.',
        'Built Post controller with complete CRUD operations & integrated Cloudinary for efficient media uploads and management.',
        'Performed API testing with Postman, creating test suites that achieved 100% pass rate and reliable backend performance.'
      ],
      skills: ['Node.js', 'Express.js', 'MongoDB', 'LinkedIn API', 'OpenAI GPT', 'JWT Auth', 'Cloudinary', 'Postman', 'REST APIs']
    },
  ];

  return (
    <section id="internship" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-4">
            Experience
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
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experienceData.map((experience, idx) => (
            <ExperienceCard
              key={idx}
              experience={experience}
              delay={idx * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;