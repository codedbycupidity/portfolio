import React from 'react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, Pill, Brain, Bell, Shield } from 'lucide-react';
import MediMateIcon from '../../assets/project_icons/MediMateIcon.png';
import ImageCarousel from '../../components/ImageCarousel';
import comingSoon from '../../assets/coming_soon.png';

const MediMate = () => {
  const { isDarkMode } = useDarkMode();
  
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Using coming soon image as placeholder - replace with actual project screenshots
  const projectImages = [
    comingSoon,
    comingSoon,
    comingSoon,
    comingSoon,
    comingSoon,
  ];

  return (
    <div className="min-h-screen py-20 transition-colors duration-300" style={{ backgroundColor: isDarkMode ? '#0A0F1B' : 'rgb(254 245 245)' }}>
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back Button */}
        <Link to="/#projects" className="inline-flex items-center gap-2 hover:opacity-80 mb-8 transition-colors" style={{ color: isDarkMode ? "#EABEC3" : "rgb(190, 24, 93)" }}>
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Projects</span>
        </Link>

        {/* Project Header */}
        <div className="rounded-lg shadow-lg p-8 mb-8" style={{ backgroundColor: isDarkMode ? "rgb(31, 41, 55)" : "white" }}>
          <div className="flex items-start gap-6 mb-6">
            <img src={MediMateIcon} alt="Medi-Mate" className="w-24 h-24 rounded-lg" />
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2" style={{ color: isDarkMode ? "white" : "rgb(31, 41, 55)" }}>MediMate</h1>
              <p className="text-lg" style={{ color: isDarkMode ? "white" : "rgb(75, 85, 99)" }}>Comprehensive Medication Management Platform</p>
              <div className="flex gap-4 mt-4">
                <a 
                  href="https://github.com/cupidtiy/medi-mate" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg hover:opacity-80 transition-colors"
                  style={{ 
                    backgroundColor: isDarkMode ? "rgba(234, 190, 195, 0.2)" : "rgb(252, 231, 243)",
                    color: isDarkMode ? "#EABEC3" : "rgb(190, 24, 93)"
                  }}
                >
                  <Github className="h-4 w-4" />
                  View Code
                </a>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="border-t pt-6" style={{ borderColor: isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)" }}>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: isDarkMode ? "white" : "rgb(31, 41, 55)" }}>Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Brain className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold" style={{ color: isDarkMode ? "#FDD5DF" : "rgb(55, 65, 81)" }}>AI-Powered Scheduling</h3>
                  <p className=" text-sm" style={{ color: isDarkMode ? "white" : "rgb(75, 85, 99)" }}>OpenAI integration for optimal reminder times</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold" style={{ color: isDarkMode ? "#FDD5DF" : "rgb(55, 65, 81)" }}>Vector Database</h3>
                  <p className=" text-sm" style={{ color: isDarkMode ? "white" : "rgb(75, 85, 99)" }}>Pinecone-powered duplicate detection with 85% threshold</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Pill className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold" style={{ color: isDarkMode ? "#FDD5DF" : "rgb(55, 65, 81)" }}>Cross-Platform Support</h3>
                  <p className=" text-sm" style={{ color: isDarkMode ? "white" : "rgb(75, 85, 99)" }}>Web, iOS, and Android apps from shared codebase</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Bell className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold" style={{ color: isDarkMode ? "#FDD5DF" : "rgb(55, 65, 81)" }}>Microservices Architecture</h3>
                  <p className=" text-sm" style={{ color: isDarkMode ? "white" : "rgb(75, 85, 99)" }}>Docker containerized with Nginx reverse proxy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Carousel */}
        <ImageCarousel images={projectImages} projectName="Medi-Mate" />

        {/* Project Overview */}
        <div className="rounded-lg shadow-lg p-8 mb-8" style={{ backgroundColor: isDarkMode ? "rgb(31, 41, 55)" : "white" }}>
          <h2 className="text-2xl font-semibold mb-4" style={{ color: isDarkMode ? "white" : "rgb(31, 41, 55)" }}>Project Overview</h2>
          <p className=" leading-relaxed mb-4" style={{ color: isDarkMode ? "white" : "rgb(75, 85, 99)" }}>
            MediMate is a comprehensive fullstack medication reminder application with web and mobile interfaces, helping users 
            manage their medication schedules effectively. Built with a microservices architecture, it combines a Node.js/Express 
            backend API, React web frontend, and React Native mobile app, all sharing common TypeScript types and utilities.
          </p>
          <p className=" leading-relaxed mb-4" style={{ color: isDarkMode ? "white" : "rgb(75, 85, 99)" }}>
            The platform features advanced AI integration through OpenAI for smart medication scheduling that considers user 
            routines, medication requirements, and medical best practices. Pinecone vector database powers the intelligent 
            duplicate detection system, converting medication data into semantic vectors for similarity search with an 85% 
            threshold, detecting duplicates even with text variations.
          </p>
          <p className=" leading-relaxed" style={{ color: isDarkMode ? "white" : "rgb(75, 85, 99)" }}>
            The architecture leverages Docker Compose for orchestration, with services including MongoDB for data persistence, 
            Redis for caching, and Nginx as a reverse proxy. The shared package architecture ensures type safety across all 
            platforms while the modular design allows independent scaling of each service.
          </p>
        </div>

        {/* Technical Stack */}
        <div className="rounded-lg shadow-lg p-8 mb-8" style={{ backgroundColor: isDarkMode ? "rgb(31, 41, 55)" : "white" }}>
          <h2 className="text-2xl font-semibold mb-4" style={{ color: isDarkMode ? "white" : "rgb(31, 41, 55)" }}>Technical Stack</h2>
          <div className="flex flex-wrap gap-3">
            {["React.js", "React Native", "TypeScript", "Node.js", "Express.js", "MongoDB", "Pinecone", "Docker", "OpenAI", "Redis", "Nginx", "Tailwind CSS"].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: isDarkMode ? "rgba(234, 190, 195, 0.2)" : "rgb(254, 242, 242)", color: isDarkMode ? "#EABEC3" : "rgb(190, 24, 93)" }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Technical Highlights */}
        <div className="rounded-lg shadow-lg p-8" style={{ backgroundColor: isDarkMode ? "rgb(31, 41, 55)" : "white" }}>
          <h2 className="text-2xl font-semibold mb-4" style={{ color: isDarkMode ? "white" : "rgb(31, 41, 55)" }}>Technical Highlights</h2>
          <ul className="space-y-3" style={{ color: isDarkMode ? "white" : "rgb(75, 85, 99)" }}>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span>Architected fullstack application with shared TypeScript types across web, mobile, and backend platforms</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span>Integrated Pinecone vector database for semantic medication matching with 85% similarity threshold</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span>Implemented OpenAI-powered batch optimization for medication scheduling based on user routines</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span>Orchestrated microservices with Docker Compose including MongoDB, Redis, and Nginx services</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span>Built RESTful API following conventions with user-isolated namespaces for data security</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span>Developed comprehensive testing suite with coverage reporting and type checking</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MediMate;