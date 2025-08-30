import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import stars1 from '../assets/stars/stars_1.PNG';
import stars2 from '../assets/stars/stars_2.PNG';
import stars3 from '../assets/stars/stars_3.PNG';
import stars4 from '../assets/stars/stars_4.PNG';
import stars5 from '../assets/stars/stars_5.PNG';
import stars6 from '../assets/stars/stars_6.PNG';
import stars7 from '../assets/stars/stars_7.PNG';
import stars8 from '../assets/stars/stars_8.PNG';
import stars9 from '../assets/stars/stars_9.PNG';
import stars10 from '../assets/stars/stars_10.PNG';
import stars11 from '../assets/stars/stars_11.PNG';
import dragMeStar from '../assets/stars/drag_me_star.PNG';
import arrow from '../assets/stars/arrow.PNG';
import PassportBuddyIcon from '../assets/project_icons/PassportBuddyIcon.png';
import MediMateIcon from '../assets/project_icons/MediMateIcon.png';
import PortfolioIcon from '../assets/project_icons/PortfolioIcon.png';
import LioraIcon from '../assets/project_icons/LioraIcon.png';

const Projects = () => {
  // all the star images we can randomly pick from
  const starImages = [stars1, stars2, stars3, stars4, stars5, stars6, stars7, stars8, stars9,stars10,stars11];
  
  // track all the random background stars
  const [stars, setStars] = useState<Array<{id: number; x: number; y: number; image: string; isDragging: boolean}>>([]);
  const [draggedStar, setDraggedStar] = useState<number | null>(null);
  
  // the special "drag me" star that starts in top right
  const [specialStar, setSpecialStar] = useState<{x: number; y: number}>({ x: 85, y: 6});
  const [isDraggingSpecial, setIsDraggingSpecial] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // spawn stars when component mounts
    const generatedStars = Array.from({ length: 30 }, (_, i) => {
      let x, y;
      
      // trying to keep stars out of the middle where the cards are
      const zone = i % 4;
      if (zone === 0) {
        // top area
        x = Math.random() * 85 + 5;
        y = Math.random() * 25;
      } else if (zone === 1) {
        // bottom area
        x = Math.random() * 85 + 5;
        y = Math.random() * 25 + 65;
      } else if (zone === 2) {
        // sides
        x = Math.random() < 0.5 ? Math.random() * 20 : Math.random() * 20 + 70;
        y = Math.random() * 90;
      } else {
        // wherever but not dead center
        x = Math.random() * 90;
        y = Math.random() * 90;
        // push em away if they're too close to middle
        if (x > 30 && x < 60) {
          x = Math.random() < 0.5 ? x - 20 : x + 20;
        }
      }
      
      return {
        id: i,
        x: x,
        y: y,
        image: starImages[Math.floor(Math.random() * starImages.length)],
        isDragging: false
      };
    });
    setStars(generatedStars);
  }, []);

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
      description: "Enterprise travel platform combining flight tracking with social networking. Features PWA with offline capabilities, 98% accurate OCR boarding pass scanning, and GraphQL real-time sync. Tested with 10,000+ users.",
      technologies: ["React.js", "Flutter", "TypeScript", "MongoDB", "Apollo Client", "GraphQL", "Docker"],
      icon: PassportBuddyIcon,
      detailsUrl: "/projects/passport-buddy",
      githubUrl: "#"
    },
    {
      title: "Medi-Mate",
      description: "Full-stack medication reminder platform with AI-powered scheduling and prescription conflict detection. Features Pinecone vector search achieving 95% accuracy in duplicate detection, containerized microservices architecture.",
      technologies: ["React.js", "React Native", "TypeScript", "Node.js", "Express.js", "MongoDB", "Pinecone", "Docker", "OpenAI"],
      icon: MediMateIcon,
      detailsUrl: "/projects/medi-mate",
      githubUrl: "#"
    },
    {
      title: "Liora",
      description: "Web-based ASL gesture recognition app with real-time hand tracking and ML capabilities. Features color-coded finger visualization, motion tracking for movement-based gestures, and personalized accuracy training.",
      technologies: ["JavaScript", "MediaPipe", "TensorFlow.js", "Python"],
      icon: LioraIcon,
      detailsUrl: "/projects/liora",
      githubUrl: "#"
    },
    {
      title: "Portfolio Website",
      description: "This portfolio website that you see built with React and TypeScript! Features interactive UI elements, draggable stars, smooth animations, and a clean design focused on user experience.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      icon: PortfolioIcon,
      detailsUrl: "/projects/portfolio",
      githubUrl: "#"
    }
  ];

  return (
    <section 
      id="projects" 
      className="min-h-screen py-20 bg-gradient-to-b from-pink-100/50 via-pink-50/30 to-pink-100/50 relative overflow-hidden"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Special Drag Me Star */}
      <div
        className="special-draggable-star"
        style={{
          position: 'absolute',
          left: `${specialStar.x}%`,
          top: `${specialStar.y}%`,
          width: '35px',
          height: '35px',
          zIndex: 45,
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
          src={dragMeStar} 
          alt="Drag me star" 
          style={{
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            filter: 'drop-shadow(0 2px 4px rgba(255, 182, 193, 0.4))'
          }}
          draggable={false}
        />
      </div>
      
      {/* Static "drag me!" text with arrow */}
      <div
        style={{
          position: 'absolute',
          left: '85%',
          top: '5%',
          zIndex: 9,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          pointerEvents: 'none'
        }}
      >
        <img 
          src={arrow} 
          alt="Arrow" 
          style={{
            width: '30px',
            height: '30px',
            marginLeft: '40px'
          }}
          draggable={false}
        />
        <span 
          style={{
            fontFamily: "'DK Crayonista', cursive",
            fontSize: '26px',
            color: '#ec4899',
            fontWeight: 'bold',
            userSelect: 'none',
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
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
            zIndex: draggedStar === star.id ? 50 : 40,  // bring to front when dragging
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
              pointerEvents: 'none',
              filter: 'drop-shadow(0 2px 4px rgba(255, 182, 193, 0.4))'
            }}
            draggable={false}
          />
        </div>
      ))}

      {/* main content container with the project cards */}
      <div className="container mx-auto px-6 relative">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Projects</h2>
        <p className="text-center mb-12 text-lg text-gray-600">
          Here are some of the projects I've worked on recently
        </p>
        
        {/* grid layout for project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-pink-100 bg-white relative">
              <CardHeader>
                <div className="flex items-start gap-3">
                  {project.icon && (
                    <img 
                      src={project.icon} 
                      alt={`${project.title} icon`}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  )}
                  <div className="flex-1">
                    <CardTitle className="text-xl group-hover:text-pink-500 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 mt-2">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs bg-pink-50 text-pink-700 border-pink-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Link to={project.detailsUrl} className="project-btn flex items-center gap-1">
                    <ExternalLink className="h-4 w-4" />
                    Details
                  </Link>
                  <a href={project.githubUrl} className="project-btn-outline flex items-center gap-1">
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;