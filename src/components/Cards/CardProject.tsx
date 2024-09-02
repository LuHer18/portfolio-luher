import { Project } from '../../type'
import { Demo, GitHub } from '../Icons'
import styleCard from './CardProject.module.css'



export const CardProject = (project: Project) => {


  const urlImage = `../../../assets/${project.image}.webp`

  return (
    <article className={styleCard.cardContainer}>

      <header>
        <img className={styleCard.imgCard} src={urlImage} alt="imagen proyecto" />
        <div className={styleCard.containerContent}>
          <h2 className={`title2`}>{project.name}</h2>
          <p className={`paragraph`}>{project.description}</p>
        </div>
      </header>

      <footer className={styleCard.cardContainerEnlaces}>
        <a className={`button-text ${styleCard.enlaces}`} href={project.url} target='_blank'
          rel='noopener noreferrer'>
          <Demo />
        </a>
        <a className={`button-text ${styleCard.enlaces}`} href={project.urlGitHub} target='_blank'
          rel='noopener noreferrer'>
          <GitHub />
        </a>
      </footer>
    </article>
  )
}
