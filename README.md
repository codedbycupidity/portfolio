# Portfolio Website

My personal portfolio website built with React, TypeScript, and Tailwind CSS featuring interactive elements, smooth animations, and dynamic 3D graphics.

## Features

- **Interactive Hero Section**: Animated ASCII text with morphing effects and typewriter carousel
- **Dark/Light Mode**: Theme toggle with smooth transitions and system preference detection
- **About Section**: Personal introduction with animated stickers and journal-style design
- **Projects Section**: Interactive 3D dome gallery with WebGL animations and draggable star decorations
- **Experience Section**: Professional experience with timeline layout
- **Skills Section**: Technical skills display with interactive elements
- **Certifications Section**: Professional certifications and credentials showcase
- **Responsive Design**: Fully responsive across all devices with mobile-optimized interactions
- **Smooth Transitions**: Aurora effects and gradient backgrounds creating seamless flows
- **3D Graphics**: WebGL-powered animations using OGL library

## Technologies Used

- React 19
- TypeScript
- Tailwind CSS
- Vite
- GSAP (GreenSock Animation Platform)
- OGL (WebGL library)
- React Spring (animations)
- React Router DOM
- Figlet (ASCII art)
- Radix UI components
- Lucide Icons
- Custom fonts (Punk Babe, DK Crayonista)

## Project Structure

```
portfolio/
├── src/
│   ├── assets/
│   │   ├── stars/        # Hand-drawn star images
│   │   ├── stickers/     # Sticker images
│   │   └── fonts/        # Custom typography
│   ├── components/
│   │   ├── section/      # Main page sections
│   │   │   ├── About.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   └── Certifications.tsx
│   │   ├── ui/           # Reusable UI components
│   │   │   ├── card.tsx
│   │   │   ├── button.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── tooltip.tsx
│   │   │   ├── aurora.tsx
│   │   │   └── domegallery.tsx
│   │   ├── AsciiMorphText.tsx
│   │   └── BackButton.tsx
│   ├── contexts/
│   │   └── DarkModeContext.tsx  # Theme management
│   ├── config/
│   │   └── socialLinks.ts       # Social media configuration
│   ├── styles/
│   │   └── colors.ts           # Color palette definitions
│   ├── types/
│   │   └── figlet.d.ts         # Type definitions
│   ├── App.tsx
│   └── main.tsx
├── public/
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone [repository-url]
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## Key Features Details

### Dark/Light Mode
- System preference detection with `prefers-color-scheme`
- Smooth theme transitions using Tailwind CSS variables
- Persistent theme storage in localStorage
- Theme toggle component with animated icons

### Interactive 3D Elements
- **Dome Gallery**: WebGL-powered 3D project showcase using OGL library
- **Interactive Stars**: 35+ draggable star decorations with physics-based movement
- **GSAP Animations**: Smooth, performant animations throughout the interface

### Advanced UI Components
- **Aurora Effects**: Dynamic gradient backgrounds with animated particles
- **Animated Stickers**: 16 stickers that spread out with scroll-based animations
- **ASCII Art**: Morphing text effects using Figlet library
- **Gesture Controls**: Touch and mouse interactions with @use-gesture/react

### Custom Typography
- Punk Babe font for signature name
- DK Crayonista for handwritten journal entries
- System fonts optimized for readability

### Responsive Design System
- Mobile-first approach with touch-optimized interactions
- Adaptive layouts that work across all screen sizes
- Performance optimizations for mobile devices

## Customization

### Theme System
The color palette supports both light and dark modes:
- **Light Mode**: Pink/lavender gradients defined in `src/styles/colors.ts`
- **Dark Mode**: Dark variants with proper contrast ratios
- **CSS Variables**: Dynamic theme switching via Tailwind CSS custom properties

### Content Management
- **Projects**: Update project data in `src/components/section/Projects.tsx`
- **Experience**: Modify experience entries in `src/components/section/Experience.tsx`
- **About**: Edit personal information in `src/components/section/About.tsx`
- **Certifications**: Add credentials in `src/components/section/Certifications.tsx`
- **Social Links**: Configure links in `src/config/socialLinks.ts`
- **Navigation**: Customize navigation in `src/components/section/Navigation.tsx`

### 3D Graphics
- **OGL Settings**: Modify WebGL parameters in dome gallery component
- **GSAP Timelines**: Customize animation sequences and timing
- **Gesture Behavior**: Adjust touch/mouse interactions in gesture components

## Performance Optimizations

- **Lazy Loading**: Images and heavy components load on demand
- **Hardware Acceleration**: CSS transforms and WebGL for smooth animations
- **React Optimization**: Memoized components and optimized re-renders
- **Gesture Optimization**: Efficient touch/mouse event handling
- **Bundle Splitting**: Code splitting with React Router for faster initial loads
- **Animation Performance**: GSAP and React Spring for 60fps animations
- **Memory Management**: Proper cleanup of WebGL contexts and event listeners

## Browser Support

- **Chrome (latest)**: Full feature support including WebGL
- **Firefox (latest)**: Complete compatibility with all animations
- **Safari (latest)**: Optimized for iOS/macOS with touch gestures
- **Edge (latest)**: Full feature parity with Chrome

### WebGL Requirements
- Modern browsers with WebGL 1.0 support
- Hardware acceleration enabled
- Fallback UI for unsupported browsers

## License

This project is private and proprietary.
