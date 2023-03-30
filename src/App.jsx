import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx';
import Sign_In from './components/Sign_In/Sign_In.jsx';
import Donation_Poster from "./components/Donor/Donation_Poster.jsx";
import Donor_UI from './components/Donor_UI/Donor_UI.jsx';
import Volunteer_UI from "./components/Volunteer_UI/Volunteer_UI.jsx";
//import Volunteer_Sign_Up from './components/Volunteer_Sign_Up/Volunteer_Sign_Up.jsx';
import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Donor_Timeline from "./components/Donor/Donor_Timeline.jsx";
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" crossorigin></script>

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/about' element={<About/>}  />
        <Route path='/signin' element={<Sign_In/>}  />
        <Route path='/donortimeline' element={<Donor_Timeline/>}  />
        <Route path='/donationposter' element={<Donation_Poster/>}  />
        <Route path='/donorui' element={<Donor_UI/>} />
        <Route path='/volunteerui' element={<Volunteer_UI/>} />
      </Routes>
    </BrowserRouter> 
  )
}

export default App;