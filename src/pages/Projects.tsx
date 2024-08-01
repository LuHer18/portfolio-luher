import { useContext } from "react"
import { Layout } from "../Layout"
import { LanguageContext } from "../context/LanguageContext"
import { CardProject } from "../components";
import styleProjects from "./Projects.module.css"


export const Projects = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    return null
  }
  const title = context.titleLanguage
  const data = context.data;
  return (
    <Layout>
      <h1 className="title1">{title.project}</h1>
      <main className={styleProjects.cardMain}>
        {
          data?.projects.map(project => (

            <CardProject key={project.name} {...project} />

          ))
        }
      </main>

    </Layout>
  )
}
