# Portfolio Website

My personal portfolio website built with React, TypeScript, and Tailwind CSS featuring interactive elements and smooth animations.

## Features

- **Interactive Hero Section**: Animated ASCII text and typewriter effect showcasing roles
- **About Section**: Personal introduction with animated stickers and journal-style design
- **Projects Section**: Grid layout showcasing projects with 35+ draggable star decorations
- **Experience Section**: Professional experience with timeline layout
- **Skills Section**: Technical skills display
- **Responsive Design**: Fully responsive across all devices
- **Smooth Transitions**: Gradient backgrounds creating seamless section flows

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
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
│   │   ├── About.tsx
│   │   ├── AsciiMorphText.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── TypewriterCarousel.tsx
│   │   └── ui/           # Reusable UI components
│   ├── App.tsx
│   ├── App.css
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

### Interactive Stars
The Projects section features 35 draggable star decorations that can be moved around the section. Stars are randomly distributed and use different star images for variety.

### Animated Stickers
The About section includes 16 animated stickers that spread out as users scroll, creating an engaging visual experience.

### Custom Typography
- Punk Babe font for the signature name
- DK Crayonista for handwritten journal entries
- System fonts for body text

### Gradient Backgrounds
Smooth gradient transitions between sections:
- Hero: White to pink
- About: Pink gradients with journal overlay
- Projects: Pink tones with star overlays
- Experience: Pink to white transition
- Skills: White to pink gradient

## Customization

### Colors
The color palette is defined in `App.css` using CSS variables:
- Lavender Blush: #FAE8ED
- Mimi Pink: #FDD5DF
- Dusty Pink: #EABEC3
- Dusty Pink Dark: #D9A5AC
- Dusty Pink Darker: #C88B95

### Content
- Update project data in `Projects.tsx`
- Modify experience entries in `Experience.tsx`
- Edit personal information in `AboutSection.tsx`
- Customize navigation links in `Navigation.tsx`

## Performance Optimizations

- Lazy loading for images
- CSS animations using transforms for better performance
- Optimized star rendering with React state management
- Efficient scroll event handling with useEffect cleanup

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.
