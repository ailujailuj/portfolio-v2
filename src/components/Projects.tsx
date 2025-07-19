import ProjectItem from './ProjectItem';
import styles from '../styles/Projects.module.scss';

function Projects() {
  const projects = [
    {
      title: "Café Orfeu",
      tech: "React, Typescript e VTEX",
      responsibilities: [
        "Homepage",
        "Fluxo de cadastro e acesso do usuário b2b",
        "Landing page e demais funcionalidades relacionadas ao Clube de Assinaturas",
        "Algumas das páginas institucionais",
        "Correções de bugs gerais do projeto"
      ],
      link: "https://www.cafeorfeu.com.br/"
    },
    {
      title: "Bazar Horizonte",
      tech: "React, Typescript e VTEX",
      responsibilities: [
        "Homepage",
        "Header",
        "Menu mobile",
        "Página de produto",
        "Página de produto: Seletor de SKU customizado, que exibe uma ampla variedade de SKUs que podem ser adicionados ao carrinho simultaneamente, assim como o modal de imagens que é aberto ao clicar em alguma das variações",
        "Correções de bugs",
        "Ajustes de outras funcionalidades customizadas"
      ],
      link: "https://www.bazarhorizonte.com.br/"
    },
    {
      title: "Mizuno",
      tech: "React, Typescript e VTEX",
      responsibilities: [
        "Página de Produto: Infobanner dinâmico com as informações sobre linha, peso e tecnologia do produto",
        "Página de Produto: Melhoria do modal das imagens principais, inserindo a navegação por setas e o fechamento do modal",
        "Revisão detalhista da página de produto",
        "Ajustes visuais gerais e de responsividade",
        "Correções de bugs"
      ],
      link: "https://www.mizuno.com.br/"
    }
  ];

  return (
    <section className={styles.projectsSection}>
      <h2>Projetos</h2>
      {projects.map((project, index) => (
        <ProjectItem 
          key={index}
          title={project.title}
          tech={project.tech}
          responsibilities={project.responsibilities}
          link={project.link}
        />
      ))}
    </section>
  );
}

export default Projects;
