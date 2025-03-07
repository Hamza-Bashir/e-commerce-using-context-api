import { useState } from "react";
import axios from "axios";
import {toast} from "react-toastify"
import {useNavigate} from "react-router-dom"

function Forget(){

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [answer, setAnswer] = useState("")

    const handleSubmit = async (e)=>{
        e.preventDefault()

        const userData = {email,newPassword,answer}

        try {
            const response = await axios.post("http://localhost:3000/forget-password", userData)

            toast.success(response.data.message)
            navigate("/login")

        } catch (error) {
            toast.error(error.response.data.error)
            setEmail("")
            setAnswer("")
            setNewPassword("")
        }
    }
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <div className="w-full max-w-md p-8 bg-white rounded-lg">
            <h1 className="mb-6 text-3xl font-bold text-center">Reset Password</h1>
    
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Email Field */}
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-lg font-medium">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block mb-2 text-lg font-medium">Question</label>
                <input
                  id="password"
                  type="text"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your favourite sports"
                />
              </div>
    
              {/* Password Field */}
              <div className="mb-4">
                <label htmlFor="password" className="block mb-2 text-lg font-medium">New Password</label>
                <input
                  id="password"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
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
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      );
}

export default Forget