import {Link} from "react-router-dom"
import { useAuth } from "@/context/Auth";

function Header() {

  const {auth,setAuth} = useAuth()

  const handlelogout = ()=>{
    localStorage.removeItem("token")
    setAuth({token:""})
  }
    return (
      <div className="py-4 text-white bg-gray-900">
        <div className="flex items-center justify-between max-w-screen-xl px-6 mx-auto">
          
          <div>
            <Link to="/" className="text-3xl font-bold text-gray-100 transition duration-300 hover:text-yellow-400">
              Logo
            </Link>
          </div>
          
         
          <div>
            <ul className="flex gap-8 text-lg">
                <Link to="/">
                <li className="transition duration-300 cursor-pointer hover:text-yellow-400">Home</li>
                </Link>
              
                <Link to="category">
                <li className="transition duration-300 cursor-pointer hover:text-yellow-400">Category</li>
                </Link>
                {auth.token === "" ? (
                  <>
                  <Link to="register">
                <li className="transition duration-300 cursor-pointer hover:text-yellow-400">Register</li>
                </Link>
                <Link to="login">
                <li className="transition duration-300 cursor-pointer hover:text-yellow-400">Login</li>
                </Link>
                  </>
                ):(
                  <>
                  <Link to="/">
                <li className="transition duration-300 cursor-pointer hover:text-yellow-400" onClick={handlelogout}>Logout</li>
                </Link>
                  </>
                )}
                <Link to="home">
                <li className="transition duration-300 cursor-pointer hover:text-yellow-400">Cart (0)</li>
                </Link>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default Header;
  