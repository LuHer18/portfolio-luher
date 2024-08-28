import { createContext } from "react";
import { Curriculum, DataNav, FormLanguage, SubContentLanguage, TitleLanguage } from "../type";

export interface LanguageContext {
    language: string;
    data: Curriculum | null;
    titleLanguage: TitleLanguage;
    navLanguage: DataNav[];
    subContentLanguage: SubContentLanguage;
    aboutLanguage: string[];
    formLanguage: FormLanguage;
    handleLanguage: () => void
}

export const LanguageContext = createContext<LanguageContext | undefined>(undefined)
