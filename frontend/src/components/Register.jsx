import { useState } from "react";

function Register() {
    const [name,setName] = useState("")
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [phone,setPhone] = useState("")
    const [address,setAddress] = useState("")
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(name, email, password, phone, address)
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
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
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
  