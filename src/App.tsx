import { Routes, Route } from 'react-router-dom'
import { DarkModeProvider, useDarkMode } from './contexts/DarkModeContext'
import Navigation from './components/Navigation'
import AboutSection from './components/AboutSection'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Footer from './components/Footer'
import PassportBuddy from './pages/projects/PassportBuddy'
import MediMate from './pages/projects/MediMate'
import Liora from './pages/projects/Liora'
import Portfolio from './pages/projects/Portfolio'
import divider from './assets/divider.PNG'
import './App.css'

function HomePage() {
  const { isDarkMode } = useDarkMode();
  
  return (
    <>
      <AboutSection />
      <Projects />
      <Experience />
      {/* Divider with proper background */}
      <div className="w-full py-8" style={{
        background: isDarkMode 
          ? '#0A0F1B' 
          : 'linear-gradient(180deg, rgb(254 245 245) 0%, rgb(254 242 242) 50%, rgb(254 245 245) 100%)',
        transition: 'background 0.3s ease-in-out'
      }}>
        <img src={divider} alt="Section divider" className="w-full h-auto" />
      </div>
      <Skills />
    </>
  )
}

function AppContent() {
  const { isDarkMode } = useDarkMode();
  
  return (
    <div className="app transition-colors duration-300" style={{ backgroundColor: isDarkMode ? '#101727' : undefined }}>
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
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