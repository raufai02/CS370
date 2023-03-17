import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx';
import Sign_In from './components/Sign_In/Sign_In.jsx';
import React from "react";
import './App.css';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/about' element={<About/>}  />
        <Route path='/signin' element={<Sign_In/>}  />
      </Routes>
    </BrowserRouter> 
  )
}

export default App;
