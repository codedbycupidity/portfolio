import { useDarkMode } from '../contexts/DarkModeContext';
import { useThemeColors } from '../hooks/useThemeColors';

const Footer = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();
  
  return (
    <footer className="py-6 mt-auto transition-colors duration-300" style={{ 
      backgroundColor: isDarkMode ? themeColors.colors.dark[800] : themeColors.colors.pink[50]
    }}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center" style={{ color: themeColors.colors.pink[500] }}>
          <span className="text-m font-medium">
            Made with
            <span className="mx-1" style={{ color: themeColors.colors.pink[300] }}>˚ʚ♡ɞ˚</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;