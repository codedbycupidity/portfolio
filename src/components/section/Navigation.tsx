import { useState, useEffect, useMemo } from 'react';
import { Menu, X } from 'lucide-react';
import DarkModeToggle from '../DarkModeToggle';
import { useDarkMode } from '../../contexts/DarkModeContext';

const Navigation = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`} aria-label="Main navigation">
      <div className="nav-container">
        <button className="signature-name"
          style={{ 
            cursor: 'pointer', 
            color: isDarkMode ? '#EABEC3' : '#A6707B', 
            background: 'none', 
            border: 'none',
            WebkitTextFillColor: isDarkMode ? '#EABEC3' : '#A6707B'
          }}
          onClick={() => window.location.href = '/'}
          aria-label="Layla Le - Go to homepage">
          Layla Le
        </button>
        
        {/* Desktop Navigation */}
        <div className="nav-tabs desktop-nav">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
              style={{ color: isDarkMode ? '#D9A5AC' : undefined }}
              aria-label={`Navigate to ${tab.label} section`}
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

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'none',
            color: isDarkMode ? '#EABEC3' : '#8B5A65'
          }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
        style={{
          display: isMobileMenuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          padding: '1rem',
          background: isDarkMode ? 'rgba(10, 15, 27, 0.95)' : 'rgba(255, 232, 239, 0.95)',
          borderTop: `1px solid ${isDarkMode ? 'rgba(234, 190, 195, 0.1)' : 'rgba(255, 194, 209, 0.15)'}`,
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => scrollToSection(tab.id)}
            className={`mobile-nav-tab ${activeTab === tab.id ? 'active' : ''}`}
            style={{
              background: 'none',
              border: 'none',
              padding: '0.75rem 1rem',
              textAlign: 'left',
              color: activeTab === tab.id 
                ? (isDarkMode ? '#EABEC3' : '#8B5A65')
                : (isDarkMode ? '#D9A5AC' : '#A6707B'),
              fontWeight: activeTab === tab.id ? '600' : '500',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            aria-label={`Navigate to ${tab.label} section`}
          >
            {tab.label}
          </button>
        ))}
        <div className="mt-4 px-4">
          <DarkModeToggle
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;