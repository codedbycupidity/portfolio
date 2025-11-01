import { Calendar, Users, Sparkles, LayoutGrid, Vote, DollarSign, Camera, MapPin } from 'lucide-react';
import { AlignrIcon, alignrImages } from '../../assets';
import ImageCarousel from '../../components/ImageCarousel';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';
import { socialLinks } from '../../config/socialLinks';

const Alignr = () => {
  const projectImages = alignrImages;

  const features = [
    {
      icon: LayoutGrid,
      title: '8 Interactive Block Types',
      description: 'Drag-and-drop planning with Time, Location, Tasks, Polls, Budget, RSVP, Notes, and Albums'
    },
    {
      icon: Sparkles,
      title: 'Dual AI Architecture',
      description: 'Google Gemini 2.0 for real-time suggestions + Snowflake Cortex for analytics'
    },
    {
      icon: Calendar,
      title: 'Availability Heatmap',
      description: 'Visual overlap showing when everyone is free with one-click event scheduling'
    },
    {
      icon: Users,
      title: 'Real-Time Collaboration',
      description: 'Firebase-powered instant updates across all participants'
    }
  ];

  const overviewParagraphs = [
    'alignr is an AI-powered, interactive planning canvas developed for KnightHacks 2025 that replaces group chat chaos with collaborative event coordination. One shareable link where everyone can vote, mark availability, claim tasks, and collaborate in real-time. No more buried RSVPs, no more "wait, what time again?", no more showing up confused.',
    'The platform features a visual event canvas with 8 interactive block types that can be freely positioned: Time blocks with availability heatmaps showing visual overlap, Location voting for venue selection, collaborative Task lists with multi-claimer support, Polls for group decisions, Budget tracking with anonymous preferences, RSVP blocks for attendance, shared Notes, and Photo Albums for memories.',
    'Built with a dual AI architecture combining Google Gemini 2.0 Flash for real-time event type detection and block suggestions, and Snowflake Cortex AI (Mistral-7B) for aggregate analytics and natural language event summaries. The AI intelligently suggests relevant blocks based on event type - birthday parties get RSVP, poll, and photo album suggestions, while work meetings get availability, tasks, and notes.',
    'All event data syncs in real-time via Firebase Firestore, with comprehensive features including universal calendar export (.ics files), Organizer and Participant modes, phone authentication for organizers, and Docker containerization for easy deployment. The platform supports specific dates or days of week for availability, click-to-set event times from the heatmap, and Firebase Storage integration for photo uploads.',
    <>Check out the full project submission on Devpost: <a href="https://devpost.com/software/alignr" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600 underline">https://devpost.com/software/alignr</a></>
  ];

  const technologies = [
    "React 18",
    "TypeScript",
    "Vite",
    "Firebase Firestore",
    "Firebase Auth",
    "Firebase Storage",
    "Firebase Cloud Functions",
    "Google Gemini API",
    "Snowflake Data Cloud",
    "Snowflake Cortex AI",
    "Tailwind CSS",
    "react-grid-layout",
    "Docker",
    "nginx"
  ];

  const highlights = [
    'Built dual AI architecture integrating Google Gemini 2.0 Flash for real-time intelligence and Snowflake Cortex AI (Mistral-7B) for analytics',
    'Implemented 8 interactive block types with drag-and-drop positioning using react-grid-layout',
    'Developed availability heatmap with visual overlap detection supporting specific dates and days of week',
    'Engineered real-time collaboration system with Firebase Firestore for instant cross-device updates',
    'Created universal calendar export system generating RFC-compliant .ics files with timezone support',
    'Built Firebase Storage integration with CORS configuration for photo album functionality',
    'Implemented context-aware AI that suggests relevant blocks based on event type detection',
    'Developed containerized deployment with Docker and nginx reverse proxy',
    'Created dual storage system for event data pipeline between Firebase and Snowflake',
    'Implemented phone authentication for organizers with Creator/Guest access modes'
  ];

  return (
    <ProjectLayout>
      <ProjectHeader
        icon={AlignrIcon}
        title="alignr"
        subtitle="AI-Powered Collaborative Event Planning Canvas"
        githubUrl={socialLinks.repositories.alignr}
        features={features}
      />

      <ImageCarousel images={projectImages} projectName="alignr" />

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

export default Alignr;
