import { SubContentLanguage } from "../../../type"
import style from "./Contact.module.css"

type PropsContact = {
    title: string,
    subContent: SubContentLanguage
    openModal: ()=> void
}

export const Contact = ({title, subContent, openModal }: PropsContact) => {

  return (
    <section className={style.contactContainer}>
        <h2 className='title2'>{title}</h2>
        <div className={style.containerContentContact}>
            <div className={style.textContact}>
                <p className="paragraph">{subContent.p1}</p>
                <p className="paragraph">{subContent.p2}</p>
            </div>
            <button onClick={openModal} className={`button-text button-style ${style.buttonSendEmail}`}>{subContent.sendEmailButton}</button>
        </div>
        
    </section>
  )
}
