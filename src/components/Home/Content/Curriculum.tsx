import { SubContentLanguage } from "../../../type"
import { IconCv } from "../../Icons/IconCv"
import { IconDownload } from "../../Icons/IconDownload"
import style from "./Curriculum.module.css"

type PropsCurriculum = {
    title: string,
    subContent: SubContentLanguage
}

export const Curriculum = ({ title, subContent }: PropsCurriculum) => {
    return (
        <section className={style.curriculumContainer}>
            <h2 className='title2'>{title}</h2>
            <div className={style.buttonContainer}>
                <button className={`button-text button-style ${style.buttonOrder} ${style.buttonCV}`}><IconCv />{subContent.viewCurriculum}</button>
                <button className={`button-text button-style ${style.buttonOrder} `}><IconDownload />{subContent.download}</button>
            </div>
        </section>
    )
}

