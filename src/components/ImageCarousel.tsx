import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';
import { useThemeColors } from '../hooks/useThemeColors';

interface ImageCarouselProps {
  images: string[];
  projectName: string;
}

const ImageCarousel = ({ images, projectName }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="rounded-lg shadow-lg p-8 mb-8" style={{ backgroundColor: themeColors.card.background }}>
      <h2 className="text-2xl font-semibold mb-6" style={{ color: themeColors.text.primary }}>Project Screenshots</h2>
      
      <div className="relative">
        {/* Main Image Display with Sliding Animation */}
        <div className="relative aspect-video rounded-lg overflow-hidden" style={{ backgroundColor: isDarkMode ? themeColors.colors.dark[900] : themeColors.colors.dark[100] }}>
          <div 
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`${projectName} screenshot ${index + 1}`}
                className="w-full h-full object-cover flex-shrink-0"
                loading="lazy"
                width="800"
                height="600"
              />
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-300" 
            style={{ 
              backgroundColor: themeColors.button.secondary.background,
              color: themeColors.button.secondary.text
            } as React.CSSProperties}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-300" 
            style={{ 
              backgroundColor: themeColors.button.secondary.background,
              color: themeColors.button.secondary.text
            } as React.CSSProperties}
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-0 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 flex items-center justify-center`}
              style={{ 
                minWidth: '44px',
                minHeight: '44px',
                padding: '0',
                backgroundColor: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              } as React.CSSProperties}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span 
                className="rounded-full transition-all"
                style={{
                  width: index === currentIndex ? '32px' : '12px',
                  height: '12px',
                  backgroundColor: index === currentIndex ? themeColors.primary : themeColors.interactive.primary
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;