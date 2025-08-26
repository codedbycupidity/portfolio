import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';
import AsciiTextAnimation from './AsciiTextAnimation';
import AsciiMorphText from './AsciiMorphText';

const LandingSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-pink-100">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* ASCII Art Name Animation */}
          <div className="mb-8">
            <AsciiTextAnimation text="Layla" />
            <AsciiMorphText text="Le" />
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Software Engineer crafting digital experiences with passion and precision
          </p>
          
          <div className="flex gap-4 justify-center mb-12">
            <Button size="lg" onClick={scrollToAbout} className="bg-pink-500 hover:bg-pink-600">
              Explore My Work
            </Button>
            <Button variant="outline" size="lg" className="border-pink-300 text-pink-600 hover:bg-pink-50">
              Download Resume
            </Button>
          </div>
          
          <div className="animate-bounce">
            <ChevronDown 
              className="h-8 w-8 text-pink-400 mx-auto cursor-pointer hover:text-pink-600 transition-colors"
              onClick={scrollToAbout}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;