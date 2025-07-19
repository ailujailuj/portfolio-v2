import styles from './about.module.scss';

function About() {
  return (
    <section className={styles.aboutSection}>
      <h2>Sobre</h2>
      <div className={styles.aboutContent}>
        <p>
          Estudo desenvolvimento front-end há dois anos, sendo um ano de experiência 
          profissional. Em agosto de 2022 iniciei como desenvolvedora front-end na 
          Avanti Desenvolvimento de Sistemas, trabalhando no desenvolvimento de 
          projetos que estão destacados aqui neste portfólio, além de pelo menos 
          outros sete que não foram mencionados.
        </p>
        <p>
          Sou reconhecida por minha dedicação e compromisso com o sucesso dos 
          projetos, pelo detalhismo da entrega e fidelidade quanto ao layout 
          proposto, por minhas habilidades de comunicação e trabalho em equipe, 
          e por apresentar soluções criativas e eficazes.
        </p>
        <p>
          Atualmente, curso Ciência da Computação na Unisul e estou estudando 
          desenvolvimento Full Stack pela IBM no Coursera. Além disso, estou 
          trabalhando com o desenvolvimento de uma plataforma para comercialização 
          de cestas orgânicas através do Laboratório de Comercialização da 
          Agricultura Familiar da UFSC, utilizando Python e Django.
        </p>
        <p>
          Tenho 25 anos e moro em Florianópolis. Sou entusiasta de atividades 
          físicas e pratico ioga regularmente, gosto de trilhas, de acampar, 
          andar de bicicleta e nadar no mar. Também gosto de música, cinema e 
          de ler bons livros de romance, meus escritores favoritos são o 
          Dostoiévski e a Clarice Lispector. Já fui fotógrafa, cineasta e 
          costureira, e às vezes ainda sou, como hobby. Sou tranquila, curiosa 
          e apaixonada por desafios lógicos.
        </p>
        <div className={styles.downloadCv}>
          <a href="/cv-julia-lacerda.pdf" target="_blank" rel="noopener noreferrer" className={styles.cvButton}>
            Baixar currículo
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
