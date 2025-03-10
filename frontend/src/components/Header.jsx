import { Link } from "react-router-dom";
import { useAuth } from "@/context/Auth";
import { useState } from "react";
import { ChevronDownIcon } from '@heroicons/react/solid'; // Import Heroicon

function Header() {
  const { auth, setAuth } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuth({ token: "" , user:null});
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

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
            ) : (
              <div className="relative">
                {/* Dropdown Button with Icon */}
                <button
                  className="flex items-center gap-2 transition duration-300 cursor-pointer hover:text-yellow-400"
                  onClick={toggleDropdown}
                >
                  {auth.user.role === 0 ? (
                    <h1>user</h1>
                  ):(
                    <h1>admin</h1>
                  )}
                  <ChevronDownIcon className="w-5 h-5" />
                </button>
                {/* Conditionally render the Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute right-0 z-10 w-48 mt-2 text-black bg-white rounded-lg shadow-lg">
                    <Link to={`dashboard/${auth.user.role === 0 ? 'user' : 'admin'}`}>
                      <li className="px-4 py-2 cursor-pointer hover:bg-gray-200">Dashboard</li>
                    </Link>
                    <Link to="/" onClick={handleLogout}>
                      <li className="px-4 py-2 cursor-pointer hover:bg-gray-200">Logout</li>
                    </Link>
                  </div>
                )}
              </div>
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
