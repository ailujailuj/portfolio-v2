import styles from '../styles/Skills.module.scss';

interface CertificationProps {
  year: string;
  title: string;
  link: string;
  source: string;
}

function Certification({ year, title, link, source }: CertificationProps) {
  return (
    <div className={styles.cert}>
      <span className={styles.certYear}>{year}</span>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.certLink}>
        {title}
      </a>
      <span className={styles.certSource}>{source}</span>
    </div>
  );
}

function Skills() {
  const primarySkills = ["HTML", "CSS", "JavaScript", "React", "VTEX"];
  const secondarySkills = ["Python", "NodeJs", "MySQL", "MongoDB", "React Native"];
  
  const certifications = [
    {
      year: "2023",
      title: "Developing AI Applications with Python and Flask",
      link: "https://www.coursera.org/account/accomplishments/verify/J865WP689BAS",
      source: "IBM + Coursera"
    },
    {
      year: "2023",
      title: "Python for Data Science, AI & Development",
      link: "https://www.coursera.org/account/accomplishments/verify/939NAPVSUA9E",
      source: "IBM + Coursera"
    },
    {
      year: "2023",
      title: "Developing Back-End Apps with Node.js and Express",
      link: "https://www.coursera.org/account/accomplishments/verify/CUJJG5SSWPMB",
      source: "IBM + Coursera"
    },
    {
      year: "2022-2023",
      title: "The Frontend Career Path",
      link: "https://scrimba.com/certificate/ugZvQrCr/gfrontend",
      source: "Scrimba"
    }
  ];

  return (
    <section className={styles.skillsSection}>
      <h2>Habilidades</h2>
      
      <div className={styles.skillsCategory}>
        <h3>Primárias</h3>
        <div className={styles.skillsList}>
          {primarySkills.map((skill, index) => (
            <span key={index} className={styles.skill}>{skill}</span>
          ))}
        </div>
      </div>

      <div className={styles.skillsCategory}>
        <h3>Secundárias</h3>
        <div className={styles.skillsList}>
          {secondarySkills.map((skill, index) => (
            <span key={index} className={`${styles.skill} ${styles.secondary}`}>{skill}</span>
          ))}
        </div>
      </div>

      <div className={styles.skillsCategory}>
        <h3>Certificações</h3>
        <div className={styles.certifications}>
          {certifications.map((cert, index) => (
            <Certification 
              key={index}
              year={cert.year}
              title={cert.title}
              link={cert.link}
              source={cert.source}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
