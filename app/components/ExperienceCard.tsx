import React from 'react';
import Image from 'next/image';

interface ExperienceCardProps {
  company: string;
  icon: string;
  achievements: string[];
  period: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ company, icon, achievements, period }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 transition-all hover:shadow-lg hover:shadow-purple-500/20 h-full">
      <div className="flex items-center mb-4">
        <Image src={icon} alt={`${company} logo`} width={48} height={48} className="rounded-full mr-4" />
        <div>
          <h3 className="text-2xl font-semibold text-purple-400">{company}</h3>
          <p className="text-gray-400">{period}</p>
        </div>
      </div>
      <ul className="space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
