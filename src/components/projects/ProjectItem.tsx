import styles from './projectItem.module.scss';

interface ProjectItemProps {
  title: string;
  tech: string;
  responsibilities: string[];
  link: string;
}

function ProjectItem({ title, tech, responsibilities, link }: ProjectItemProps) {
  return (
    <div className={styles.project}>
      <div className={styles.projectContent}>
        <h3>{title}</h3>
        <p className={styles.projectTech}>{tech}</p>
        <div className={styles.projectDescription}>
          <p><strong>Responsabilidades:</strong></p>
          <ul>
            {responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
          Visitar website
        </a>
      </div>
    </div>
  );
}

export default ProjectItem;
