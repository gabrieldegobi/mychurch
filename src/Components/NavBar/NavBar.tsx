import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "./NavBar.module.css"

const NavBar = () => {
    return (
        <header className={style.header}>
            <div className={style.limit_page}>
                <h1>My Church</h1>
                <nav className={style.nav} >
                    <ul>
                        <li>
                            <NavLink to="/" className={({ isActive }: { isActive: boolean }) => isActive ? style.active_link : style.link}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login" className={({ isActive }: { isActive: boolean }) => isActive ? style.active_link : style.link}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login" className={style.button_login}>Login</NavLink>
                        </li>
                    </ul>

                </nav>
            </div>
        </header >
    )
}

export default NavBar
