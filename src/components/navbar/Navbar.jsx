import { NavLink } from "react-router-dom"
import styles from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <NavLink className={({isActive}) => isActive ? styles.navLinkActive : styles.navLink} to='/'>О Приложении</NavLink>
            <NavLink className={({isActive}) => isActive ? styles.navLinkActive : styles.navLink} to='/movies'>Фильмы</NavLink>
            <NavLink className={({isActive}) => isActive ? styles.navLinkActive : styles.navLink} to='/search'>Поиск</NavLink>
        </div>
    )
}