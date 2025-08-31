import React from 'react';
import { Github, type LucideIcon } from 'lucide-react';
import { useDarkMode } from '../../contexts/DarkModeContext';

interface ProjectHeaderProps {
  icon: string;
  title: string;
  subtitle: string;
  githubUrl: string;
  features: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ 
  icon, 
  title, 
  subtitle, 
  githubUrl, 
  features 
}) => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className="rounded-lg shadow-lg p-8 mb-8" style={{ backgroundColor: isDarkMode ? "rgb(31, 41, 55)" : "white" }}>
      <div className="flex items-start gap-6 mb-6">
        <img src={icon} alt={title} className="w-24 h-24 rounded-lg" />
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-2" style={{ color: isDarkMode ? "white" : "rgb(31, 41, 55)" }}>{title}</h1>
          <p className="text-lg" style={{ color: isDarkMode ? "white" : "rgb(75, 85, 99)" }}>{subtitle}</p>
          <div className="flex gap-4 mt-4">
            <a
              href={githubUrl}
              target="_blank"
              aria-label="View source code on GitHub (opens in new tab)"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg hover:opacity-80 transition-colors"
              style={{ 
                backgroundColor: isDarkMode ? "rgba(234, 190, 195, 0.2)" : "rgb(252, 231, 243)",
                color: isDarkMode ? "#EABEC3" : "rgb(190, 24, 93)"
              }}
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              View Code
            </a>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="border-t pt-6" style={{ borderColor: isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)" }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: isDarkMode ? "white" : "rgb(31, 41, 55)" }}>Key Features</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex items-start gap-3">
                <Icon className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold" style={{ color: isDarkMode ? "#FDD5DF" : "rgb(55, 65, 81)" }}>{feature.title}</h3>
                  <p className="text-sm" style={{ color: isDarkMode ? "white" : "rgb(75, 85, 99)" }}>{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;