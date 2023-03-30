import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx';
import Sign_In from './components/Sign_In/Sign_In.jsx';
import Volunteer_Sign_Up from './components/Volunteer_Sign_Up/Volunteer_Sign_Up.jsx';
import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" crossorigin></script>

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/about' element={<About/>}  />
        <Route path='/signin' element={<Sign_In/>}  />
        <Route path='/volsignup' element={<Volunteer_Sign_Up/>}  />
      </Routes>
    </BrowserRouter> 
  )
}

export default App;
