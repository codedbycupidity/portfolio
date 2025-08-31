import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import AsciiMorphText from './AsciiMorphText';
import TypewriterCarousel from './TypewriterCarousel';
import { useDarkMode } from '../contexts/DarkModeContext';
import aboutMeJournal from '../assets/aboutme_journal.PNG';
import profileImage from '../assets/profile.PNG';
import sticker1 from '../assets/stickers/sticker_1.PNG';
import sticker2 from '../assets/stickers/sticker_2.PNG';
import sticker3 from '../assets/stickers/sticker_3.PNG';
import sticker4 from '../assets/stickers/sticker_4.PNG';
import sticker5 from '../assets/stickers/sticker_5.PNG';
import sticker6 from '../assets/stickers/sticker_6.PNG';
import sticker7 from '../assets/stickers/sticker_7.PNG';
import sticker8 from '../assets/stickers/sticker_8.PNG';
import sticker9 from '../assets/stickers/sticker_9.PNG';
import sticker10 from '../assets/stickers/sticker_10.PNG';
import sticker11 from '../assets/stickers/sticker_11.PNG';
import sticker12 from '../assets/stickers/sticker_12.PNG';
import sticker13 from '../assets/stickers/sticker_13.PNG';
import sticker14 from '../assets/stickers/sticker_14.PNG';
import sticker15 from '../assets/stickers/sticker_15.PNG';
import sticker16 from '../assets/stickers/sticker_16.PNG';

const AboutSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [asciiText, setAsciiText] = useState('');
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useDarkMode();
  
  const roles = [
    'Software Engineer',
    'Full-Stack Developer',
    'Game Developer',
    'Frontend Developer',
  ];

  const fullAsciiArt = `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢠⡾⠲⠶⣤⣀⣠⣤⣤⣤⡿⠛⠿⡴⠾⠛⢻⡆⠀⠀⠀
⠀⠀⠀⣼⠁⠀⠀⠀⠉⠁⠀⢀⣿⠐⡿⣿⠿⣶⣤⣤⣷⡀⠀⠀
⠀⠀⠀⢹⡶⠀⠀⠀⠀⠀⠀⠈⢯⣡⣿⣿⣀⣰⣿⣦⢂⡏⠀⠀
⠀⠀⢀⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠹⣍⣭⣾⠁⠀⠀
⠀⣀⣸⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣸⣧⣤⡀
⠈⠉⠹⣏⡁⠀⢸⣿⠀⠀⠀⢀⡀⠀⠀⠀⣿⠆⠀⢀⣸⣇⣀⠀
⠀⠐⠋⢻⣅⡄⢀⣀⣀⡀⠀⠯⠽⠂⢀⣀⣀⡀⠀⣤⣿⠀⠉⠀
⠀⠀⠴⠛⠙⣳⠋⠉⠉⠙⣆⠀⠀⢰⡟⠉⠈⠙⢷⠟⠈⠙⠂⠀
⠀⠀⠀⠀⠀⢻⣄⣠⣤⣴⠟⠛⠛⠛⢧⣤⣤⣀⡾⠀⠀⠀⠀⠀`;

  // Typewriter effect for ASCII art
  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 3; // Speed in milliseconds
    
    const typeWriter = () => {
      if (currentIndex < fullAsciiArt.length) {
        setAsciiText(fullAsciiArt.substring(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeWriter, typingSpeed);
      }
    };
    
    // Start typing after a small delay
    const startDelay = setTimeout(() => {
      typeWriter();
    }, 500);
    
    return () => clearTimeout(startDelay);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run once on mount

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the section is in view
      const visibleTop = Math.max(0, -rect.top);
      const visibleBottom = Math.min(sectionHeight, windowHeight - rect.top);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      
      const progress = visibleHeight / windowHeight;
      setScrollProgress(Math.min(1, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stickers = [
    { id: 1, image: sticker1, initialX: -180, initialY: -80, finalX: -550, finalY: -100 },
    { id: 2, image: sticker2, initialX: 180, initialY: -60, finalX: 600, finalY: -250 },
    { id: 3, image: sticker3, initialX: -160, initialY: 240, finalX: -200, finalY: 380 },
    { id: 4, image: sticker4, initialX: 190, initialY: 260, finalX: 500, finalY: 150 },
    { id: 5, image: sticker5, initialX: -200, initialY: 120, finalX: -200, finalY: -380 },
    { id: 6, image: sticker6, initialX: 170, initialY: 100, finalX: 150, finalY: -360 },
    { id: 7, image: sticker7, initialX: -130, initialY: -130, finalX: -450, finalY: -380 },
    { id: 8, image: sticker8, initialX: 150, initialY: 200, finalX: 200, finalY: 350 },
    { id: 9, image: sticker9, initialX: -140, initialY: 300, finalX: -500, finalY: 200 },
    { id: 10, image: sticker10, initialX: 200, initialY: 120, finalX: 500, finalY: -380 },
    { id: 11, image: sticker11, initialX: -220, initialY: -40, finalX: 600, finalY: 10 },
    { id: 12, image: sticker12, initialX: 110, initialY: -180, finalX: 500, finalY: 300 },
    { id: 13, image: sticker13, initialX: -120, initialY: 360, finalX: 500, finalY: -100 },
    { id: 14, image: sticker14, initialX: 210, initialY: 40, finalX: -640, finalY: -220 },
    { id: 15, image: sticker15, initialX: -100, initialY: 160, finalX: -400, finalY: 320 },
    { id: 16, image: sticker16, initialX: 130, initialY: -100, finalX: -600, finalY: 100 },
  ];

  const getStickerStyle = (sticker: typeof stickers[0]) => {
    const progress = scrollProgress; // Direct progress for spreading effect when closer
    const x = sticker.initialX + (sticker.finalX - sticker.initialX) * progress;
    const y = sticker.initialY + (sticker.finalY - sticker.initialY) * progress;
    const scale = 0.8 + (0.4 * progress);
    const opacity = 0.9 + (0.1 * progress);
    const rotation = progress * 20; // Add slight rotation
    
    return {
      transform: `translate(${x}px, ${y}px) scale(${scale}) rotate(${rotation}deg)`,
      opacity,
      transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
      width: '80px',
      height: '80px',
      filter: 'drop-shadow(0 4px 8px rgba(255, 105, 180, 0.3))'
    };
  };

  return (
    <section id="about" ref={sectionRef} className="min-h-screen" style={{ 
      background: isDarkMode 
        ? '#0A0F1B' 
        : 'linear-gradient(180deg, white 0%, white 40%, rgb(254 245 245) 60%, rgb(254 240 240) 100%)',
      transition: 'background 0.3s ease-in-out'
    }}>
      {/* Hero Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center max-w-6xl mx-auto">
            <div className="text-left">
              <div className="ascii-container justify-start">
                <AsciiMorphText text="Hi, I'm Layla" />
              </div>
              <div className="hero-subtitle justify-start">
                <span>I am a<TypewriterCarousel roles={roles} /></span>
              </div>
              <div className="hero-buttons">
                <button 
                  className="hero-action-btn"
                  onClick={() => {
                    window.open('/resume.pdf', '_blank');
                  }}
                >
                  Resume →
                </button>
                <Link 
                  to="/contact"
                  className="hero-action-btn"
                >
                  Contact →
                </Link>
              </div>
            </div>
            <div style={{ fontSize: '1rem', lineHeight: '1', fontFamily: 'monospace', minHeight: '200px', color: '#EABEC3' }}>
              <pre>{asciiText}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* About Section with Stickers and Journal */}
      <div className="py-12" style={{ 
        background: isDarkMode 
          ? 'transparent' 
          : 'linear-gradient(180deg, transparent 0%, rgb(254 240 240 / 0.5) 50%, rgb(254 235 235) 100%)' 
      }}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center relative min-h-[600px]">
          {/* Animated Stickers */}
          <div className="absolute inset-0 flex items-center justify-center">
            {stickers.map((sticker) => (
              <img
                key={sticker.id}
                src={sticker.image}
                alt=""
                className="absolute z-10 pointer-events-none select-none"
                style={getStickerStyle(sticker)}
              />
            ))}
          </div>
          
          {/* About Me Journal Image */}
          <div className="max-w-4xl w-full relative z-20">
            <img 
              src={aboutMeJournal}
              alt="Journal page with handwritten personal introduction and interests"
              className="w-full h-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setShowProfileModal(true)}
            />
          </div>
        </div>
      </div>
      </div>
      
      {/* Profile Modal */}
      {showProfileModal && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-50 p-4 ${isClosing ? 'animate-fadeOut' : 'animate-fadeIn'}`}
          onClick={() => {
            setIsClosing(true);
            setTimeout(() => {
              setShowProfileModal(false);
              setIsClosing(false);
            }, 300);
          }}
        >
          <div className={`relative max-w-lg ${isClosing ? 'animate-scaleOut' : 'animate-scaleIn'}`}>
            <img 
              src={profileImage}
              alt="Profile photo of Layla Le in Korea"
              className="w-full h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <p 
              className="text-center mt-4 text-gray-700 dark:text-gray-200 text-3xl font-bold"
              style={{ fontFamily: "'DK Crayonista', sans-serif" }}
            >
              me in korea
            </p>
            <button
              className="absolute top-4 right-4 text-white bg-pink-500 hover:bg-pink-600 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-90"
              onClick={(e) => {
                e.stopPropagation();
                setIsClosing(true);
                setTimeout(() => {
                  setShowProfileModal(false);
                  setIsClosing(false);
                }, 300);
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;