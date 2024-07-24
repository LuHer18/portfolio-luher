import { NavLink } from "react-router-dom"
import style from './NavBar.module.css'
import { IconAbout, IconProjects, IconChangeLanguage } from "../Icons"
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
  const {navLanguage, handleLanguage} = context

  
  const iconNavbar : IconNavbar = { IconAbout, IconProjects }

  return (
    <footer className={style.footer}>
      <nav className={style.nav}>
        <ul className={style.ul}>
          {navLanguage.map(item => {
            const Icon= iconNavbar[item.iconName]
            return (<li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <h3>{item.title}</h3>
                <Icon/>
              </NavLink>
            </li>
            )
          })}
        </ul>
        <ul className={style.ul2}>
          <IconChangeLanguage onClick ={handleLanguage} />
        </ul>
      </nav>
    </footer>
  )
}
