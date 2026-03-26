import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import style from "./Layout.module.css"

const Layout = () => {
    return (
        <div className={style.layout}>
            <NavBar></NavBar>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
