import About from "./components/About";
import Contact from "./components/Contact";
import Applayout from "./components/Layout/Applayout";

import {Routes, Router, Route} from "react-router-dom"

function App() {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Applayout/>}>
          
            <Route path="about" element={<About/>} />
            <Route path="contact" element={<Contact/>}/>
          
          </Route>
        </Routes>
      
      </>
  );
}

export default App;
