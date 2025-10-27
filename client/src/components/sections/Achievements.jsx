import React, { useState, useEffect } from 'react';
import { Trophy, Award, Code2, BookOpen, Users, ExternalLink, Briefcase } from 'lucide-react';

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

const AchievementCard = ({ achievement, delay, index }) => {
  const [ref, isVisible] = useInView();
  const IconComponent = achievement.icon;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500">
        {/* Small number badge in top-left */}
        <div className="absolute top-4 left-4 w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
          <span className="text-sm font-bold text-gray-400 dark:text-gray-500">0{index + 1}</span>
        </div>

        {/* Small icon badge in top-right */}
        <div className={`absolute top-4 right-4 w-10 h-10 ${achievement.iconBg} rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
          <IconComponent className="w-5 h-5 text-white" strokeWidth={2} />
        </div>

        {/* Content */}
        <div className="space-y-3 flex-1 flex flex-col pt-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {achievement.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1">
            {achievement.description}
          </p>
          
          {/* Links Section */}
          {achievement.links && achievement.links.length > 0 && (
            <div className="pt-3 border-t border-gray-100 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1">
                <ExternalLink className="w-3 h-3" />
                View Profile:
              </p>
              <div className="flex flex-wrap gap-2">
                {achievement.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 px-3 py-1.5 ${link.bgColor} ${link.textColor} rounded-lg text-xs font-semibold hover:scale-105 transition-all shadow-sm hover:shadow-md`}
                  >
                    {link.emoji && <span>{link.emoji}</span>}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Certificate Link */}
          {achievement.certificate && (
            <div className="pt-3 border-t border-gray-100 dark:border-gray-700">
              <a
                href={achievement.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-lg text-sm font-semibold hover:bg-blue-100 dark:hover:bg-blue-900 transition-all group/cert border border-blue-100 dark:border-blue-900"
              >
                <Award className="w-4 h-4" />
                View Certificate
                <ExternalLink className="w-3 h-3 group-hover/cert:translate-x-0.5 transition-transform" />
              </a>
            </div>
          )}

          <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700 mt-auto">
            <span className="text-xs font-medium text-blue-600 dark:text-blue-400">{achievement.organization}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{achievement.year}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Achievements = () => {
  const achievements = [
    {
      icon: Code2,
      iconBg: 'bg-gradient-to-br from-orange-500 to-red-600',
      title: '250+ DSA Problems Solved',
      description: 'Consistently solved algorithmic challenges on DSA, demonstrating strong problem-solving and analytical skills',
      organization: 'LeetCode & GeeksforGeeks',
      year: '2024-2025',
      links: [
        {
          label: 'LeetCode',
          url: 'https://leetcode.com/u/santhoshnaik218/',
          bgColor: 'bg-yellow-400',
          textColor: 'text-gray-900',
        },
        {
          label: 'GeeksforGeeks',
          url: 'https://www.geeksforgeeks.org/user/santhoshacme/',
          bgColor: 'bg-green-600',
          textColor: 'text-white',
        }
      ]
    },
    {
      icon: BookOpen,
      iconBg: 'bg-gradient-to-br from-purple-500 to-pink-600',
      title: 'DSA Sigma 2.0 - Apna College',
      description: 'Completed comprehensive Data Structures & Algorithms course under the guidance of Shradha Khapra & Aman Dhattarwal, mastering core CS concepts',
      organization: 'Apna College',
      year: '2025',
      certificate: 'https://drive.google.com/file/d/1ABC123XYZ456DEF789/preview'
    },
    {
      icon: Award,
      iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      title: 'Full Stack Web Development Sigma 2.0 - Apna College',
      description: 'Mastered MERN stack development with hands-on projects under the guidance of Shradha Khapra & Aman Dhattarwal',
      organization: 'Apna College',
      year: '2025',
      certificate: 'https://drive.google.com/file/d/1cQOw8OBM3AGiJqLcaxkVq86wYq5N2UvT/preview'
    },
    {
      icon: Code2,
      iconBg: 'bg-gradient-to-br from-red-600 to-orange-600',
      title: 'OOPS in Java - GeekSter',
      description: 'Mastered Object-Oriented Programming principles including inheritance, polymorphism, encapsulation, and design patterns in Java',
      organization: 'GeekSter',
      year: '2024',
      certificate: 'https://drive.google.com/file/d/1x6nTQ4I2vQxoGaexSlL2tIBUf2IrSHYP/preview'
    },
    {
      icon: Trophy,
      iconBg: 'bg-gradient-to-br from-yellow-500 to-amber-600',
      title: 'Kabaddi Team Captain & Champion',
      description: 'Led 12+member team to 1st place at MST Championship for three consecutive years (2022-2024). Represented MNIT Jaipur at All India Inter NIT Tournament',
      organization: 'MNIT Jaipur',
      year: '2022-2024'
    },
    {
      icon: Users,
      iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600',
      title: 'Cricket Team Volunteer - DGPL',
      description: 'Coordinated match logistics and team operations for DGPL (Gulteez Committee), facilitating community sports engagement and event management',
      organization: 'Gulteez Committee',
      year: '2023-2024'
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-4">
            My Achievements
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
            Certifications, competitive programming, sports achievements, and milestones
          </p>
        </div>

        {/* Achievements Grid - Equal Height Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, idx) => (
            <AchievementCard
              key={idx}
              achievement={achievement}
              delay={idx * 100}
              index={idx}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '6+', label: 'Projects', icon: Briefcase },
            { number: '250+', label: 'Problems Solved', icon: Code2 },
            { number: '3x', label: 'Sports Champion', icon: Trophy },
            { number: '5+', label: 'Certifications', icon: Award }
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all hover:-translate-y-1 group"
            >
              <div className="flex justify-center mb-2">
                <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.number}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;