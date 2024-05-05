import { Outlet } from "react-router-dom"
import { Navbar } from "../components/navbar/Navbar"
import { Sidebar } from "../components/Sidebar/Sidebar"

export const Layout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </>
    )
}