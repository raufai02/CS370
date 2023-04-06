import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx';
import Sign_In from './components/Sign_In/Sign_In.jsx';
import Volunteer_Sign_Up from './components/Volunteer_Sign_Up/Volunteer_Sign_Up.jsx';
import Volunteer_UI from './components/Volunteer_UI/Volunteer_UI.jsx';
import V_Profile_Info from './components/V_Profile_Info/V_Profile_Info.jsx';
import V_Reviews from './components/V_Reviews/V_Reviews.jsx';
import Donor_Sign_Up from './components/Donor_Sign_Up/Donor_Sign_Up.jsx';
import Shelter_Sign_Up from './components/Shelter_Sign_Up/Shelter_Sign_Up.jsx';
import Donor_UI from './components/Donor_UI/Donor_UI.jsx';
import Donor_Info from './components/Donor_Info/Donor_Info.jsx';
import Donor_Reviews from './components/Donor_Reviews/Donor_Reviews.jsx';
import Timeline from "./components/Volunteer_UI/Timeline";

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
        <Route path='/volunteerui' element={<Volunteer_UI/>}  />
        <Route path='/vprofinfo' element={<V_Profile_Info/>}  />
        <Route path='/vreviews' element={<V_Reviews/>}  />
        <Route path='/donsignup' element={<Donor_Sign_Up/>}  />
        <Route path='/shelsignup' element={<Shelter_Sign_Up/>}  />
        <Route path='/donorui' element={<Donor_UI/>}  />
        <Route path='/donorinfo' element={<Donor_Info/>}  />
        <Route path='/donorreviews' element={<Donor_Reviews/>}  />
        <Route path='/timeline' element={<Timeline/>} />}
      </Routes>
    </BrowserRouter> 
  )
}

export default App;
