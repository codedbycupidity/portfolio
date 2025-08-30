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
import PassportBuddyIcon from '../assets/project_icons/PassportBuddyIcon.png';
import MediMateIcon from '../assets/project_icons/MediMateIcon.png';
import PortfolioIcon from '../assets/project_icons/PortfolioIcon.png';
import LioraIcon from '../assets/project_icons/LioraIcon.png';

const Projects = () => {
  const starImages = [stars1, stars2, stars3, stars4, stars5, stars6, stars7, stars8, stars9,stars10,stars11];
  const [stars, setStars] = useState<Array<{id: number; x: number; y: number; image: string; isDragging: boolean}>>([]);
  const [draggedStar, setDraggedStar] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate 30 random stars
    const generatedStars = Array.from({ length: 35 }, (_, i) => ({
      id: i,
      x: Math.random() * 90, // percentage
      y: Math.random() * 90, // percentage
      image: starImages[Math.floor(Math.random() * starImages.length)],
      isDragging: false
    }));
    setStars(generatedStars);
  }, []);

  const handleMouseDown = (e: React.MouseEvent, starId: number) => {
    e.preventDefault();
    setDraggedStar(starId);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggedStar === null || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setStars(prevStars => 
      prevStars.map(star => 
        star.id === draggedStar 
          ? { ...star, x: Math.min(95, Math.max(0, x)), y: Math.min(95, Math.max(0, y)) }
          : star
      )
    );
  };

  const handleMouseUp = () => {
    setDraggedStar(null);
  };

  const handleTouchStart = (e: React.TouchEvent, starId: number) => {
    e.preventDefault();
    setDraggedStar(starId);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (draggedStar === null || !containerRef.current) return;
    
    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((touch.clientX - rect.left) / rect.width) * 100;
    const y = ((touch.clientY - rect.top) / rect.height) * 100;
    
    setStars(prevStars => 
      prevStars.map(star => 
        star.id === draggedStar 
          ? { ...star, x: Math.min(95, Math.max(0, x)), y: Math.min(95, Math.max(0, y)) }
          : star
      )
    );
  };

  const handleTouchEnd = () => {
    setDraggedStar(null);
  };

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
      {/* Draggable Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="draggable-star"
          style={{
            position: 'absolute',
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: '40px',
            height: '40px',
            cursor: draggedStar === star.id ? 'grabbing' : 'grab',
            zIndex: draggedStar === star.id ? 5 : 1,
            transform: draggedStar === star.id ? 'scale(1.2)' : 'scale(1)',
            transition: draggedStar === star.id ? 'none' : 'transform 0.2s ease',
            userSelect: 'none',
            pointerEvents: draggedStar === star.id ? 'auto' : 'auto'
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

      <div className="container mx-auto px-6 relative z-20">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Projects</h2>
        <p className="text-center mb-12 text-lg text-gray-600">
          Here are some of the projects I've worked on recently
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-pink-100 bg-white relative z-30">
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