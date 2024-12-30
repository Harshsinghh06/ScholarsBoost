import { useContext } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Layout(){
    return <>
          <div className="w-full">
            <div className="sticky top-0 z-50">
                <Navbar/>
            </div>
            <div>
                <Outlet/>
            </div>
            <div>
                <Footer/>
            </div>
          </div>
    </>
}
export default Layout