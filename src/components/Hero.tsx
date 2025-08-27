import AsciiMorphText from './AsciiMorphText';
import TypewriterCarousel from './TypewriterCarousel';

const Hero = () => {
  const roles = [
    'Software Engineer',
    'Full-Stack Developer',
    'Game Developer',
  ];

  return (
    <section id="home" className="section hero-section">
      <div className="section-content hero-content">
        <div className="ascii-container">
          <AsciiMorphText text="Hi, I'm Layla" />
        </div>
        <div className="hero-subtitle">
          <span>I am a <TypewriterCarousel roles={roles} /></span>
        </div>
        <p className="hero-description">
        </p>
        <button 
          className="scroll-down-btn"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          ↓ Explore
        </button>
      </div>
    </section>
  );
};

export default Hero;