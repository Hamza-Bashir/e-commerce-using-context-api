import Applayout from "./components/Layout/Applayout";
import Category from "./components/Category";
import Register from "./components/Register";
import Login from "./components/Login";
import ErrorPage from "./components/errorPage";
import {Routes,  Route} from "react-router-dom"
import Home from "./components/Home";
import Dashboard  from "./components/Dashboard";
import Forget from "./components/Forget";
function App() {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Applayout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="dashboard" element={<Dashboard/>} />
            <Route path="category" element={<Category/>} />
            <Route path="register" element={<Register/>} />
            <Route path="login" element={<Login/>} />
            <Route path="forget" element={<Forget/>} />
            <Route path="*" element={<ErrorPage/>}/>
          </Route>
          
        </Routes>
      
      </>
  );
}

export default App;
