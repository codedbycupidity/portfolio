import { useEffect, useState, useRef } from 'react';
import { Card } from './ui/card';

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
    { id: 1, emoji: '🐰', initialX: -90, initialY: -30, finalX: -320, finalY: -120 },
    { id: 2, emoji: '🎀', initialX: 90, initialY: -20, finalX: 340, finalY: -100 },
    { id: 3, emoji: '💖', initialX: -70, initialY: 110, finalX: -280, finalY: 280 },
    { id: 4, emoji: '🌸', initialX: 100, initialY: 130, finalX: 320, finalY: 310 },
    { id: 5, emoji: '🌷', initialX: -110, initialY: 60, finalX: -380, finalY: 180 },
    { id: 6, emoji: '💕', initialX: 80, initialY: 40, finalX: 350, finalY: 140 },
    { id: 7, emoji: '✨', initialX: -50, initialY: -50, finalX: -220, finalY: -140 },
    { id: 8, emoji: '🌺', initialX: 60, initialY: 90, finalX: 260, finalY: 220 },
    { id: 9, emoji: '🎈', initialX: -30, initialY: 160, finalX: -170, finalY: 380 },
    { id: 10, emoji: '🦋', initialX: 120, initialY: 50, finalX: 420, finalY: 130 },
    { id: 11, emoji: '🧸', initialX: -140, initialY: -10, finalX: -450, finalY: -80 },
    { id: 12, emoji: '🍓', initialX: 40, initialY: -60, finalX: 180, finalY: -180 },
    { id: 13, emoji: '🌈', initialX: -20, initialY: 200, finalX: -120, finalY: 450 },
    { id: 14, emoji: '💫', initialX: 130, initialY: 10, finalX: 480, finalY: 60 },
    { id: 15, emoji: '🎪', initialX: -80, initialY: 180, finalX: -300, finalY: 420 },
    { id: 16, emoji: '🌙', initialX: 70, initialY: -40, finalX: 300, finalY: -160 },
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
    <section id="about" ref={sectionRef} className="min-h-screen py-20 bg-gradient-to-br from-pink-50 to-pink-100">
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
          
          {/* Journal */}
          <Card className="max-w-2xl p-8 bg-white shadow-2xl relative z-20 border-2 border-pink-200 rounded-3xl backdrop-blur-sm bg-white/95">
            <div className="relative">
              {/* Journal lines */}
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 15 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-px bg-muted-foreground/20 mb-6"
                    style={{ marginTop: `${i * 24 + 16}px` }}
                  />
                ))}
              </div>
              
              {/* Journal holes */}
              <div className="absolute -left-6 top-0 bottom-0 w-4 flex flex-col justify-start gap-4 pt-6">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-full bg-muted border-2 border-border"
                  />
                ))}
              </div>
              
              {/* Content */}
              <div className="relative z-10 leading-relaxed text-foreground">
                <h3 className="text-2xl font-bold mb-4 text-primary">Hello, I'm Layla!</h3>
                <p className="mb-4">
                  I'm a passionate software engineer with a love for creating innovative digital solutions. 
                  My journey in tech has been driven by curiosity and the desire to build meaningful applications 
                  that make a difference.
                </p>
                <p className="mb-4">
                  With expertise in modern web technologies, I specialize in full-stack development, 
                  bringing ideas from conception to production. I believe in writing clean, efficient code 
                  and creating user experiences that are both functional and delightful.
                </p>
                <p className="mb-4">
                  When I'm not coding, you can find me exploring new technologies, contributing to open source 
                  projects, or sharing my knowledge with the developer community.
                </p>
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground italic">
                    "Code is like humor. When you have to explain it, it's bad." - Cory House
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;