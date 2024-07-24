import { NavLink } from "react-router-dom"
import { spanishNav } from "../../data/navLanguage"
import style from './NavBar.module.css'

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
    </nav>
  </footer>
  )
}
