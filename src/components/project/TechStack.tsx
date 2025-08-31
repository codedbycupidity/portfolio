import React from 'react';
import { useDarkMode } from '../../contexts/DarkModeContext';

interface TechStackProps {
  technologies: string[];
}

const TechStack: React.FC<TechStackProps> = ({ technologies }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className="flex flex-wrap gap-3">
      {technologies.map((tech) => (
        <span 
          key={tech} 
          className="px-4 py-2 rounded-full text-sm font-medium" 
          style={{ 
            backgroundColor: isDarkMode ? "rgba(234, 190, 195, 0.2)" : "rgb(254, 242, 242)", 
            color: isDarkMode ? "#EABEC3" : "rgb(190, 24, 93)" 
          }}
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

export default TechStack;