import { useState } from "react";
import axios from "axios";
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";


function Register() {
    const [name,setName] = useState("")
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [phoneNumber,setPhoneNumber] = useState("")
    const [address,setAddress] = useState("")
    const [answer, setAnswer] = useState("")

   const navigate = useNavigate()
    const handleSubmit = async (e)=>{
        e.preventDefault()

        const userData = {name,email,password,phoneNumber,address, answer}
        try {
          const response = await axios.post("http://localhost:3000/register", userData)

        toast.success(response.data.message, {position:"top-left"})
        navigate("/login")

        
        } catch (error) {
          
            const errorMsg = error.response.data.message
            toast.error(errorMsg, {position:"top-left"})
            setName("")
          setEmail("")
          setPassword("")
          setPhoneNumber("")
          setAddress("")
          setAnswer("")
          
        }
        
    }
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded-lg">
          <h1 className="mb-6 text-3xl font-bold text-center">Register User</h1>
  
          <form className="space-y-4" onSubmit={handleSubmit}> 
            {/* Username Field */}
            <div className="mb-4">
              <label htmlFor="username" className="block mb-2 text-lg font-medium">Username</label>
              <input 
                id="username"
                type="text" 
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Enter your username"
              />
            </div>
  
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
  
            {/* Phone Field */}
            <div className="mb-4">
              <label htmlFor="phone" className="block mb-2 text-lg font-medium">Phone</label>
              <input 
                id="phone"
                type="text" 
                value={phoneNumber}
                onChange={(e)=>setPhoneNumber(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Enter your phone number"
              />
            </div>
  
            {/* Address Field */}
            <div className="mb-4">
              <label htmlFor="address" className="block mb-2 text-lg font-medium">Address</label>
              <input 
                id="address"
                type="text" 
                value={address}
                onChange={(e)=>setAddress(e.target.value )}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Enter your address"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="address" className="block mb-2 text-lg font-medium">Question</label>
              <input 
                id="address"
                type="text" 
                value={answer}
                onChange={(e)=>setAnswer(e.target.value )}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Enter your favourite sports"
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
  
  export default Register;
  