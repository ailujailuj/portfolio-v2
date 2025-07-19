import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('sobre')

  return (
    <div className="portfolio">
      {/* Header */}
      <header className="header">
        <div className="container">
          <h1>Meu Portfólio</h1>
          <nav>
            <button 
              className={activeSection === 'sobre' ? 'active' : ''} 
              onClick={() => setActiveSection('sobre')}
            >
              Sobre
            </button>
            <button 
              className={activeSection === 'projetos' ? 'active' : ''} 
              onClick={() => setActiveSection('projetos')}
            >
              Projetos
            </button>
            <button 
              className={activeSection === 'contato' ? 'active' : ''} 
              onClick={() => setActiveSection('contato')}
            >
              Contato
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        <div className="container">
          {activeSection === 'sobre' && (
            <section className="section">
              <h2>Sobre Mim</h2>
              <p>
                Olá! Sou um desenvolvedor apaixonado por tecnologia e inovação.
                Este é meu portfólio construído com React + TypeScript + Vite.
              </p>
              <div className="skills">
                <span className="skill">React</span>
                <span className="skill">TypeScript</span>
                <span className="skill">JavaScript</span>
                <span className="skill">HTML/CSS</span>
              </div>
            </section>
          )}

          {activeSection === 'projetos' && (
            <section className="section">
              <h2>Meus Projetos</h2>
              <div className="projects-grid">
                <div className="project-card">
                  <h3>Portfólio V2</h3>
                  <p>Site pessoal construído com React e TypeScript</p>
                  <div className="project-tech">
                    <span>React</span>
                    <span>TypeScript</span>
                    <span>Vite</span>
                  </div>
                </div>
                <div className="project-card">
                  <h3>Projeto em Desenvolvimento</h3>
                  <p>Mais projetos em breve...</p>
                  <div className="project-tech">
                    <span>Em breve</span>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeSection === 'contato' && (
            <section className="section">
              <h2>Entre em Contato</h2>
              <p>Vamos conversar sobre oportunidades e projetos!</p>
              <div className="contact-info">
                <a href="mailto:seu-email@exemplo.com" className="contact-link">
                  📧 Email
                </a>
                <a href="https://github.com/ailujailuj" className="contact-link">
                  🐙 GitHub
                </a>
                <a href="https://linkedin.com/in/seu-perfil" className="contact-link">
                  💼 LinkedIn
                </a>
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Meu Portfólio. Construído com ❤️ e React.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
