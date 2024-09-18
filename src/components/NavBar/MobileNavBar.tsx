import { NavLink } from "react-router-dom"
import styleMobileNavBar from "./MobileNavBar.module.css"
import { DataNav } from "../../type"
import { useEffect, useRef, useState } from "react";

type PropsMobile = {
    navLanguage: DataNav[];
    handleLanguage: () => void;
    language: string;
}

export const MobileNavBar = ({ navLanguage, handleLanguage, language }: PropsMobile) => {
    const [showMenu, setShowMenu] = useState(false)
    const menuRef = useRef<HTMLElement | null>(null);
    const menuButtonRef = useRef<HTMLButtonElement | null>(null);

    const onMenu = () => {
        setShowMenu(!showMenu)
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target as Node) && 
            menuButtonRef.current &&
            !menuButtonRef.current.contains(event.target as Node)
        ) {
            setShowMenu(false);
        }
    };

    useEffect(() => {
        
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showMenu]);


    return (
        <section className={styleMobileNavBar.container}>
            <div className={styleMobileNavBar.containerButton}>
                <button className={styleMobileNavBar.buttonMobile} ref={menuButtonRef} onClick={onMenu} title="Menú">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="transparent" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                <div className={`${styleMobileNavBar.buttonMobile} button-text ${styleMobileNavBar.languageButton}`} onClick={handleLanguage}>
                    <span >{language}</span>
                </div>
            </div>
            {
                showMenu && (
                    <nav ref={menuRef} className={`${styleMobileNavBar.navMobile}`}>
                        <ul className={styleMobileNavBar.ulMobile}>
                            {navLanguage.map(item => {

                                return (<li className={styleMobileNavBar.listNavBar} key={item.id}>
                                    <NavLink
                                        to={item.path}
                                    >
                                        <span className={`button-text ${styleMobileNavBar.textColor}`} >{item.title}</span>

                                    </NavLink>
                                </li>
                                )
                            })}
                        </ul>
                    </nav>
                )
            }

        </section>
    )
}
