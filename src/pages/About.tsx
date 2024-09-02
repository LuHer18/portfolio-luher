import { useContext } from "react";
import { Layout } from "../Layout"
import { LanguageContext } from "../context/LanguageContext";
import styleAbout from "./About.module.css"


export const About = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    return null
  }
  const title = context.titleLanguage;
  const paragraphs = context.aboutLanguage;

  return (
    <Layout>
      <h1 className={styleAbout.title}>{title.about}</h1>
      <article className={styleAbout.containerAbout}>
        <img className={styleAbout.imgMe} src="./assets/me.webp" alt="me" />
        <div className={styleAbout.contentText}>
          {
            paragraphs.map((p, index) => {
              return (
                <p className={styleAbout.text} key={index}>{p}</p>
              )
            })
          }
        </div>
      </article>
    </Layout>

  )
}
