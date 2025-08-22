import { useEffect, useState } from 'react';
import figlet from 'figlet';
// @ts-ignore
import standard from 'figlet/importable-fonts/Standard.js';

interface AsciiTextAnimationProps {
  text: string;
}

const AsciiTextAnimation: React.FC<AsciiTextAnimationProps> = ({ text }) => {
  const [asciiText, setAsciiText] = useState<string>('');
  const [displayText, setDisplayText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    figlet.parseFont('Standard', standard);
    
    figlet.text(
      text,
      {
        font: 'Standard',
      },
      (err, data) => {
        if (err) {
          console.error('Error generating ASCII text:', err);
          return;
        }
        if (data) {
          setAsciiText(data);
        }
      }
    );
  }, [text]);

  useEffect(() => {
    if (asciiText && currentIndex < asciiText.length) {
      const timer = setTimeout(() => {
        setDisplayText(asciiText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 20); // Adjust speed here (lower = faster)
      
      return () => clearTimeout(timer);
    }
  }, [asciiText, currentIndex]);

  return (
    <pre className="ascii-text">
      {displayText}
      <span className="cursor">_</span>
    </pre>
  );
};

export default AsciiTextAnimation;