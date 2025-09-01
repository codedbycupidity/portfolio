import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { ExternalLink, Github, Heart } from 'lucide-react';
import { socialLinks } from '../../config/socialLinks';
import { lightStars, darkStars, specialStars } from '../../assets/stars';
import { PassportBuddyIcon, MediMateIcon, PortfolioIcon, LioraIcon } from '../../assets/project_icons';

const Projects = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  // track all the random background stars
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; image: string; isDragging: boolean }>>([]);
  const [draggedStar, setDraggedStar] = useState<number | null>(null);

  // the special "drag me" star that starts in top right
  const [specialStar, setSpecialStar] = useState<{ x: number; y: number }>({ x: 85, y: 7 });
  const [isDraggingSpecial, setIsDraggingSpecial] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // spawn stars when component mounts or dark mode changes
    const generatedStars = Array.from({ length: 30 }, (_, i) => {
      let x, y;

      // Keep stars away from the title and cards area (roughly 20-80% horizontally, 15-85% vertically)
      const zone = i % 4;
      if (zone === 0) {
        // top area - above the title
        x = Math.random() * 90 + 5;
        y = Math.random() * 10; // Only in top 10%
      } else if (zone === 1) {
        // bottom area - below the cards
        x = Math.random() * 90 + 5;
        y = Math.random() * 10 + 90; // Only in bottom 10%
      } else if (zone === 2) {
        // left side
        x = Math.random() * 15; // Only in left 15%
        y = Math.random() * 60 + 20; // Middle vertical area
      } else {
        // right side
        x = Math.random() * 15 + 85; // Only in right 15%
        y = Math.random() * 60 + 20; // Middle vertical area
      }

      return {
        id: i,
        x: x,
        y: y,
        image: (isDarkMode ? darkStars : lightStars)[Math.floor(Math.random() * (isDarkMode ? darkStars : lightStars).length)],
        isDragging: false
      };
    });
    setStars(generatedStars);
  }, [isDarkMode]);

  const handleMouseDown = (e: React.MouseEvent, starId: number) => {
    e.preventDefault();
    setDraggedStar(starId);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    // figure out where the mouse is as a percentage
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    // move whichever star we're dragging
    if (isDraggingSpecial) {
      setSpecialStar({ x: Math.min(95, Math.max(0, x)), y: Math.min(95, Math.max(0, y)) });
    } else if (draggedStar !== null) {
      setStars(prevStars =>
        prevStars.map(star =>
          star.id === draggedStar
            ? { ...star, x: Math.min(95, Math.max(0, x)), y: Math.min(95, Math.max(0, y)) }
            : star
        )
      );
    }
  };

  const handleMouseUp = () => {
    setDraggedStar(null);
    setIsDraggingSpecial(false);
  };

  const handleSpecialStarMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDraggingSpecial(true);
  };

  const handleTouchStart = (e: React.TouchEvent, starId: number) => {
    e.preventDefault();
    setDraggedStar(starId);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;

    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((touch.clientX - rect.left) / rect.width) * 100;
    const y = ((touch.clientY - rect.top) / rect.height) * 100;

    if (isDraggingSpecial) {
      setSpecialStar({ x: Math.min(95, Math.max(0, x)), y: Math.min(95, Math.max(0, y)) });
    } else if (draggedStar !== null) {
      setStars(prevStars =>
        prevStars.map(star =>
          star.id === draggedStar
            ? { ...star, x: Math.min(95, Math.max(0, x)), y: Math.min(95, Math.max(0, y)) }
            : star
        )
      );
    }
  };

  const handleTouchEnd = () => {
    setDraggedStar(null);
    setIsDraggingSpecial(false);
  };

  const handleSpecialStarTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsDraggingSpecial(true);
  };

  // project data - these are the main cards
  const projects = [
    {
      title: "Passport Buddy",
      description: "Enterprise travel platform combining flight tracking with social networking. Features PWA with cross-platform capabilities, 98% accurate OCR boarding pass scanning, and GraphQL real-time sync. Tested with 10,000+ users.",
      technologies: ["React.js", "Flutter", "TypeScript", "MongoDB", "Apollo Client", "GraphQL", "Docker"],
      icon: PassportBuddyIcon,
      detailsUrl: "/projects/passport-buddy",
      githubUrl: socialLinks.repositories.passportBuddy
    },
    {
      title: "Medi-Mate",
      description: "Full-stack medication reminder platform with AI-powered scheduling and prescription conflict detection. Features Pinecone vector search achieving 95% accuracy in duplicate detection, containerized microservices architecture.",
      technologies: ["React.js", "React Native", "TypeScript", "Node.js", "Express.js", "MongoDB", "Pinecone", "Docker", "OpenAI"],
      icon: MediMateIcon,
      detailsUrl: "/projects/medi-mate",
      githubUrl: socialLinks.repositories.mediMate
    },
    {
      title: "Liora",
      description: "Web-based ASL gesture recognition app with real-time hand tracking and ML capabilities. Features color-coded finger visualization, motion tracking for movement-based gestures, and personalized accuracy training.",
      technologies: ["JavaScript", "MediaPipe", "TensorFlow.js", "Python"],
      icon: LioraIcon,
      detailsUrl: "/projects/liora",
      githubUrl: socialLinks.repositories.liora
    },
    {
      title: "Personal Portfolio",
      description: "This portfolio website that you see built with React and TypeScript! Features interactive UI elements, draggable stars, smooth animations, and a clean design focused on user experience.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      icon: PortfolioIcon,
      detailsUrl: "/projects/portfolio",
      githubUrl: socialLinks.repositories.portfolio
    }
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-20 relative overflow-hidden transition-colors duration-300"
      style={{
        background: themeColors.background.gradient,
        transition: 'background 0.3s ease-in-out'
      }}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Gradient overlay for smooth transition from previous section */}
      <div 
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: '300px',
          background: isDarkMode 
            ? `linear-gradient(180deg, ${themeColors.background.gradientEnd} 0%, transparent 100%)`
            : `linear-gradient(180deg, ${themeColors.background.gradientEnd} 0%, transparent 100%)`,
          zIndex: 2
        }}
      />
      {/* Special Drag Me Star */}
      <div
        className="special-draggable-star"
        style={{
          position: 'absolute',
          left: `${specialStar.x}%`,
          top: `${specialStar.y}%`,
          width: '44px',
          height: '44px',
          zIndex: 2,
          cursor: isDraggingSpecial ? 'grabbing' : 'grab',
          transform: isDraggingSpecial ? 'scale(1.2)' : 'scale(1)',
          transition: isDraggingSpecial ? 'none' : 'transform 0.2s ease',
          userSelect: 'none',
          animation: 'twinkle 3s infinite'
        }}
        onMouseDown={handleSpecialStarMouseDown}
        onTouchStart={handleSpecialStarTouchStart}
      >
        <img
          src={isDarkMode ? specialStars.dragMeStarDark : specialStars.dragMeStar}
          alt="Drag me star"
          style={{
            width: '100%',
            height: '100%',
            pointerEvents: 'none'
          }}
          draggable={false}
          loading="lazy"
          width="44"
          height="44"
        />
      </div>

      {/* Static "drag me!" text with arrow */}
      <div
        style={{
          position: 'absolute',
          left: '85%',
          top: '5%',
          zIndex: 3,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          pointerEvents: 'none'
        }}
      >
        <img
          src={isDarkMode ? specialStars.arrowDark : specialStars.arrow}
          alt="Arrow"
          style={{
            width: '45px',
            height: '45px',
            marginLeft: '40px'
          }}
          draggable={false}
          loading="lazy"
          width="45"
          height="45"
        />
        <span
          style={{
            fontFamily: "'DK Crayonista', cursive",
            fontSize: '35px',
            color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.special.dragMe,
            fontWeight: 'bold',
            userSelect: 'none',
            textShadow: `1px 1px 2px ${themeColors.effects.textShadow}`
          }}
        >
          drag me!
        </span>
      </div>

      {/* all the regular draggable stars scattered around */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="draggable-star"
          style={{
            position: 'absolute',
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: '50px',
            height: '50px',
            cursor: draggedStar === star.id ? 'grabbing' : 'grab',
            zIndex: draggedStar === star.id ? 5 : 1,  // keep stars behind content
            transform: draggedStar === star.id ? 'scale(1.2)' : 'scale(1)',
            transition: draggedStar === star.id ? 'none' : 'transform 0.2s ease',
            userSelect: 'none'
          }}
          onMouseDown={(e) => handleMouseDown(e, star.id)}
          onTouchStart={(e) => handleTouchStart(e, star.id)}
        >
          <img
            src={star.image}
            alt="Star"
            style={{
              width: '100%',
              height: '100%',
              pointerEvents: 'none'
            }}
            draggable={false}
            loading="lazy"
            width="50"
            height="50"
          />
        </div>
      ))}

      {/* main content container with the project cards */}
      <TooltipProvider delayDuration={200}>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center justify-center gap-1 mb-4">
            <h2 className="text-4xl font-bold" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>Projects</h2>
            <Tooltip>
              <TooltipTrigger asChild>
                <button 
                  className="inline-flex items-center justify-center bg-transparent border-none outline-none focus:outline-none" 
                  style={{ minWidth: '44px', minHeight: '44px' }}
                  aria-label="Information about project icons"
                >
                  <Heart
                    className="h-5 w-5 cursor-pointer transition-colors"
                    style={{ color: themeColors.primary }}
                    onMouseEnter={(e) => e.currentTarget.style.color = themeColors.secondary}
                    onMouseLeave={(e) => e.currentTarget.style.color = themeColors.primary}
                    fill="none"
                  />
                </button>
              </TooltipTrigger>
              <TooltipContent className="bg-white text-gray-800 border-pink-200">
                <p>all favicons created by me!</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <p className="text-center mb-12 text-lg text-gray-600 dark:text-gray-300">
            Here are some of the projects I've worked on recently
          </p>

          {/* grid layout for project cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative" style={{
                backgroundColor: themeColors.card.background,
                border: `1px solid ${themeColors.card.border}`
              }} aria-label={`${project.title} project`}>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    {project.icon && (
                      <img
                        src={project.icon}
                        alt={`${project.title} icon`}
                        className="w-12 h-12 rounded-lg object-cover"
                        loading="lazy"
                        width="48"
                        height="48"
                      />
                    )}
                    <div className="flex-1">
                      <CardTitle className="text-xl dark:text-gray-100 transition-colors group-hover:!text-pink-500 dark:group-hover:!text-pink-400">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300 mt-2">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs"
                        style={{
                          backgroundColor: themeColors.interactive.primary,
                          color: themeColors.text.accent,
                          borderColor: themeColors.primary,
                          border: '1px solid'
                        }}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Link to={project.detailsUrl} className="project-btn flex items-center gap-1" style={{ textDecoration: 'none', color: 'white' }} aria-label={`View ${project.title} project details`}>
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      Details
                    </Link>
                    <a href={project.githubUrl} className="project-btn-outline flex items-center gap-1" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source code on GitHub`}>
                      <Github className="h-4 w-4" aria-hidden="true" />
                      Code
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </TooltipProvider>
      
      {/* Gradient overlay for smooth transition to next section */}
      <div 
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '300px',
          background: isDarkMode 
            ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
            : `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`,
          zIndex: 1
        }}
      />
    </section>
  );
};

export default Projects;