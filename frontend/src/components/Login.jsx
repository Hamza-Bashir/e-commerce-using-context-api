import axios from "axios";
import { useState } from "react";
import {toast} from "react-toastify"



function Login(){

    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e)=>{
        e.preventDefault();


        const userData = {email,password}

        try {
            const response = await axios.post("http://localhost:3000/login", userData)
            toast.success(response.data.message, {
                position:"top-left"
            })
        } catch (error) {
         toast.error(error.response.data.message, {
            position:"top-left"
         })   
        }
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <div className="w-full max-w-md p-8 bg-white rounded-lg">
            <h1 className="mb-6 text-3xl font-bold text-center">Login User</h1>
    
            <form className="space-y-4" onSubmit={handleSubmit}> 
              
    
              {/* Email Field */}
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-lg font-medium">Email</label>
                <input 
                  id="email" 
                  type="email" 
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Enter your email"
                />
              </div>
    
              {/* Password Field */}
              <div className="mb-4">
                <label htmlFor="password" className="block mb-2 text-lg font-medium">Password</label>
                <input 
                  id="password"
                  type="password" 
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Enter your password"
                />
              </div>
    
              
              {/* Submit Button */}
              <div className="text-center">
                <button 
                  type="submit" 
                  className="w-full p-3 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      );
}

export default Login