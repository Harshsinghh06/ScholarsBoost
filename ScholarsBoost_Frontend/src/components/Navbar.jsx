import { useContext } from "react";
import { AuthContext } from "../utilis/context";
import { Link } from "react-router-dom";

function Navbar(){
    const {currentUser} = useContext(AuthContext);
    return <>
    <div className="">
        <div className="p-5 justify-between flex gap-20 items-center pl-10 pr-10">
            <div className="left">
                 <img src="/logo.jpg" alt="" className="w-14 h-14"/>
            </div>
            <div className="right flex gap-10 items-center"> 
                <Link to = "/"><div className="hover:text-red-600 hover:underline cursor-pointer">Home</div></Link>
                <Link to = "/"><div className="hover:text-red-600 hover:underline cursor-pointer">MindMasters Counselling</div></Link>
                <Link to = "/blog"><div className="hover:text-red-600 hover:underline cursor-pointer">Blog</div></Link>
                <Link to = "/contact"><div className="hover:text-red-600 hover:underline cursor-pointer">Contact</div></Link>
                <Link to = "/about"><div className="hover:text-red-600 hover:underline cursor-pointer">About Us</div></Link>
                <Link to = "/policy"><div className="hover:text-red-600 hover:underline cursor-pointer">Policy</div></Link>
                {currentUser?<Link to = {`/profile${currentUser._id}`}><div className="hover:text-red-600 hover:underline cursor-pointer">{currentUser.username}</div></Link>:
                <Link to = "/login"><div className="hover:text-red-600 hover:underline cursor-pointer">Login</div></Link>}
                {!currentUser && <Link to = "/register"><div className="cursor-pointer bg-red-600 text-white p-2 rounded-lg">Register</div></Link>}
            </div>
        </div>
        </div>
    </>
}
export default Navbar