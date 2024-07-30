import { Curriculum } from "../../../type";
import style from "./About.module.css"

type PropsAbout = {
    title: string;
    data: Curriculum | null
}

export const About = ({title, data}: PropsAbout) => {
  return (
    <section className={style.aboutContainer}>
        <h2 className="title2">{title}</h2>
        <div className={style.pContainer}>
            <p className="paragraph">{data?.basics.summary[0]}</p>
            <p className="paragraph">{data?.basics.summary[1]}</p>
        </div>
    </section>
  )
}
