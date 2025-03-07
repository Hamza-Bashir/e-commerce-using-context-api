import { useAuth } from "@/context/Auth"
import { useState } from "react"


function Dashboard(){
    const {auth, setAuth} = useAuth()

    const [ok, setOk] = useState(false)
    return <>
    {auth.token ? (
        <h1>DashBoard</h1>
    ):(
        <h1>Spinner</h1>
    )}
    
    </>
}

export default Dashboard