import { useState, useEffect, useMemo } from 'react';
import DarkModeToggle from './DarkModeToggle';
import { useDarkMode } from '../contexts/DarkModeContext';

const Navigation = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const tabs = useMemo(() => [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' }
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled
      setIsScrolled(window.scrollY > 10);
      
      // Update active tab
      const sections = tabs.map(tab => tab.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveTab(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tabs]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <h1 className="signature-name" 
            style={{ cursor: 'pointer', color: isDarkMode ? '#EABEC3' : undefined }}
            onClick={() => window.location.href = '/'}>
          Layla Le
        </h1>
        <div className="nav-tabs">
          {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => scrollToSection(tab.id)}
            className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
            style={{ color: isDarkMode ? '#D9A5AC' : undefined }}
          >
            {tab.label}
          </button>
          ))}
          <div className="ml-4">
            <DarkModeToggle
              checked={isDarkMode}
              onChange={toggleDarkMode}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;