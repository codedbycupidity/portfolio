import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, Globe, Calendar, Users, Plane } from 'lucide-react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import PassportBuddyIcon from '../../assets/project_icons/PassportBuddyIcon.png';
import ImageCarousel from '../../components/ImageCarousel';
import comingSoon from '../../assets/coming_soon.png';

const PassportBuddy = () => {
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
        <Link to="/#projects" className="inline-flex items-center gap-2 hover:opacity-80 mb-8 transition-colors" style={{ color: isDarkMode ? '#EABEC3' : 'rgb(190, 24, 93)' }}>
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Projects</span>
        </Link>

        {/* Project Header */}
        <div className="rounded-lg shadow-lg p-8 mb-8" style={{ backgroundColor: isDarkMode ? 'rgb(31, 41, 55)' : 'white' }}>
          <div className="flex items-start gap-6 mb-6">
            <img src={PassportBuddyIcon} alt="Passport Buddy" className="w-24 h-24 rounded-lg" />
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2" style={{ color: isDarkMode ? 'white' : 'rgb(31, 41, 55)' }}>Passport Buddy</h1>
              <p className="text-lg" style={{ color: isDarkMode ? 'white' : 'rgb(75, 85, 99)' }}>Enterprise Travel Platform</p>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://github.com/Izaacapp/flutterrr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-colors hover:opacity-80"
                  style={{ 
                    backgroundColor: isDarkMode ? 'rgba(234, 190, 195, 0.2)' : 'rgb(252, 231, 243)',
                    color: isDarkMode ? '#EABEC3' : 'rgb(190, 24, 93)'
                  }}
                >
                  <Github className="h-4 w-4" />
                  View Code
                </a>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="border-t pt-6" style={{ borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' }}>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: isDarkMode ? 'white' : 'rgb(31, 41, 55)' }}>Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Plane className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold" style={{ color: isDarkMode ? '#FDD5DF' : 'rgb(55, 65, 81)' }}>Travel Statistics</h3>
                  <p className="text-sm" style={{ color: isDarkMode ? 'white' : 'rgb(75, 85, 99)' }}>Tracking flight miles, countries, travel time</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold" style={{ color: isDarkMode ? '#FDD5DF' : 'rgb(55, 65, 81)' }}>Social Networking</h3>
                  <p className="text-sm" style={{ color: isDarkMode ? 'white' : 'rgb(75, 85, 99)' }}>Connect with fellow travelers and share experiences</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold" style={{ color: isDarkMode ? '#FDD5DF' : 'rgb(55, 65, 81)' }}>Interactive 3D Globe</h3>
                  <p className="text-sm" style={{ color: isDarkMode ? 'white' : 'rgb(75, 85, 99)' }}>Flight path visualization</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold" style={{ color: isDarkMode ? '#FDD5DF' : 'rgb(55, 65, 81)' }}>OCR Boarding Pass Scanning</h3>
                  <p className="text-sm" style={{ color: isDarkMode ? 'white' : 'rgb(75, 85, 99)' }}>98% accurate automatic trip import from photos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Carousel */}
        <ImageCarousel images={projectImages} projectName="Passport Buddy" />

        {/* Project Overview */}
        <div className="rounded-lg shadow-lg p-8 mb-8" style={{ backgroundColor: isDarkMode ? 'rgb(31, 41, 55)' : 'white' }}>
          <h2 className="text-2xl font-semibold mb-4" style={{ color: isDarkMode ? 'white' : 'rgb(31, 41, 55)' }}>Project Overview</h2>
          <p className="leading-relaxed mb-4" style={{ color: isDarkMode ? 'white' : 'rgb(75, 85, 99)' }}>
            Passport Buddy is an enterprise-grade travel platform that revolutionizes how people manage their travel experiences.
            Developed collaboratively with a team, it combines comprehensive flight tracking capabilities with social networking features,
            creating a unified ecosystem for modern travelers.
          </p>
          <p className="leading-relaxed mb-4" style={{ color: isDarkMode ? 'white' : 'rgb(75, 85, 99)' }}>
            The platform is built on a Progressive Web App (PWA) architecture with cross-platform support, ensuring users can access their 
            travel information on any device. Its OCR boarding pass scanner delivers 98% accuracy, allowing travelers to instantly import 
            trip details with just a photo.
          </p>
          <p className="leading-relaxed" style={{ color: isDarkMode ? 'white' : 'rgb(75, 85, 99)' }}>
            Built with performance in mind, the React frontend delivers 95+ Lighthouse scores with sub-200KB bundle sizes. The platform
            uses GraphQL with Apollo Client for efficient API communication and has been successfully tested with over 10,000 users,
            demonstrating its enterprise readiness.
          </p>
        </div>

        {/* Technical Stack */}
        <div className="rounded-lg shadow-lg p-8 mb-8" style={{ backgroundColor: isDarkMode ? 'rgb(31, 41, 55)' : 'white' }}>
          <h2 className="text-2xl font-semibold mb-4" style={{ color: isDarkMode ? 'white' : 'rgb(31, 41, 55)' }}>Technical Stack</h2>
          <div className="flex flex-wrap gap-3">
            {["React.js", "Flutter", "TypeScript", "MongoDB", "Apollo Client", "GraphQL", "Docker"].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: isDarkMode ? 'rgba(234, 190, 195, 0.2)' : 'rgb(254, 242, 242)', color: isDarkMode ? '#EABEC3' : 'rgb(190, 24, 93)' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Technical Highlights */}
        <div className="rounded-lg shadow-lg p-8" style={{ backgroundColor: isDarkMode ? 'rgb(31, 41, 55)' : 'white' }}>
          <h2 className="text-2xl font-semibold mb-4" style={{ color: isDarkMode ? 'white' : 'rgb(31, 41, 55)' }}>Technical Highlights</h2>
          <ul className="space-y-3" style={{ color: isDarkMode ? 'white' : 'rgb(75, 85, 99)' }}>
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