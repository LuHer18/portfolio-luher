import { createContext } from "react";
import { DataNav, SubContentLanguage, TitleLanguage } from "../type";

export interface LanguageContext {
    language: string;
    titleLanguage: TitleLanguage;
    navLanguage: DataNav[];
    subContentLanguage: SubContentLanguage;
    handleLanguage: ()=> void
}

export const LanguageContext = createContext <LanguageContext | undefined>(undefined)
