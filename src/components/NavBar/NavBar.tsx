import { NavLink } from "react-router-dom"
import { spanishNav } from "../../data/navLanguage"

export const NavBar = () => {
    console.log(spanishNav)
  return (
    <footer>
    <nav>
      <ul>
        {spanishNav.map(item => (
          <li key={item.id}> {/* Añadido <li> para cada NavLink */}
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
