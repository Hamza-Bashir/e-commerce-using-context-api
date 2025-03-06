 import {useState, useContext, createContext, useEffect} from "react"

 const AuthContext = createContext()

 const AuthProvider = ({children})=>{
    const [auth,setAuth] = useState({
        
        token:""
    })

    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(token){
            setAuth({...auth, token:token})
        }
    }, [])
    return <>
    <AuthContext.Provider value={{auth,setAuth}}>
        {children}
    </AuthContext.Provider>
    </>
 }

 const useAuth = () => useContext(AuthContext)

 export {useAuth, AuthProvider}