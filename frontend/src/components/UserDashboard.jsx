import { useAuth } from "@/context/Auth"
import { useState } from "react"
import Spinner from "./Spinner"


function UserDashboard(){
    const {auth, setAuth} = useAuth()

    const [ok, setOk] = useState(false)

    if(!auth.user){
        return <>
        <Spinner/>
        </>
    }
    return <>
    {auth.user.role === 0 ? (
        <h1>DashBoard</h1>
    ):(
        <Spinner/>
    )}
    
    </>
}

export default UserDashboard