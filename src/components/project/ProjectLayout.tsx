import React from 'react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import BackButton from '../BackButton';

interface ProjectLayoutProps {
  children: React.ReactNode;
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({ children }) => {
  const { isDarkMode } = useDarkMode();

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main 
      role="main" 
      aria-label="Project details" 
      className="min-h-screen py-20 transition-colors duration-300" 
      style={{ backgroundColor: isDarkMode ? '#0A0F1B' : 'rgb(254 245 245)' }}
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <BackButton />
        {children}
      </div>
    </main>
  );
};

export default ProjectLayout;