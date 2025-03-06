import { useAuth } from "@/context/Auth"

function Home(){
    
    const {auth,setAuth} = useAuth()
    return <>
    <h1>Home Page</h1>
    <p>{JSON.stringify(auth)}</p>
    
    </>
}

export default Home