import { useContext,useNavigate } from "react"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AuthContext } from "../utilis/context";
import { Navigate } from "react-router-dom"

function RequiredLayout(){
    const {currentUser} = useContext(AuthContext);
    if(!currentUser) return <Navigate to = "/login"/>;
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
export default RequiredLayout