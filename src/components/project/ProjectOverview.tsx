import React from 'react';
import { useDarkMode } from '../../contexts/DarkModeContext';

interface ProjectOverviewProps {
  paragraphs: (string | React.ReactNode)[];
}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({ paragraphs }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <p 
          key={index} 
          className={`leading-relaxed ${index < paragraphs.length - 1 ? 'mb-4' : ''}`} 
          style={{ color: isDarkMode ? "white" : "rgb(75, 85, 99)" }}
        >
          {paragraph}
        </p>
      ))}
    </>
  );
};

export default ProjectOverview;