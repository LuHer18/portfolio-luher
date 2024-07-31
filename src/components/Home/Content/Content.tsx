import { useContext } from 'react'
import style from './Content.module.css'
import { LanguageContext } from '../../../context/LanguageContext'
import { Contact } from './Contact'
import { Curriculum } from './Curriculum'
import { About } from './About'
import { Project } from './Project'
export const Content = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    return null
  }

  const { titleLanguage, subContentLanguage, data } = context
  return (
    <section className={style.container}>
      <article className={`${style.bg} ${style.yellowb}`}><About title={titleLanguage.about} data ={data}/></article>
      <article className={`${style.bg} ${style.blueb}`}><Project title= {titleLanguage.project}/></article>
      <article className={`${style.bg} ${style.redb}`}>
        <Contact title={titleLanguage.contact} subContent={subContentLanguage} />
      </article>
      <article className={`${style.bg} ${style.blueb}`}>
        <Curriculum title={titleLanguage.curriculum} subContent={subContentLanguage}/>
      </article>
      <article className={`${style.bg} ${style.yellowb}`}><h2 className='title2'>{titleLanguage.skills}</h2></article>
    </section>
  )
}
