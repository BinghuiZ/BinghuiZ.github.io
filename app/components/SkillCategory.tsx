import React from 'react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 transition-all hover:shadow-lg hover:shadow-purple-500/20">
      <h3 className="text-2xl font-semibold mb-6 text-purple-400">{title}</h3>
      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
            <span className="text-lg">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCategory;
