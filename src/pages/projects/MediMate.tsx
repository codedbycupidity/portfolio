import { Pill, Brain, Bell, Shield } from 'lucide-react';
import MediMateIcon from '../../assets/project_icons/MediMateIcon.png';
import ImageCarousel from '../../components/ImageCarousel';
import comingSoon from '../../assets/coming_soon.png';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';

const MediMate = () => {
  const projectImages = [
    comingSoon,
    comingSoon,
    comingSoon,
    comingSoon,
    comingSoon,
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Scheduling',
      description: 'OpenAI integration for optimal reminder times'
    },
    {
      icon: Shield,
      title: 'Vector Database',
      description: 'Pinecone-powered duplicate detection with 85% threshold'
    },
    {
      icon: Pill,
      title: 'Cross-Platform Support',
      description: 'Web, iOS, and Android apps from shared codebase'
    },
    {
      icon: Bell,
      title: 'Microservices Architecture',
      description: 'Docker containerized with Nginx reverse proxy'
    }
  ];

  const overviewParagraphs = [
    'MediMate is a comprehensive fullstack medication reminder application with web and mobile interfaces, helping users manage their medication schedules effectively. Built with a microservices architecture, it combines a Node.js/Express backend API, React web frontend, and React Native mobile app, all sharing common TypeScript types and utilities.',
    'The platform features advanced AI integration through OpenAI for smart medication scheduling that considers user routines, medication requirements, and medical best practices. Pinecone vector database powers the intelligent duplicate detection system, converting medication data into semantic vectors for similarity search with an 85% threshold, detecting duplicates even with text variations.',
    'The architecture leverages Docker Compose for orchestration, with services including MongoDB for data persistence, Redis for caching, and Nginx as a reverse proxy. The shared package architecture ensures type safety across all platforms while the modular design allows independent scaling of each service.'
  ];

  const technologies = [
    "React.js",
    "React Native",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Pinecone",
    "Docker",
    "OpenAI",
    "Redis",
    "Nginx",
    "Tailwind CSS"
  ];

  const highlights = [
    'Architected fullstack application with shared TypeScript types across web, mobile, and backend platforms',
    'Integrated Pinecone vector database for semantic medication matching with 85% similarity threshold',
    'Implemented OpenAI-powered batch optimization for medication scheduling based on user routines',
    'Orchestrated microservices with Docker Compose including MongoDB, Redis, and Nginx services',
    'Built RESTful API following conventions with user-isolated namespaces for data security',
    'Developed comprehensive testing suite with coverage reporting and type checking'
  ];

  return (
    <ProjectLayout>
      <ProjectHeader
        icon={MediMateIcon}
        title="MediMate"
        subtitle="Comprehensive Medication Management Platform"
        githubUrl="https://github.com/cupidtiy/medi-mate"
        features={features}
      />

      <ImageCarousel images={projectImages} projectName="Medi-Mate" />

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

export default MediMate;