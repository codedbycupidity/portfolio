import { Globe, Calendar, Users, Plane } from 'lucide-react';
import { PassportBuddyIcon, comingSoon } from '../../assets';
import ImageCarousel from '../../components/ImageCarousel';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';
import { socialLinks } from '../../config/socialLinks';

const PassportBuddy = () => {
  const projectImages = [
    comingSoon,
    comingSoon,
    comingSoon,
    comingSoon,
    comingSoon,
  ];

  const features = [
    {
      icon: Plane,
      title: 'Travel Statistics',
      description: 'Tracking flight miles, countries, travel time'
    },
    {
      icon: Users,
      title: 'Social Networking',
      description: 'Connect with fellow travelers and share experiences'
    },
    {
      icon: Globe,
      title: 'Interactive 3D Globe',
      description: 'Flight path visualization'
    },
    {
      icon: Calendar,
      title: 'OCR Boarding Pass Scanning',
      description: '98% accurate automatic trip import from photos'
    }
  ];

  const overviewParagraphs = [
    'Passport Buddy is an enterprise-grade travel platform that revolutionizes how people manage their travel experiences. Developed collaboratively with a team, it combines comprehensive flight tracking capabilities with social networking features, creating a unified ecosystem for modern travelers.',
    'The platform is built on a Progressive Web App (PWA) architecture with cross-platform support, ensuring users can access their travel information on any device. Its OCR boarding pass scanner delivers 98% accuracy, allowing travelers to instantly import trip details with just a photo.',
    'Built with performance in mind, the React frontend delivers 95+ Lighthouse scores with sub-200KB bundle sizes. The platform uses GraphQL with Apollo Client for efficient API communication and has been successfully tested with over 10,000 users, demonstrating its enterprise readiness.'
  ];

  const technologies = [
    "React.js", 
    "Flutter", 
    "TypeScript", 
    "MongoDB", 
    "Apollo Client", 
    "GraphQL", 
    "Docker"
  ];

  const highlights = [
    'Implemented Progressive Web App (PWA) architecture with service workers, enabling seamless cross-platform support',
    'Developed custom OCR algorithm achieving 98% accuracy for boarding pass scanning',
    'Designed and deployed a GraphQL API powering real-time social feeds',
    'Containerized a microservices architecture using Docker to enhance scalability and maintainability',
    'Validated system performance through load testing with 10,000+ concurrent users'
  ];

  return (
    <ProjectLayout>
      <ProjectHeader
        icon={PassportBuddyIcon}
        title="Passport Buddy"
        subtitle="Enterprise Travel Platform"
        githubUrl={socialLinks.repositories.passportBuddy}
        features={features}
      />

      <ImageCarousel images={projectImages} projectName="Passport Buddy" />

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

export default PassportBuddy;