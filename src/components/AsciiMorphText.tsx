import { useEffect, useRef } from 'react';

interface AsciiMorphTextProps {
  text: string;
}

const AsciiMorphText: React.FC<AsciiMorphTextProps> = ({ text }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chars = '!<>-_\\/[]{}—=+*^?#________';
    const letters = text.split('');
    
    if (!containerRef.current) return;
    
    // Clear container
    containerRef.current.innerHTML = '';
    
    // Create spans for each letter
    letters.forEach((letter) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.opacity = '0';
      span.style.display = 'inline-block';
      span.style.minWidth = letter === ' ' ? '0.3em' : 'auto';
      containerRef.current?.appendChild(span);
    });
    
    const spans = containerRef.current.querySelectorAll('span');
    
    // Animate each letter
    spans.forEach((span, index) => {
      const letter = letters[index];
      let iterations = 0;
      
      setTimeout(() => {
        const interval = setInterval(() => {
          if (iterations < 10) {
            span.textContent = chars[Math.floor(Math.random() * chars.length)];
            span.style.opacity = '1';
            span.style.color = '#C88B95'; // Darker dusty pink
          } else {
            span.textContent = letter;
            span.style.opacity = '1';
            span.style.color = '#EABEC3'; // Dusty pink
            clearInterval(interval);
          }
          iterations++;
        }, 50);
      }, index * 100); // Stagger the animation
    });
  }, [text]);

  return (
    <div 
      ref={containerRef}
      className="ascii-morph-text"
      style={{
        fontSize: 'clamp(2rem, 8vw, 5rem)',
        fontWeight: 'bold',
        fontFamily: 'monospace',
        letterSpacing: '0.05em',
        textAlign: 'center',
        margin: '2rem 0',
        textShadow: '0 0 20px rgba(255, 194, 209, 0.5)',
      }}
    />
  );
};

export default AsciiMorphText;