import { PropsWithChildren, useEffect, useState } from "react"
import { LanguageContext } from "./LanguageContext"
import { englishNav, spanishNav } from "../data/navLanguage"
import { titleEnglish, titleSpanish } from "../data/titleLanguage"
import { subContentEnglish, subContentSpanish } from "../data/subContent"
import { Curriculum } from "../type"
import { englishParagraphs, spanishParagraphs } from "../data/aboutContent"
import { englishform, spanishForm } from "../data/formLanguage"


export const LanguageProvider = ({ children }: PropsWithChildren) => {
    const [language, setLanguage] = useState(localStorage.getItem("language") || "es")
    const [data, setData] = useState<Curriculum | null>(null)

    const navLanguage = (language === "es") ? spanishNav : englishNav
    const titleLanguage = (language === "es") ? titleSpanish : titleEnglish
    const subContentLanguage = (language === "es") ? subContentSpanish : subContentEnglish
    const aboutLanguage = (language === "es") ? spanishParagraphs : englishParagraphs
    const formLanguage = (language === "es") ? spanishForm : englishform

    useEffect(() => {
        const loadJson = async () => {

            try {
                let jsonData: Curriculum;
                if (language === "es") {
                    jsonData = (await import("../data/cvSpanish.json")).default
                } else if ((language === "en")) {
                    jsonData = (await import("../data/cvEnglish.json")).default
                } else {
                    throw new Error("No soporta este lenguaje")
                }

                setData(jsonData)
            } catch (error) {
                console.log(error)
            }
        }
        loadJson();

    }, [language])




    const handleLanguage = () => {
        const newLanguage = (language === "es") ? "en" : "es";
        setLanguage(newLanguage);
        localStorage.setItem("language", newLanguage); // Guardar en localStorage
    };
    return (
        <LanguageContext.Provider value={
            {
                language,
                data,
                navLanguage,
                titleLanguage,
                subContentLanguage,
                aboutLanguage,
                formLanguage,
                handleLanguage
            }}>
            {children}
        </LanguageContext.Provider>
    )
}
