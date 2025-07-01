import { Outlet } from "react-router"
import { Header } from "./Header/Header"
import { Footer } from "./Footer/Footer"
import { Preloader } from "./preloader/Preloader"


export const Layout = () => {
    return (
        <div className="container">
            <Preloader/>
            <Header/>
            <main className="main container"><Outlet/></main>
            <Footer/>
        </div>


    )
}


