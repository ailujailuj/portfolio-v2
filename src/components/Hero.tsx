import styles from '../styles/Hero.module.scss';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

function Hero({ setActiveSection }: HeroProps) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Olá, me chamo <span className={styles.highlight}>Julia</span> e sou 
          <br />desenvolvedora front-end.
        </h1>
        <p className={styles.heroDescription}>
          Sou uma estudante de ciência da computação apaixonada por criar soluções, 
          por programação e pelo desenvolvimento de interfaces bonitas e responsivas. 
          Como desenvolvedora Front-end, trabalhei no desenvolvimento de e-commerces 
          de grandes marcas do mercado nacional.
        </p>
        <div className={styles.heroActions}>
          <button 
            className={styles.ctaButton}
            onClick={() => setActiveSection('projetos')}
          >
            Veja meus projetos
          </button>
          <p className={styles.location}>📍 Florianópolis, Brasil</p>
        </div>
        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/julia-lacerda-582b8214b/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/ailujailuj" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://t.me/ailuj_ailuj" target="_blank" rel="noopener noreferrer">
            Telegram
          </a>
          <a href="mailto:julialacerdaff@gmail.com">
            Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
