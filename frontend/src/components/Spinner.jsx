import { useEffect, useState } from "react"
import {useNavigate, useLocation}  from "react-router-dom"

function Spinner({path="login"}){

    const [count,setCount] = useState(5)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((prev)=> --prev)
            
        }, 1000)

        count === 0 && navigate(`${path}`, {
            state:location.pathname
        })

        return ()=> clearInterval(interval)

    }, [count, navigate])

    return <>
     <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-sm p-6 text-center bg-white rounded-lg shadow-lg">
                <h1 className="mb-4 text-xl font-semibold text-gray-700">
                    Redirecting you in {count} second{count !== 1 && "s"}...
                </h1>
                <div className="mb-4 text-4xl font-bold text-gray-800">
                    <div className="w-16 h-16 mx-auto border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                </div>
                <p className="text-gray-500">Please wait while we redirect you...</p>
            </div>
        </div>
    </>
}

export default Spinner