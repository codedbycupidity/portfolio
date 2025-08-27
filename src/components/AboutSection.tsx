import { useEffect, useState, useRef } from 'react';
import AsciiMorphText from './AsciiMorphText';
import TypewriterCarousel from './TypewriterCarousel';
import journalImage from '../assets/journal.PNG';
import profileImage from '../assets/profile.PNG';
import koreaStamp from '../assets/korea_stamp.PNG';
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
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const roles = [
    'Software Engineer',
    'Full-Stack Developer',
    'Game Developer',
  ];

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
    <section id="home" ref={sectionRef} className="min-h-screen">
      {/* Hero Section - Separate Div */}
      <div className="bg-white py-20 ">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center max-w-6xl mx-auto">
            <div className="text-left">
              <div className="ascii-container justify-start">
                <AsciiMorphText text="Hi, I'm Layla" />
              </div>
              <div className="hero-subtitle justify-start">
                <span>I am a&nbsp;<TypewriterCarousel roles={roles} /></span>
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
                <button 
                  className="hero-action-btn"
                  onClick={() => {
                    window.location.href = '/contact';
                  }}
                >
                  Contact →
                </button>
              </div>
            </div>
            <div className="text-pink-300" style={{ fontSize: '1rem', lineHeight: '1', fontFamily: 'monospace' }}>
              <pre>
{`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢠⡾⠲⠶⣤⣀⣠⣤⣤⣤⡿⠛⠿⡴⠾⠛⢻⡆⠀⠀⠀
⠀⠀⠀⣼⠁⠀⠀⠀⠉⠁⠀⢀⣿⠐⡿⣿⠿⣶⣤⣤⣷⡀⠀⠀
⠀⠀⠀⢹⡶⠀⠀⠀⠀⠀⠀⠈⢯⣡⣿⣿⣀⣰⣿⣦⢂⡏⠀⠀
⠀⠀⢀⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠹⣍⣭⣾⠁⠀⠀
⠀⣀⣸⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣸⣧⣤⡀
⠈⠉⠹⣏⡁⠀⢸⣿⠀⠀⠀⢀⡀⠀⠀⠀⣿⠆⠀⢀⣸⣇⣀⠀
⠀⠐⠋⢻⣅⡄⢀⣀⣀⡀⠀⠯⠽⠂⢀⣀⣀⡀⠀⣤⣿⠀⠉⠀
⠀⠀⠴⠛⠙⣳⠋⠉⠉⠙⣆⠀⠀⢰⡟⠉⠈⠙⢷⠟⠈⠙⠂⠀
⠀⠀⠀⠀⠀⢻⣄⣠⣤⣴⠟⠛⠛⠛⢧⣤⣤⣀⡾⠀⠀⠀⠀⠀`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* About Section with Stickers and Journal */}
      <div className="bg-gradient-to-b from-pink-50 via-pink-100 to-pink-100/50 py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center relative min-h-[600px]">
          {/* Animated Stickers */}
          <div className="absolute inset-0 flex items-center justify-center">
            {stickers.map((sticker) => (
              <img
                key={sticker.id}
                src={sticker.image}
                alt={`Sticker ${sticker.id}`}
                className="absolute z-10 pointer-events-none select-none"
                style={getStickerStyle(sticker)}
              />
            ))}
          </div>
          
          {/* Journal with PNG background */}
          <div 
            className="max-w-4xl w-full relative z-20 rounded-lg overflow-hidden"
            style={{
              backgroundImage: `url(${journalImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              minHeight: '550px'
            }}
          >
            {/* Content overlay */}
            <div className="relative p-8 md:p-12 flex items-center justify-between min-h-[600px]">
              {/* Korea stamp overlapping profile */}
              <div className="absolute left-16 md:left-20 top-[10%] z-0">
                <img 
                  src={koreaStamp}
                  alt="Korea stamp"
                  className="w-20 h-20 md:w-24 md:h-24 object-contain"
                  style={{
                    transform: 'rotate(-30deg)',
                    opacity: 0.8
                  }}
                />
              </div>
              
              {/* Profile image on the left */}
              <div className="absolute left-8 md:left-12 top-1/2">
                <img 
                  src={profileImage}
                  alt="Layla's profile"
                  className="w-80 h-80 md:w-96 md:h-96 rounded-lg object-contain"
                  style={{
                    transform: 'translateY(-50%) rotate(-5deg)',
                    filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))'
                  }}
                />
              </div>
              
              {/* Text on the right */}
              <div className="max-w-xs w-full ml-auto -mt-8">
                <div className="space-y-2 text-gray-800" style={{ fontFamily: "'DK Crayonista', sans-serif", fontWeight: 'bold' }}>
                  <h3 className="text-5xl font-extrabold text-pink-600" style={{ fontFamily: "'DK Crayonista', sans-serif" }}>hi!</h3>
                  <p className="text-2xl leading-relaxed font-bold">
                   I’m a software engineer and Computer Science student at the University of Central Florida, 
                   passionate about developing innovative technologies that 
                   make a real impact and are built to be used.
                  </p>
                  <p className="text-2xl leading-relaxed font-bold">
                    When I’m not programming, you’ll probably find me traveling the world, 
                    designing pixel art, or being a cat mom :) 
                  </p>
                
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutSection;