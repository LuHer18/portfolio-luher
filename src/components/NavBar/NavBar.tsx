import { NavLink } from "react-router-dom"
import { spanishNav } from "../../data/navLanguage"
import style from './NavBar.module.css'
import { IconAbout } from "../../assets/IconAbout"

export const NavBar = () => {
  return (
    <footer className={style.footer}>
    <nav className={style.nav}>
      <ul className={style.ul}>
        {spanishNav.map(item => (
          <li key={item.id}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className={style.ul2}>
        <IconAbout/>
      </ul>
    </nav>
  </footer>
  )
}
