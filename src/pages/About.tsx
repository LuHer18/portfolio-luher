import { useContext } from "react";
import { Layout } from "../Layout"
import { LanguageContext } from "../context/LanguageContext";


export const About = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    return null
  }
  const title = context.titleLanguage;
  const paragraphs = context.aboutLanguage;

  return (
    <Layout>
      <h1 className="title1">{title.about}</h1>
      {
        paragraphs.map((p, index) => {
          return(
            <p className="paragraph" key={index}>{p}</p>
          )
        })
      }
    </Layout>
    
  )
}
