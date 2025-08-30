import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, Sparkles, Palette, Mouse, Heart } from 'lucide-react';
import PortfolioIcon from '../../assets/project_icons/PortfolioIcon.png';
import ImageCarousel from '../../components/ImageCarousel';
import comingSoon from '../../assets/coming_soon.png';

const Portfolio = () => {
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
            <img src={PortfolioIcon} alt="Portfolio" className="w-24 h-24 rounded-lg" />
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Personal Portfolio</h1>
              <p className="text-lg text-gray-600">Interactive Website with Unique Design</p>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://github.com/cupidtiy/portfolio"
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
                <Mouse className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-700">Draggable Star Elements</h3>
                  <p className="text-gray-600 text-sm">30+ interactive stars with custom drag functionality</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-700">3D Dome Gallery</h3>
                  <p className="text-gray-600 text-sm">Rotating tech stack display with edge blending</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Palette className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-700">Custom Dusty Pink Theme</h3>
                  <p className="text-gray-600 text-sm">Cohesive color palette with gradient backgrounds</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-700">Hand-Drawn Favicons</h3>
                  <p className="text-gray-600 text-sm">Custom-created project icons for personal touch</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Carousel */}
        <ImageCarousel images={projectImages} projectName="Portfolio" />

        {/* Project Overview */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            This portfolio website showcases my projects, skills and personality through an interactive and visually engaging interface. Built
            with React and TypeScript, it features a unique design philosophy that combines playful elements with professional
            presentation. The site demonstrates advanced frontend techniques while maintaining excellent performance and accessibility.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            The standout feature is the collection of 30+ draggable star elements scattered throughout the Projects section, each
            randomly selected from 11 unique hand-drawn designs. Users can interact with these stars on both desktop and mobile
            devices through mouse and touch events, with smooth animations and visual feedback. The special "drag me!" star in the
            corner invites user interaction with custom arrow graphics and fonts.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            More than just code, this portfolio reflects my personality and design sensibilities—every detail from the draggable stars to the custom hand-drawn project favicons is
            unapologetically me, turning technical skill into a personal statement.
          </p>

          <p className="text-gray-600 leading-relaxed">
            The Skills section features a 3D dome gallery from <a href="https://reactbits.dev/components/dome-gallery" target="_blank" rel="noopener noreferrer" className=" hover:text-pink-700 ">reactbits.dev</a> that I tailored to my personal vision, displaying technology icons in a rotating
            carousel with radial gradient edge blending for a seamless visual effect. Every aspect of the design, from the dusty
            pink color scheme (#EABEC3, #D9A5AC, #FDD5DF) to the custom-drawn project favicons, creates a cohesive and memorable
            user experience that stands out from typical portfolio websites.
          </p>
        </div>

        {/* Technical Stack */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technical Stack</h2>
          <div className="flex flex-wrap gap-3">
            {["React", "TypeScript", "Tailwind CSS", "Vite", "React Router", "Lucide Icons", "ShadCN UI"].map((tech) => (
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
              <span>Implemented custom drag-and-drop system supporting both mouse and touch events with boundary detection</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span>Built 3D dome gallery from scratch using CSS transforms and JavaScript animation calculations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span>Created responsive image carousel with sliding animations and custom navigation controls</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span>Designed cohesive dusty pink theme with custom CSS variables and Tailwind configuration</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span>Hand-drew all project favicons and decorative elements for unique visual identity</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span>Optimized performance with React.memo, useCallback hooks, and efficient re-render strategies</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;