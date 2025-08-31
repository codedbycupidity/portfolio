import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { DarkModeProvider, useDarkMode } from './contexts/DarkModeContext'
import Navigation from './components/section/Navigation'
import About from './components/section/About'
import divider from './assets/divider.PNG'
import './App.css'

// Lazy load project pages
const PassportBuddy = lazy(() => import('./pages/projects/PassportBuddy'))
const MediMate = lazy(() => import('./pages/projects/MediMate'))
const Liora = lazy(() => import('./pages/projects/Liora'))
const Portfolio = lazy(() => import('./pages/projects/Portfolio'))
const Contact = lazy(() => import('./pages/Contact'))

// Lazy load below-the-fold components for better initial load
const Projects = lazy(() => import('./components/section/Projects'))
const Experience = lazy(() => import('./components/Experience'))
const Skills = lazy(() => import('./components/section/Skills'))
const Footer = lazy(() => import('./components/Footer'))

function HomePage() {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <About />
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
        <Projects />
      </Suspense>
      <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
        <Experience />
      </Suspense>
      {/* Divider with proper background */}
      <div className="w-full py-8" style={{
        background: isDarkMode
          ? '#0A0F1B'
          : 'linear-gradient(180deg, rgb(254 245 245) 0%, rgb(254 242 242) 50%, rgb(254 245 245) 100%)',
        transition: 'background 0.3s ease-in-out'
      }}>
        <img src={divider} alt="Section divider" className="w-full h-auto" width="1200" height="100" loading="lazy" />
      </div>
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
        <Skills />
      </Suspense>
    </>
  )
}

function AppContent() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className="app transition-colors duration-300" style={{ backgroundColor: isDarkMode ? '#101727' : undefined }}>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navigation />
      <main id="main-content" className="main-content">
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/passport-buddy" element={<PassportBuddy />} />
            <Route path="/projects/medi-mate" element={<MediMate />} />
            <Route path="/projects/liora" element={<Liora />} />
            <Route path="/projects/portfolio" element={<Portfolio />} />
          </Routes>
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-32 flex items-center justify-center">Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  )
}

function App() {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  )
}

export default App