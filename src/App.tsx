import Navigation from './components/Navigation'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Skills from './components/Skills'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navigation />
      <main className="main-content">
        <AboutMe />
        <Projects />
        <Skills />
      </main>
    </div>
  )
}

export default App