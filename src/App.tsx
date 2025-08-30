import { Routes, Route } from 'react-router-dom'
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
  return (
    <>
      <AboutSection />
      <Projects />
      <Experience />
      <div className="w-full py-8">
        <img src={divider} alt="Section divider" className="w-full h-auto" />
      </div>
      <Skills />
    </>
  )
}

function App() {
  return (
    <div className="app">
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

export default App