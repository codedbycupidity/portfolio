import { Routes, Route } from 'react-router-dom'
import { DarkModeProvider, useDarkMode } from './contexts/DarkModeContext'
import Navigation from './components/section/Navigation'
import About from './components/section/About'
import Projects from './components/section/Projects'
import Experience from './components/Experience'
import Skills from './components/section/Skills'
import Footer from './components/Footer'
import PassportBuddy from './pages/projects/PassportBuddy'
import MediMate from './pages/projects/MediMate'
import Liora from './pages/projects/Liora'
import Portfolio from './pages/projects/Portfolio'
import Contact from './pages/Contact'
import divider from './assets/divider.PNG'
import './App.css'

function HomePage() {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <About />
      <Projects />
      <Experience />
      {/* Divider with proper background */}
      <div className="w-full py-8" style={{
        background: isDarkMode
          ? '#0A0F1B'
          : 'linear-gradient(180deg, rgb(254 245 245) 0%, rgb(254 242 242) 50%, rgb(254 245 245) 100%)',
        transition: 'background 0.3s ease-in-out'
      }}>
        <img src={divider} alt="Section divider" className="w-full h-auto" width="1200" height="100" loading="lazy" />
      </div>
      <Skills />
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/passport-buddy" element={<PassportBuddy />} />
          <Route path="/projects/medi-mate" element={<MediMate />} />
          <Route path="/projects/liora" element={<Liora />} />
          <Route path="/projects/portfolio" element={<Portfolio />} />
        </Routes>
      </main>
      <Footer />
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