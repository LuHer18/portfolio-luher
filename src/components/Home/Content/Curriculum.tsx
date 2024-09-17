import { useState } from "react"
import { downloadPdf } from "../../../helper/downloadPdf"
import { SubContentLanguage } from "../../../type"
import { IconCv } from "../../Icons/IconCv"
import { IconDownload } from "../../Icons/IconDownload"
import style from "./Curriculum.module.css"

type PropsCurriculum = {
    title: string
    subContent: SubContentLanguage
    language: string
}

export const Curriculum = ({ title, subContent, language }: PropsCurriculum) => {
    const [loading, setLoading] = useState(false)

    const url = (language === "es")?'/assets/curriculum-spanish.pdf':'/assets/curriculum-english.pdf'; 
    const onDowload = () => {
        setLoading(true)
        downloadPdf(url);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        
    }   
    return (
        <section className={style.curriculumContainer}>
            <h2 className='title2'>{title}</h2>
            <div className={style.buttonContainer}>
                <button onClick={onDowload} disabled={loading} className={`button-text button-style ${style.buttonOrder} `}><IconDownload />{subContent.download}</button>
                <a
                    className={`button-text  ${style.buttonOrder} ${style.aCv} `}
                    href="https://curriculum-lh.netlify.app/" title="Enlace al curriculum"
                    target='_blank'
                    rel='noopener noreferrer'>
                    <IconCv />{subContent.viewCurriculum}
                </a>
            </div>
        </section>
    )
}

