import AsciiMorphText from './AsciiMorphText';

const Hero = () => {
  return (
    <section id="home" className="section hero-section">
      <div className="section-content hero-content">
        <div className="ascii-container">
          <AsciiMorphText text="Hi, I'm Layla" />
        </div>
        <p className="hero-subtitle">Software Engineer & Full-Stack Developer</p>
        <p className="hero-description">
          Welcome to my portfolio! Scroll down to learn more about me.
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