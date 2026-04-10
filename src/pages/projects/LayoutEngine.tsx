import { Boxes, Code2, Type, GitBranch } from 'lucide-react';
import { LayoutEngineIcon, layoutEngineImages } from '../../assets';
import ImageCarousel from '../../components/ImageCarousel';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';
import { socialLinks } from '../../config/socialLinks';

const LayoutEngine = () => {
  const features = [
    {
      icon: Boxes,
      title: 'Block & Flexbox Layout',
      description: 'Implements block normal flow and flexbox algorithms following W3C specifications'
    },
    {
      icon: Type,
      title: 'Text Layout Engine',
      description: 'Word wrapping, line breaking, and text alignment (left, center, right, justify)'
    },
    {
      icon: Code2,
      title: 'Modern C++17',
      description: 'Smart pointers, RAII, const-correctness, and clean object-oriented design'
    },
    {
      icon: GitBranch,
      title: 'Comprehensive Testing',
      description: 'Unit tests, regression suite, and performance benchmarks with Google Test'
    }
  ];

  const overviewParagraphs = [
    'Mini Layout Engine is a C++ implementation of core browser layout algorithms. It demonstrates understanding of how browsers convert CSS properties into visual layout by implementing a simplified but functional layout pipeline.',
    'The engine parses a CSS-like layout description format, constructs a layout tree, and runs fundamental layout algorithms including block normal flow and basic flexbox. It computes positions and dimensions following the box model (margin, border, padding, content) and handles property inheritance through the tree.',
    'A dedicated text layout engine handles word wrapping and line breaking with support for left, center, right, and justified alignment. It uses configurable font metrics including character width, line height, and letter spacing, with justified text distributing word spacing evenly across each line.',
    'The project includes a browser-based HTML5/JavaScript visualizer that compares the C++ engine output side-by-side with native browser rendering, providing a visual validation tool for layout correctness.',
    'The architecture maps directly to WebKit internals: LayoutNode corresponds to RenderObject/LayoutBox, BlockLayout to BlockFormattingContext, FlexLayout to FlexFormattingContext, and TextLayout to InlineFormattingContext/LineBreaker.'
  ];

  const technologies = [
    "C++17",
    "CMake",
    "Google Test (gtest)",
    "HTML5",
    "JavaScript",
    "CSS Box Model",
    "W3C Flexbox Spec",
    "RAII / Smart Pointers"
  ];

  const highlights = [
    'Implemented block layout algorithm with normal flow, box model calculations, and containing block logic',
    'Built simplified flexbox layout supporting flex-direction, justify-content, and align-items',
    'Developed text layout engine with word wrapping, line breaking, and four alignment modes',
    'Designed configurable font metrics system with character width, line height, and letter spacing',
    'Created CSS-like parser for layout description format with nested element support',
    'Architected layout tree with property inheritance and recursive tree traversal',
    'Built JSON and console output formatters for layout result visualization',
    'Implemented browser-based visualizer comparing engine output with native browser rendering',
    'Wrote comprehensive test suite covering unit tests, integration tests, and regression cases',
    'Applied modern C++17 practices: unique_ptr, shared_ptr, RAII, const-correctness throughout'
  ];

  return (
    <ProjectLayout>
      <ProjectHeader
        icon={LayoutEngineIcon}
        title="Mini Layout Engine"
        subtitle="C++ Implementation of Core Browser Layout Algorithms"
        githubUrl={socialLinks.repositories.layoutEngine}
        features={features}
      />

      <ImageCarousel images={layoutEngineImages} projectName="layout-engine" />

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

export default LayoutEngine;
