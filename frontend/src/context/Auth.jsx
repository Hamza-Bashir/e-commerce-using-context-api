import { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: "",
    user: null
  });

  // Load the token and user from localStorage when the app starts
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    // Check if the stored user is a valid JSON string
    if (storedToken && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setAuth({ token: storedToken, user: parsedUser });
      } catch (e) {
        console.error("Error parsing user data from localStorage:", e);
        localStorage.removeItem("user"); // Remove invalid user data
      }
    }
  }, []);

  // Save token and user to localStorage whenever the auth state changes
  useEffect(() => {
    if (auth.token && auth.user) {
      localStorage.setItem("token", auth.token);
      localStorage.setItem("user", JSON.stringify(auth.user));
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  }, [auth.token, auth.user]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
