import { useDarkMode } from '../contexts/DarkModeContext';

const Footer = () => {
  const { isDarkMode } = useDarkMode();
  
  return (
    <footer className="py-6 mt-auto transition-colors duration-300" style={{ backgroundColor: isDarkMode ? '#0A0F1B' : 'rgb(254 245 245)' }}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center" style={{ color: '#C88B95' }}>
          <span className="text-m font-medium">
            Made with
            <span className="mx-1" style={{ color: '#EABEC3' }}>˚ʚ♡ɞ˚</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;