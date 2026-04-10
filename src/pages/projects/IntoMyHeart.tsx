import { Heart, Activity, Monitor, Cpu } from 'lucide-react';
import { IntoMyHeartIcon, intoMyHeartImages } from '../../assets';
import ImageCarousel from '../../components/ImageCarousel';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';
import { socialLinks } from '../../config/socialLinks';

const IntoMyHeart = () => {
  const features = [
    {
      icon: Activity,
      title: 'Real-Time Pulse Streaming',
      description: 'WebSocket streaming from Arduino with <50ms latency at 115200 baud'
    },
    {
      icon: Heart,
      title: '3D Heart Visualization',
      description: 'Live pulse signals synced to a responsive Three.js heart model with TWEEN.js animations'
    },
    {
      icon: Monitor,
      title: 'Dual-Display UI',
      description: 'I2C OLED hardware feedback + web dashboard with real-time ECG waveform visualization'
    },
    {
      icon: Cpu,
      title: 'Adaptive Signal Filtering',
      description: 'Moving average, dynamic threshold, and BPM smoothing for 95%+ signal accuracy'
    }
  ];

  const overviewParagraphs = [
    'IntoMyHeart is a real-time pulse monitoring system that bridges hardware and web technologies. An Arduino with a MAX30102 pulse oximeter sensor captures live heartbeat data and streams it over WebSocket with under 50 milliseconds of latency.',
    'The web dashboard features a responsive 3D heart model built with Three.js that beats in sync with the user\'s actual pulse. TWEEN.js drives smooth scaling animations that respond to each detected heartbeat in real time.',
    'The system includes a dual-display interface: an I2C OLED screen connected to the Arduino provides immediate hardware-level feedback with BPM readings, while the browser-based dashboard renders a full ECG waveform visualization alongside the 3D heart model.',
    'Signal processing is handled through adaptive filtering techniques including a moving average filter, dynamic threshold detection, and BPM smoothing algorithms, achieving 95%+ accuracy in heartbeat detection from the raw sensor data.'
  ];

  const technologies = [
    "Arduino",
    "C++",
    "Three.js",
    "Node.js",
    "WebSocket",
    "TWEEN.js",
    "MAX30102",
    "I2C OLED",
    "Serial Communication (115200 baud)"
  ];

  const highlights = [
    'Engineered real-time Arduino pulse monitor with WebSocket streaming achieving <50ms latency at 115200 baud',
    'Synced live pulse signals to a responsive 3D heart model with Three.js and TWEEN.js animations',
    'Constructed dual-display UI: I2C OLED feedback + web dashboard with real-time ECG waveform visualization',
    'Applied adaptive filtering (moving average, dynamic threshold, BPM smoothing) to reach 95%+ signal accuracy'
  ];

  return (
    <ProjectLayout>
      <ProjectHeader
        icon={IntoMyHeartIcon}
        title="IntoMyHeart"
        subtitle="Real-Time Arduino Pulse Monitor with 3D Heart Visualization"
        githubUrl={socialLinks.repositories.intoMyHeart}
        features={features}
      />

      <ImageCarousel images={intoMyHeartImages} projectName="into-my-heart" />

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

export default IntoMyHeart;
