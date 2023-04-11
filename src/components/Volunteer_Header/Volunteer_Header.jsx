import '../Header/Header.css';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { db } from "../../firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

export default function Header(props) {
    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('sign out successful');
            handleSubmit();
        }).catch(error => console.log(error));
    }

    // This function "handleSubmit" allows us to submit data and link to a new page
    const navigate = useNavigate();

    const handleSubmit = event => {

        // Redirect to volunteer ui
        navigate('/');

    };
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
            <div className="container-fluid">
                <div className="navbar-brand"><Link to='/volunteerui'>MealSwipes</Link></div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> {/* Hamburguer Menu */}
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/volunteerui'>HomePage</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/vprofinfo'>Profile Information</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' onClick={userSignOut}>Sign Out</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}