import styles from './header.module.scss';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

function Header({ activeSection, setActiveSection }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>Julia Lacerda</h1>
        <nav>
          <button 
            className={activeSection === 'inicio' ? styles.active : ''} 
            onClick={() => setActiveSection('inicio')}
          >
            Início
          </button>
          <button 
            className={activeSection === 'projetos' ? styles.active : ''} 
            onClick={() => setActiveSection('projetos')}
          >
            Projetos
          </button>
          <button 
            className={activeSection === 'habilidades' ? styles.active : ''} 
            onClick={() => setActiveSection('habilidades')}
          >
            Habilidades
          </button>
          <button 
            className={activeSection === 'sobre' ? styles.active : ''} 
            onClick={() => setActiveSection('sobre')}
          >
            Sobre
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
