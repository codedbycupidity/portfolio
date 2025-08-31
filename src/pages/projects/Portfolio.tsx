import { Sparkles, Palette, Mouse, Heart } from 'lucide-react';
import PortfolioIcon from '../../assets/project_icons/PortfolioIcon.png';
import ImageCarousel from '../../components/ImageCarousel';
import comingSoon from '../../assets/coming_soon.png';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';
import { socialLinks } from '../../config/socialLinks';

const Portfolio = () => {
  const projectImages = [
    comingSoon,
    comingSoon,
    comingSoon,
    comingSoon,
    comingSoon,
  ];

  const features = [
    {
      icon: Mouse,
      title: 'Draggable Star Elements',
      description: '30+ hand-drawn interactive stars with custom drag functionality'
    },
    {
      icon: Sparkles,
      title: '3D Dome Gallery',
      description: 'Rotating tech stack display with edge blending'
    },
    {
      icon: Palette,
      title: 'Custom Dusty Pink Theme',
      description: 'Cohesive color palette with gradient backgrounds'
    },
    {
      icon: Heart,
      title: 'Hand-Drawn Favicons',
      description: 'Custom-created project icons for personal touch'
    }
  ];

  const overviewParagraphs = [
    'This portfolio website showcases my projects, skills and personality through an interactive and visually engaging interface. Built with React and TypeScript, it features a unique design philosophy that combines playful elements with professional presentation. The site demonstrates advanced frontend techniques while maintaining excellent performance and accessibility.',
    'The standout feature is the collection of 30+ draggable star elements scattered throughout the Projects section, each randomly selected from 11 unique hand-drawn designs. Users can interact with these stars on both desktop and mobile devices through mouse and touch events, with smooth animations and visual feedback. The special "drag me!" star in the corner invites user interaction with custom arrow graphics and fonts.',
    <>
      The Skills section features a 3D dome gallery from 
      <a href="https://reactbits.dev/components/dome-gallery" target="_blank" aria-label="View source code (opens in new tab)" rel="noopener noreferrer" className="hover:text-pink-700">reactbits.dev</a> 
      that I tailored to my personal vision, displaying technology icons in a rotating carousel with radial gradient edge 
      blending for a seamless visual effect. Every aspect of the design, from the dusty pink color scheme (#EABEC3, #D9A5AC, #FDD5DF) 
      to the custom-drawn project favicons, creates a cohesive and memorable user experience that stands out from typical portfolio websites.
    </>,
    'More than just code, this portfolio reflects my personality and design sensibilities—every detail from the draggable stars to the custom hand-drawn project favicons is unapologetically me, turning technical skill into a personal statement.',
  ];

  const technologies = [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Vite",
    "React Router",
    "Lucide Icons",
    "ShadCN UI"
  ];

  const highlights = [
    'Implemented custom drag-and-drop system supporting both mouse and touch events with boundary detection',
    'Built 3D dome gallery from scratch using CSS transforms and JavaScript animation calculations',
    'Created responsive image carousel with sliding animations and custom navigation controls',
    'Designed cohesive dusty pink theme with custom CSS variables and Tailwind configuration',
    'Hand-drew all project favicons and decorative elements for unique visual identity',
    'Optimized performance with React.memo, useCallback hooks, and efficient re-render strategies'
  ];

  return (
    <ProjectLayout>
      <ProjectHeader
        icon={PortfolioIcon}
        title="Personal Portfolio"
        subtitle="Interactive Website with Unique Design"
        githubUrl={socialLinks.repositories.portfolio}
        features={features}
      />

      <ImageCarousel images={projectImages} projectName="Portfolio" />

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

export default Portfolio;