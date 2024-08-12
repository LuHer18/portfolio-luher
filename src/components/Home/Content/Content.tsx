import { useContext } from 'react'
import style from './Content.module.css'
import { LanguageContext } from '../../../context/LanguageContext'
import { Contact } from './Contact'
import { Curriculum } from './Curriculum'
import { About } from './About'
import { Project } from './Project'
import { Skills } from './Skills'

type ContentProps = {
  openModal: ()=> void
}
export const Content = ({openModal}: ContentProps) => {
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
        <Contact title={titleLanguage.contact} openModal={openModal} subContent={subContentLanguage} />
      </article>
      <article className={`${style.bg} ${style.blueb}`}>
        <Curriculum title={titleLanguage.curriculum} subContent={subContentLanguage}/>
      </article>
      <article className={`${style.bg} ${style.yellowb}`}><Skills title = {titleLanguage.skills} data ={data} /></article>
    </section>
  )
}
