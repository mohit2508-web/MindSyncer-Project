import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from 'react-router-dom';

function Layout() {
    const location = useLocation()
    const showHeader = location.pathname === '/dashboard' 
    const showFooter = location.pathname === '/dashboard' || location.pathname === '/Explore' 

    return(
        <>
        { !showHeader && <Header /> }
        <Outlet />
        { !showFooter && <Footer /> }
        </>
    )
}
export default Layout