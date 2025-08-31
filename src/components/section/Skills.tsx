import { useEffect, useRef, useState } from "react";
import DomeGallery from "../ui/domegallery";
import { useDarkMode } from "../../contexts/DarkModeContext";

const Skills = () => {
  const [scale, setScale] = useState(0.5);
  const sectionRef = useRef<HTMLDivElement>(null);
  const domeContainerRef = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate visibility based on how centered the section is
      let visibilityRatio = 0;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const sectionHeight = rect.height;
        const sectionCenter = rect.top + sectionHeight / 2;
        const windowCenter = windowHeight / 2;
        const distanceFromCenter = Math.abs(sectionCenter - windowCenter);
        const maxDistance = windowHeight / 2 + sectionHeight / 2;

        // Smooth curve that peaks when section is centered
        visibilityRatio = 1 - (distanceFromCenter / maxDistance);
        visibilityRatio = Math.max(0, Math.min(1, visibilityRatio));

        // Apply easing curve for more natural growth
        visibilityRatio = visibilityRatio * visibilityRatio * (3 - 2 * visibilityRatio);
      }

      // Scale from 0.5 to 1 instead of 0 to 1 for better starting size
      const minScale = 0.5;
      const maxScale = 1;
      const finalScale = minScale + (maxScale - minScale) * visibilityRatio;
      setScale(finalScale);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="min-h-screen py-20" style={{
      background: isDarkMode
        ? '#0A0F1B'
        : 'linear-gradient(180deg, rgb(254 245 245) 0%, rgb(254 240 240) 50%, rgb(254 235 235) 100%)',
      transition: 'background 0.3s ease-in-out'
    }}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground dark:text-white">Skills</h2>
        <div
          ref={domeContainerRef}
          className="relative w-full"
          style={{
            height: '600px',
            transform: `scale(${scale})`,
            transformOrigin: 'center center',
            willChange: 'transform',
          }}
        >
          <DomeGallery />
          {/* Faded edges overlay with much softer blending */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: isDarkMode
                ? `radial-gradient(ellipse at center, transparent 30%, rgba(17, 24, 39, 0.05) 45%, rgba(17, 24, 39, 0.15) 60%, rgba(17, 24, 39, 0.35) 75%, rgba(17, 24, 39, 0.55) 85%, rgba(17, 24, 39, 0.75) 92%, rgba(17, 24, 39, 0.9) 100%)`
                : `radial-gradient(ellipse at center, transparent 30%, rgba(255, 255, 255, 0.05) 45%, rgba(255, 255, 255, 0.15) 60%, rgba(255, 255, 255, 0.35) 75%, rgba(255, 255, 255, 0.55) 85%, rgba(255, 255, 255, 0.75) 92%, rgba(255, 255, 255, 0.9) 100%)`,
              filter: 'blur(2px)',
              maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;