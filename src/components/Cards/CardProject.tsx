import { Project } from '../../type';
import { Demo, GitHub } from '../Icons';
import styleCard from './CardProject.module.css';
import { motion } from "framer-motion";

export const CardProject = (project: Project & { index: number }) => {
  const urlImage = `../../../assets/${project.image}.webp`;

  // Detectar si estamos en mobile
  const isMobile = window.innerWidth < 768;

  return (
    <motion.article
      className={styleCard.cardContainer}
      initial={{ opacity: 0, y: isMobile ? 30 : 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 50,
        delay: project.index * 0.1,
        duration: isMobile ? 0.3 : 0.5,
      }}
    >
      <header>
        <img className={styleCard.imgCard} src={urlImage} alt="imagen proyecto" />
        <div className={styleCard.containerContent}>
          <h2 className={`title2`}>{project.name}</h2>
          <p className={`paragraph`}>{project.description}</p>
        </div>
      </header>

      <footer className={styleCard.cardContainerEnlaces}>
        <a className={`button-text ${styleCard.enlaces}`} href={project.url} target='_blank' rel='noopener noreferrer'>
          <Demo />
        </a>
        <a className={`button-text ${styleCard.enlaces}`} href={project.urlGitHub} target='_blank' rel='noopener noreferrer'>
          <GitHub />
        </a>
      </footer>
    </motion.article>
  );
};

