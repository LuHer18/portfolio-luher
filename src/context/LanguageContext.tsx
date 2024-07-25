import { createContext } from "react";
import { DataNav, TitleLanguage } from "../type";

export interface LanguageContext {
    language: string;
    titleLanguage: TitleLanguage;
    navLanguage: DataNav[];
    handleLanguage: ()=> void
}

export const LanguageContext = createContext <LanguageContext | undefined>(undefined)
