import { useEffect, useState, useRef } from 'react';
import journalImage from '../assets/journal.PNG';

const AboutSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    { id: 1, emoji: '🐰', initialX: -250, initialY: -100, finalX: -800, finalY: -400 },
    { id: 2, emoji: '🎀', initialX: 250, initialY: -80, finalX: 850, finalY: -350 },
    { id: 3, emoji: '💖', initialX: -220, initialY: 280, finalX: -750, finalY: 200 },
    { id: 4, emoji: '🌸', initialX: 260, initialY: 300, finalX: 800, finalY: 250 },
    { id: 5, emoji: '🌷', initialX: -280, initialY: 150, finalX: -700, finalY: -50 },
    { id: 6, emoji: '💕', initialX: 240, initialY: 120, finalX: 750, finalY: 50 },
    { id: 7, emoji: '✨', initialX: -200, initialY: -150, finalX: -650, finalY: -250 },
    { id: 8, emoji: '🌺', initialX: 220, initialY: 240, finalX: 700, finalY: 150 },
    { id: 9, emoji: '🎈', initialX: -160, initialY: 350, finalX: -600, finalY: 350 },
    { id: 10, emoji: '🦋', initialX: 280, initialY: 140, finalX: 650, finalY: -100 },
    { id: 11, emoji: '🧸', initialX: -300, initialY: -50, finalX: -550, finalY: -150 },
    { id: 12, emoji: '🍓', initialX: 180, initialY: -200, finalX: 600, finalY: -200 },
    { id: 13, emoji: '🌈', initialX: -140, initialY: 400, finalX: -500, finalY: 450 },
    { id: 14, emoji: '💫', initialX: 290, initialY: 50, finalX: 550, finalY: 400 },
    { id: 15, emoji: '🎪', initialX: -240, initialY: 380, finalX: -450, finalY: 100 },
    { id: 16, emoji: '🌙', initialX: 230, initialY: -120, finalX: 500, finalY: -450 },
  ];

  const getStickerStyle = (sticker: typeof stickers[0]) => {
    const progress = scrollProgress; // Direct progress for spreading effect when closer
    const x = sticker.initialX + (sticker.finalX - sticker.initialX) * progress;
    const y = sticker.initialY + (sticker.finalY - sticker.initialY) * progress;
    const scale = 1.2 + (0.8 * progress);
    const opacity = 0.9 + (0.1 * progress);
    const rotation = progress * 20; // Add slight rotation
    
    return {
      transform: `translate(${x}px, ${y}px) scale(${scale}) rotate(${rotation}deg)`,
      opacity,
      transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
      fontSize: '3rem',
      textShadow: '3px 3px 8px rgba(255, 182, 193, 0.8), 0 0 15px rgba(255, 20, 147, 0.4)',
      filter: 'drop-shadow(0 4px 8px rgba(255, 105, 180, 0.3))'
    };
  };

  return (
    <section id="about" ref={sectionRef} className="min-h-screen py-20 bg-gradient-to-b from-pink-50 via-pink-100 to-pink-100/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">About Me</h2>
        
        <div className="flex items-center justify-center relative min-h-[600px]">
          {/* Animated Stickers */}
          <div className="absolute inset-0 flex items-center justify-center">
            {stickers.map((sticker) => (
              <div
                key={sticker.id}
                className="absolute z-10 pointer-events-none select-none"
                style={getStickerStyle(sticker)}
              >
                {sticker.emoji}
              </div>
            ))}
          </div>
          
          {/* Journal with PNG background */}
          <div 
            className="max-w-6xl w-full relative z-20 rounded-lg overflow-hidden"
            style={{
              backgroundImage: `url(${journalImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              minHeight: '600px'
            }}
          >
            {/* Content overlay - positioned on the right */}
            <div className="relative p-8 md:p-12 flex items-center justify-end min-h-[800px]">
              <div className="max-w-md w-full mr-4 md:mr-8">
                <div className="space-y-6 text-gray-800">
                  <h3 className="text-3xl font-bold mb-6 text-pink-600">Hello, I'm Layla!</h3>
                  <p className="text-lg leading-relaxed">
                    I'm a passionate software engineer with a love for creating innovative digital solutions. 
                    My journey in tech has been driven by curiosity and the desire to build meaningful applications 
                    that make a difference.
                  </p>
                  <p className="text-lg leading-relaxed">
                    With expertise in modern web technologies, I specialize in full-stack development, 
                    bringing ideas from conception to production. I believe in writing clean, efficient code 
                    and creating user experiences that are both functional and delightful.
                  </p>
                  <p className="text-lg leading-relaxed">
                    When I'm not coding, you can find me exploring new technologies, contributing to open source 
                    projects, or sharing my knowledge with the developer community.
                  </p>
                 
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