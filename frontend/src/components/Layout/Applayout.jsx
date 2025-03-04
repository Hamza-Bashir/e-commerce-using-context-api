import Home from "../Home"
import {Outlet} from "react-router-dom"



function Applayout(){
    return <>
    <Home/>
    <Outlet/>
    </>
}

export default Applayout