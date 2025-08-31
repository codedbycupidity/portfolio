import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';

interface BackButtonProps {
  to?: string;
  scrollToId?: string;
  label?: string;
  ariaLabel?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ 
  to = '/', 
  scrollToId = 'projects',
  label = 'Back to Projects',
  ariaLabel = 'Navigate back to projects section'
}) => {
  const { isDarkMode } = useDarkMode();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
    if (scrollToId) {
      setTimeout(() => {
        const element = document.getElementById(scrollToId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <button 
      onClick={handleClick}
      aria-label={ariaLabel}
      className="inline-flex items-center gap-2 hover:opacity-80 mb-8 transition-colors bg-transparent border-none cursor-pointer" 
      style={{ color: isDarkMode ? '#EABEC3' : 'rgb(190, 24, 93)' }}
    >
      <ArrowLeft className="h-5 w-5" aria-hidden="true" />
      <span>{label}</span>
    </button>
  );
};

export default BackButton;