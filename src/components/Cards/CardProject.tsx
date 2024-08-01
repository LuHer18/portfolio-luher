import { Demo, GitHub } from '../Icons'
import styleCard from './CardProject.module.css'

export const CardProject = () => {

  const urlImage = `/assets/${'calendar'}.webp`

  return (
    <article className={styleCard.cardContainer}>
        <img className={styleCard.imgCard} src={urlImage} alt="imagen proyecto" />
        <div className={styleCard.containerContent}>
            <h2 className={`title2`}>Titulo</h2>
            <p className={`paragraph`}>Crea eventos, revisa y actualiza tu agenda, se más productivo.</p>
            <div className={styleCard.cardContainerEnlaces}>
              <a className={`button-text ${styleCard.enlaces}`} href=""><Demo/></a>
              <a className={`button-text ${styleCard.enlaces}`} href=""><GitHub/></a>
            </div>
        </div>
    </article>
  )
}
