import React from 'react';
import { useDarkMode } from '../../contexts/DarkModeContext';

interface TechnicalHighlightsProps {
  highlights: string[];
}

const TechnicalHighlights: React.FC<TechnicalHighlightsProps> = ({ highlights }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <ul className="space-y-3" style={{ color: isDarkMode ? "white" : "rgb(75, 85, 99)" }}>
      {highlights.map((highlight, index) => (
        <li key={index} className="flex items-start gap-2">
          <span className="text-pink-500 mt-1">•</span>
          <span>{highlight}</span>
        </li>
      ))}
    </ul>
  );
};

export default TechnicalHighlights;