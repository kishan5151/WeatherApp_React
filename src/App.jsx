import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from "react-router-dom";
import Home from "./Home";
import Weather from "./Weather";
import Info from "./Info";
import Error from "./Error";
import './App.css'

const App=()=>{
  return(
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/weather" element={<Weather/>}/>
        <Route path="/info" element={<Info/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App;