import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, Pill, Brain, Bell, Shield } from 'lucide-react';
import MediMateIcon from '../../assets/project_icons/MediMateIcon.png';
import ImageCarousel from '../../components/ImageCarousel';
import comingSoon from '../../assets/coming_soon.png';

const MediMate = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back Button */}
        <Link to="/#projects" className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 mb-8 transition-colors">
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Projects</span>
        </Link>

        {/* Project Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-start gap-6 mb-6">
            <img src={MediMateIcon} alt="Medi-Mate" className="w-24 h-24 rounded-lg" />
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">MediMate</h1>
              <p className="text-lg text-gray-600">Comprehensive Medication Management Platform</p>
              <div className="flex gap-4 mt-4">
                <a 
                  href="https://github.com/cupidtiy/medi-mate" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-700 rounded-lg hover:bg-pink-200 transition-colors"
                >
                  <Github className="h-4 w-4" />
                  View Code
                </a>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="border-t pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Brain className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-700">AI-Powered Scheduling</h3>
                  <p className="text-gray-600 text-sm">OpenAI integration for optimal reminder times</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-700">Vector Database</h3>
                  <p className="text-gray-600 text-sm">Pinecone-powered duplicate detection with 85% threshold</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Pill className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-700">Cross-Platform Support</h3>
                  <p className="text-gray-600 text-sm">Web, iOS, and Android apps from shared codebase</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Bell className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-700">Microservices Architecture</h3>
                  <p className="text-gray-600 text-sm">Docker containerized with Nginx reverse proxy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Carousel */}
        <ImageCarousel images={projectImages} projectName="Medi-Mate" />

        {/* Project Overview */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            MediMate is a comprehensive fullstack medication reminder application with web and mobile interfaces, helping users 
            manage their medication schedules effectively. Built with a microservices architecture, it combines a Node.js/Express 
            backend API, React web frontend, and React Native mobile app, all sharing common TypeScript types and utilities.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The platform features advanced AI integration through OpenAI for smart medication scheduling that considers user 
            routines, medication requirements, and medical best practices. Pinecone vector database powers the intelligent 
            duplicate detection system, converting medication data into semantic vectors for similarity search with an 85% 
            threshold, detecting duplicates even with text variations.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The architecture leverages Docker Compose for orchestration, with services including MongoDB for data persistence, 
            Redis for caching, and Nginx as a reverse proxy. The shared package architecture ensures type safety across all 
            platforms while the modular design allows independent scaling of each service.
          </p>
        </div>

        {/* Technical Stack */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technical Stack</h2>
          <div className="flex flex-wrap gap-3">
            {["React.js", "React Native", "TypeScript", "Node.js", "Express.js", "MongoDB", "Pinecone", "Docker", "OpenAI", "Redis", "Nginx", "Tailwind CSS"].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-pink-50 text-pink-700 rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Technical Highlights */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technical Highlights</h2>
          <ul className="space-y-3 text-gray-600">
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