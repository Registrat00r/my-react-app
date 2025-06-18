import { Outlet } from "react-router"
import { Header } from "./Header/Header"
import { Footer } from "./Footer/Footer"

export const Layout = () => {
    return (
        <div className="container">
            <Header/>
            <main><Outlet/></main>
            <Footer/>
        </div>


    )
}


