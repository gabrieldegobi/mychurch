import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import NavBar from "../Components/NavBar/NavBar"
import Layout from "../Layout/Layout"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}