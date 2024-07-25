import { useContext } from 'react'
import style from './Content.module.css'
import { LanguageContext } from '../../../context/LanguageContext'
export const Content = () => {
  const context = useContext(LanguageContext)
  if(!context){
    return null
  }
  
  const {titleLanguage} = context
  return (
    <section className={style.container}>
      <article className={`${style.bg} ${style.yellowb}`}><h2 className='title2'>{titleLanguage.about}</h2></article>
      <article className={`${style.bg} ${style.blueb}`}><h2 className='title2'>{titleLanguage.project}</h2></article>
      <article className={`${style.bg} ${style.redb}`}><h2 className='title2'>{titleLanguage.contact}</h2></article>
      <article className={`${style.bg} ${style.blueb}`}><h2 className='title2'>{titleLanguage.curriculum}</h2></article>
      <article className={`${style.bg} ${style.yellowb}`}><h2 className='title2'>{titleLanguage.skills}</h2></article>
    </section>
  )
}
