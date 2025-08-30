import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, Hand, Eye, BarChart, Palette } from 'lucide-react';
import LioraIcon from '../../assets/project_icons/LioraIcon.png';
import ImageCarousel from '../../components/ImageCarousel';
import comingSoon from '../../assets/coming_soon.png';

const Liora = () => {
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
            <img src={LioraIcon} alt="Liora" className="w-24 h-24 rounded-lg" />
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Liora</h1>
              <p className="text-lg text-gray-600">Real-time ASL Gesture Recognition App</p>
              <div className="flex gap-4 mt-4">
                <a 
                  href="https://github.com/cupidtiy/Liora" 
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
                <Hand className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-700">MediaPipe Holistic Tracking</h3>
                  <p className="text-gray-600 text-sm">21 hand landmarks with face & pose detection</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Palette className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-700">Color-Coded Fingers</h3>
                  <p className="text-gray-600 text-sm">Each finger uniquely colored for clear visualization</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Eye className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-700">Motion Gesture Detection</h3>
                  <p className="text-gray-600 text-sm">Tracks Hello waves, Yes nods, Thank You motions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BarChart className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-700">ML Training Mode</h3>
                  <p className="text-gray-600 text-sm">Personalized accuracy with persistent storage</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Carousel */}
        <ImageCarousel images={projectImages} projectName="Liora" />

        {/* Project Overview */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Liora is a web-based application that uses your camera to detect and recognize multiple ASL (American Sign Language) 
            gestures with real-time hand tracking, bounding box visualization, and machine learning capabilities for personalized 
            accuracy. Built with a modular architecture, it supports both static and motion-based gestures including Hello, 
            Thank You, Yes, No, and more.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The application leverages MediaPipe Holistic for comprehensive tracking of 21 hand landmarks in 3D, along with face 
            and pose detection for context-aware gesture recognition. Each finger is uniquely color-coded (thumb: red, index: teal, 
            middle: blue, ring: yellow, pinky: purple) providing clear visual feedback. Motion tracking capabilities detect complex 
            movements like waving for Hello, knocking for Yes, and chin-forward movements for Thank You.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The ML training mode allows users to improve accuracy with their specific hand gestures, storing samples both in 
            localStorage and optionally on the file system via a Python server. With features like gesture persistence, confidence 
            meters, and export/import functionality, Liora provides a complete solution for ASL learning and practice.
          </p>
        </div>

        {/* Technical Stack */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technical Stack</h2>
          <div className="flex flex-wrap gap-3">
            {["JavaScript", "MediaPipe Holistic", "Python", "Electron", "HTML5", "CSS3", "WebRTC", "localStorage"].map((tech) => (
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
              <span>Implemented MediaPipe Holistic tracking 21 hand landmarks in 3D with face and pose detection</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span>Developed modular architecture with separate modules for gestures, visualization, training, and motion</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span>Created unique color-coded finger visualization system for clear gesture feedback</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span>Built state machine-based motion tracking for complex gestures like Hello waves and Thank You</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span>Engineered dual storage system with localStorage and Python server for training data persistence</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span>Developed Electron desktop app with native file dialogs and keyboard shortcuts</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Liora;