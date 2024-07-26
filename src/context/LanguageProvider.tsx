import {PropsWithChildren, useState } from "react"
import { LanguageContext } from "./LanguageContext"
import { englishNav, spanishNav } from "../data/navLanguage"
import { titleEnglish, titleSpanish } from "../data/titleLanguage"
import { subContentEnglish, subContentSpanish } from "../data/subContent"


export const LanguageProvider = ({children}: PropsWithChildren) => {
    const [language, setLanguage] = useState("es")

    const navLanguage = (language === "es")? spanishNav: englishNav
    const titleLanguage = (language === "es")? titleSpanish: titleEnglish
    const subContentLanguage = (language === "es")? subContentSpanish: subContentEnglish

    

    const handleLanguage = () => {
        if(language === "es"){
            setLanguage("en")
        }else{
            setLanguage("es")
        }
    }
  return (
    <LanguageContext.Provider value={
        {   
            language,
            navLanguage, 
            titleLanguage,
            subContentLanguage,
            handleLanguage
        }}>
        {children}
    </LanguageContext.Provider>
  )
}
