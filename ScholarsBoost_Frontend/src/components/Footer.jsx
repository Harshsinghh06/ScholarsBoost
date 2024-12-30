import { Link } from "react-router-dom"

function Footer(){
    return <>
     <div className="bg-black text-white">
        <div className="p-2 flex justify-between pl-10 pr-10">
         <div className="left flex flex-col items-center justify-center gap-3">
         <div className="flex flex-col text-start">
            <label htmlFor="Contact" className="text-white">Contact</label>
            <input type="text" className="p-1 text-black rounded-lg w-60"/>
            </div>
            <div className="flex flex-col text-start">
            <label htmlFor="Contact">Email Address</label>
            <input type="text" className="p-1 text-black rounded-lg w-60"/>
            </div>
            <button className="bg-red-600 p-2 rounded-lg">Submit</button>
         </div>
         <div className="right">
               <h1 className="text-2xl">Contact Us</h1>
               <div>
                <h1>+91 7302925785</h1>
                <h1>info@scholarsboost.com</h1>
                <div className="flex gap-2 justify-center">
                    <Link to = "https://www.instagram.com/scholarsboost?igsh=MWVlZDliaGI4NjRteA%3D%3D"><div><img src="/insta.png" alt="" className="w-9 h-9"/></div></Link>
                    <Link to = "https://www.linkedin.com/company/scholarsboost/?originalSubdomain=in"><div><img src="/linkedin.png" alt="" className="w-9 h-9"/></div></Link>
                    <Link to = "https://x.com/ScholarsBoost"><div><img src="/twitter.png" alt="" className="w-9 h-9"/></div></Link>
                    <Link to = "https://www.youtube.com/@ScholarsBoost"><div><img src="/you.png" alt="" className="w-9 h-9"/></div></Link>
                </div>
                <span className="text-2xl">Scholars</span>
                <span className="text-2xl text-red-600">Boost</span>
                <div>Copyright 2025. ScholarsBoost, All right reserved</div>
               </div>
         </div>
        </div>
     </div>
     </>
}
export default Footer