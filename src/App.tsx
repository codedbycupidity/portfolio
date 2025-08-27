import Navigation from './components/Navigation'
import AboutSection from './components/AboutSection'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navigation />
      <main className="main-content">
        <AboutSection />
        <Projects />
        <Experience />
        <Skills />
      </main>
    </div>
  )
}

export default App