import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {BrowserRouter} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import { AuthProvider } from "./context/Auth";

createRoot(document.getElementById("root")).render(

  <AuthProvider>
    <BrowserRouter>

<App />
<ToastContainer/>

</BrowserRouter>
  </AuthProvider>
    
  
  
      
    
);
