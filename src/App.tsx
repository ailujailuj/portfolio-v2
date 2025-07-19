import { useState } from 'react'
import { Header, Hero, Projects, Skills, About, Footer } from './components'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('inicio')

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'inicio':
        return <Hero setActiveSection={setActiveSection} />
      case 'projetos':
        return <Projects />
      case 'habilidades':
        return <Skills />
      case 'sobre':
        return <About />
      default:
        return <Hero setActiveSection={setActiveSection} />
    }
  }

  return (
    <div className="portfolio">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="main">
        <div className="container">
          {renderActiveSection()}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
