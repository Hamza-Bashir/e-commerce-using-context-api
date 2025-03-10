import Applayout from "./components/Layout/Applayout";
import Category from "./components/Category";
import Register from "./components/Register";
import Login from "./components/Login";
import ErrorPage from "./components/errorPage";
import {Routes,  Route} from "react-router-dom"
import Home from "./components/Home";
import UserDashboard  from "./components/UserDashboard";
import Forget from "./components/Forget";
// import AdminDashboard from "./components/AdminDashboard";
import AdminMenu from "./components/AdminPage/AdminMenu";
import CreateCategory from "./components/AdminPage/AdminCreateCategory";
import CreateProduct from "./components/AdminPage/AdminCreateProduct";
import Users from "./components/AdminPage/Users";
import UserMenu from "./components/UserPage/UserMenu";
import UserProfile from "./components/UserPage/UserProfile";
import UserOrders from "./components/UserPage/UserOrders";
function App() {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Applayout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="dashboard/user" element={<UserMenu/>} />
          <Route path="/user/profile" element={<UserProfile/>} />
          <Route path="/user/orders" element={<UserOrders/>} />
          <Route path="dashboard/admin" element={<AdminMenu/>} />
          <Route path="admin/create-category" element={<CreateCategory/>} />
          <Route path="admin/create-product" element={<CreateProduct/>} />
          <Route path="admin/users" element={<Users/>} />
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
