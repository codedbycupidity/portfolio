import React from 'react';
import { useDarkMode } from '../../contexts/DarkModeContext';

interface ProjectSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ title, children, className = "" }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`rounded-lg shadow-lg p-8 mb-8 ${className}`} style={{ backgroundColor: isDarkMode ? "rgb(31, 41, 55)" : "white" }}>
      <h2 className="text-2xl font-semibold mb-4" style={{ color: isDarkMode ? "#EABEC3" : "rgb(31, 41, 55)" }}>{title}</h2>
      {children}
    </div>
  );
};

export default ProjectSection;