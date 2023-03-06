import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main.tsx";
import Navbar from "./components/Navbar.tsx";

import "./style.css"


export default function App(){
  return (
    <div>
      
      <Navbar></Navbar>
      <div className="App">
        <BrowserRouter>
        <Routes>
          <Route  path= "/" element={<Main/>}/>
          
        </Routes>
        </BrowserRouter>
      </div>
      
    </div>
  );
}