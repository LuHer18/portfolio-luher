import { NavLink } from "react-router-dom"
import style from './NavBar.module.css'
import { IconAbout, IconProjects, IconChangeLanguage, IconAvatar } from "../Icons"
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

interface IconNavbar {
  [key: string]: React.ComponentType;
}

export const NavBar = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    return null;
  }
  const {navLanguage, handleLanguage, language} = context

  
  const iconNavbar : IconNavbar = { IconAvatar ,IconAbout, IconProjects }

  return (
    <footer className={style.footer}>
      <nav className={style.nav}>
        <ul className={style.ul}>
          {navLanguage.map(item => {
            const Icon= iconNavbar[item.iconName]
            return (<li className={style.listNavBar} key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) => ` ${(isActive ? style.active : '')} ${style.navLink}`}
              >
                <div className={style.iconbox}>
                  <span className={`button-text ${style.tooltip}`}>{item.title}</span>
                  <Icon/>
                </div>
              </NavLink>
            </li>
            )
          })}
        </ul>
        <ul className={style.ul2}>
          <li className={style.listNavBar}>
            <div className={style.iconbox} onClick ={handleLanguage}>
            <span className={`button-text ${style.tooltip} ${style.tooltipRight}`}>{language}</span>
              <IconChangeLanguage />
            </div>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
