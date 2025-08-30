import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, Globe, Calendar, Users, Plane } from 'lucide-react';
import PassportBuddyIcon from '../../assets/project_icons/PassportBuddyIcon.png';
import ImageCarousel from '../../components/ImageCarousel';
import comingSoon from '../../assets/coming_soon.png';

const PassportBuddy = () => {
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
            <img src={PassportBuddyIcon} alt="Passport Buddy" className="w-24 h-24 rounded-lg" />
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Passport Buddy</h1>
              <p className="text-lg text-gray-600">Enterprise Travel Platform</p>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://github.com/Izaacapp/flutterrr"
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
                <Plane className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-700">Travel Statistics</h3>
                  <p className="text-gray-600 text-sm">Tracking flight miles, countries, travel time</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-700">Social Networking</h3>
                  <p className="text-gray-600 text-sm">Connect with fellow travelers and share experiences</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-700">Interactive 3D Globe</h3>
                  <p className="text-gray-600 text-sm">Flight path visualization</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-700">OCR Boarding Pass Scanning</h3>
                  <p className="text-gray-600 text-sm">98% accurate automatic trip import from photos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Carousel */}
        <ImageCarousel images={projectImages} projectName="Passport Buddy" />

        {/* Project Overview */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Passport Buddy is an enterprise-grade travel platform that revolutionizes how people manage their travel experiences.
            Developed collaboratively with a team, it combines comprehensive flight tracking capabilities with social networking features,
            creating a unified ecosystem for modern travelers.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The platform is built on a Progressive Web App (PWA) architecture with cross-platform support, ensuring users can access their 
            travel information on any device. Its OCR boarding pass scanner delivers 98% accuracy, allowing travelers to instantly import 
            trip details with just a photo.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Built with performance in mind, the React frontend delivers 95+ Lighthouse scores with sub-200KB bundle sizes. The platform
            uses GraphQL with Apollo Client for efficient API communication and has been successfully tested with over 10,000 users,
            demonstrating its enterprise readiness.
          </p>
        </div>

        {/* Technical Stack */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technical Stack</h2>
          <div className="flex flex-wrap gap-3">
            {["React.js", "Flutter", "TypeScript", "MongoDB", "Apollo Client", "GraphQL", "Docker"].map((tech) => (
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
              <span>Implemented Progressive Web App (PWA) architecture with service workers, enabling seamless cross-platform support</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span>Developed custom OCR algorithm achieving 98% accuracy for boarding pass scanning</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span>Designed and deployed a GraphQL API powering real-time social feeds</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span>Containerized a microservices architecture using Docker to enhance scalability and maintainability</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span>Validated system performance through load testing with 10,000+ concurrent users</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PassportBuddy;