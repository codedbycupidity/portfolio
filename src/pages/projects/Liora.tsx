import { Hand, Eye, BarChart, Palette } from 'lucide-react';
import LioraIcon from '../../assets/project_icons/LioraIcon.png';
import ImageCarousel from '../../components/ImageCarousel';
import comingSoon from '../../assets/coming_soon.png';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';

const Liora = () => {
  const projectImages = [
    comingSoon,
    comingSoon,
    comingSoon,
    comingSoon,
    comingSoon,
  ];

  const features = [
    {
      icon: Hand,
      title: 'MediaPipe Holistic Tracking',
      description: '21 hand landmarks with face & pose detection'
    },
    {
      icon: Palette,
      title: 'Color-Coded Fingers',
      description: 'Each finger uniquely colored for clear visualization'
    },
    {
      icon: Eye,
      title: 'Motion Gesture Detection',
      description: 'Tracks Hello waves, Yes nods, Thank You motions'
    },
    {
      icon: BarChart,
      title: 'ML Training Mode',
      description: 'Personalized accuracy with persistent storage'
    }
  ];

  const overviewParagraphs = [
    'Liora is a web-based application that uses your camera to detect and recognize multiple ASL (American Sign Language) gestures with real-time hand tracking, bounding box visualization, and machine learning capabilities for personalized accuracy. Built with a modular architecture, it supports both static and motion-based gestures including Hello, Thank You, Yes, No, and more.',
    'The application leverages MediaPipe Holistic for comprehensive tracking of 21 hand landmarks in 3D, along with face and pose detection for context-aware gesture recognition. Each finger is uniquely color-coded (thumb: red, index: teal, middle: blue, ring: yellow, pinky: purple) providing clear visual feedback. Motion tracking capabilities detect complex movements like waving for Hello, knocking for Yes, and chin-forward movements for Thank You.',
    'The ML training mode allows users to improve accuracy with their specific hand gestures, storing samples both in localStorage and optionally on the file system via a Python server. With features like gesture persistence, confidence meters, and export/import functionality, Liora provides a complete solution for ASL learning and practice.'
  ];

  const technologies = [
    "JavaScript",
    "MediaPipe Holistic",
    "Python",
    "Electron",
    "HTML5",
    "CSS3",
    "WebRTC",
    "localStorage"
  ];

  const highlights = [
    'Implemented MediaPipe Holistic tracking 21 hand landmarks in 3D with face and pose detection',
    'Developed modular architecture with separate modules for gestures, visualization, training, and motion',
    'Created unique color-coded finger visualization system for clear gesture feedback',
    'Built state machine-based motion tracking for complex gestures like Hello waves and Thank You',
    'Engineered dual storage system with localStorage and Python server for training data persistence',
    'Developed Electron desktop app with native file dialogs and keyboard shortcuts'
  ];

  return (
    <ProjectLayout>
      <ProjectHeader
        icon={LioraIcon}
        title="Liora"
        subtitle="Real-time ASL Gesture Recognition App"
        githubUrl="https://github.com/cupidtiy/Liora"
        features={features}
      />

      <ImageCarousel images={projectImages} projectName="Liora" />

      <ProjectSection title="Project Overview">
        <ProjectOverview paragraphs={overviewParagraphs} />
      </ProjectSection>

      <ProjectSection title="Technical Stack">
        <TechStack technologies={technologies} />
      </ProjectSection>

      <ProjectSection title="Technical Highlights" className="mb-0">
        <TechnicalHighlights highlights={highlights} />
      </ProjectSection>
    </ProjectLayout>
  );
};

export default Liora;