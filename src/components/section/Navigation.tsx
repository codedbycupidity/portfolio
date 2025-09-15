import { useState, useEffect, useMemo } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import DarkModeToggle from '../DarkModeToggle';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';

const Navigation = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const themeColors = useThemeColors();
  const navigate = useNavigate();
  const location = useLocation();

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

    const handleResize = () => {
      // Close mobile menu if screen becomes desktop size
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [tabs, isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      // Wait for navigation and then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // We're already on the home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
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
            color: themeColors.colors.pink[500], 
            background: 'none', 
            border: 'none',
            outline: 'none',
            WebkitTextFillColor: themeColors.colors.pink[500]
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
              style={{ color: themeColors.text.accent }}
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
          className="mobile-menu-btn relative"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          style={{
            background: isDarkMode ? themeColors.colors.dark[800] : themeColors.colors.white,
            border: `1px solid ${themeColors.colors.pink[200]}`,
            borderRadius: '12px',
            cursor: 'pointer',
            padding: '10px',
            display: 'none',
            color: themeColors.colors.pink[500],
            transition: 'all 0.3s ease',
            transform: isMobileMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)'
          }}
        >
          <div style={{ position: 'relative', width: '24px', height: '24px' }}>
            <Menu
              size={24}
              style={{
                position: 'absolute',
                transition: 'opacity 0.3s ease',
                opacity: isMobileMenuOpen ? 0 : 1
              }}
            />
            <X
              size={24}
              style={{
                position: 'absolute',
                transition: 'opacity 0.3s ease',
                opacity: isMobileMenuOpen ? 1 : 0
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
        style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          flexDirection: 'column',
          padding: '1rem',
          background: themeColors.navigation.mobile,
          borderTop: `1px solid ${themeColors.navigation.border}`,
          maxHeight: isMobileMenuOpen ? '400px' : '0',
          overflow: isMobileMenuOpen ? 'visible' : 'hidden',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
          opacity: isMobileMenuOpen ? 1 : 0,
          boxShadow: isMobileMenuOpen
            ? isDarkMode
              ? '0 8px 25px rgba(0, 0, 0, 0.3)'
              : '0 8px 25px rgba(234, 190, 195, 0.15)'
            : 'none',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => scrollToSection(tab.id)}
            className={`mobile-nav-tab ${activeTab === tab.id ? 'active' : ''}`}
            style={{
              background: activeTab === tab.id
                ? isDarkMode
                  ? 'rgba(254, 248, 250, 0.05)'
                  : 'rgba(254, 248, 250, 0.8)'
                : 'none',
              border: activeTab === tab.id
                ? `1px solid ${themeColors.colors.pink[200]}`
                : '1px solid transparent',
              borderRadius: '12px',
              padding: '0.875rem 1.25rem',
              textAlign: 'left',
              color: activeTab === tab.id
                ? themeColors.colors.pink[500]
                : themeColors.text.accent,
              fontWeight: activeTab === tab.id ? '600' : '500',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
              opacity: isMobileMenuOpen ? 1 : 0,
              transitionDelay: isMobileMenuOpen ? `${index * 0.1}s` : '0s',
              marginBottom: '0.5rem',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
              outline: 'none',
              width: '100%'
            }}
            onMouseEnter={(e) => {
              if (activeTab !== tab.id) {
                e.currentTarget.style.background = isDarkMode
                  ? 'rgba(254, 248, 250, 0.03)'
                  : 'rgba(254, 248, 250, 0.5)';
                e.currentTarget.style.borderColor = themeColors.colors.pink[200];
                e.currentTarget.style.transform = isMobileMenuOpen ? 'translateX(4px)' : 'translateX(-20px)';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== tab.id) {
                e.currentTarget.style.background = 'none';
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.transform = isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)';
              }
            }}
            onFocus={(e) => e.currentTarget.blur()}
            aria-label={`Navigate to ${tab.label} section`}
          >
            {tab.label}
          </button>
        ))}
        <div
          className="mt-6 px-4"
          style={{
            borderTop: `1px solid ${themeColors.colors.pink[200]}`,
            paddingTop: '1rem',
            transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
            opacity: isMobileMenuOpen ? 1 : 0,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: isMobileMenuOpen ? '0.4s' : '0s',
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
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