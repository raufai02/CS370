import SHeader from '../Shelter_Header/Shelter_Header.jsx';
import './Shelter_Info.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

import {doc, getDoc} from "firebase/firestore";
import {db} from "../../firebase";

import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase';
//<FilePerson className="centerFile"/>


export default function Shelter_Info(){
    const user = auth.currentUser;
    const [authUser, setAuthUser] = useState(null);
    const [role, setRole] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [name, setName] = useState('');

    async function userInfo(authUser){
        const docRef = doc(db, "users", authUser.uid);
        const docSnap = await getDoc(docRef);
        setRole(String(docSnap.data().role));
        setPhoneNum(String(docSnap.data().phoneNum));
        setName(String(docSnap.data().name));
    }

    useEffect(() => {
        userInfo(user);
    })
    return(
        <body>
            <SHeader></SHeader>
            <section className="vh-100 profile-info">
                <section className="push"></section>
                <div className="container py-5 h-100">
                <div className="row backarrow"><Link to='/donorui'><FontAwesomeIcon icon={ faArrowCircleLeft } color="grey" size="2xl"/></Link></div> 
                    <div className="row d-flex justify-content-center align-items-center h-100 mt-0">
                        <div className="col col-lg-6 mb-4 mb-lg-0">
                            <div className="card mb-3 profile-card">
                                <div className="row g-0">
                                    <div className="col-md-4 gradient-custom text-center text-white profile-pic">
                                        <img src="../MS_images/contact_image.png" className="img-fluid my-5" />
                                        <p>{name}</p>
                                        <p>{role}</p>
                                        <button type="button" className="btn btn-outline-dark">Edit Profile</button>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body p-4">
                                            <h6>Information</h6>
                                            <hr className="mt-0 mb-4" />
                                            <div className="row pt-1">
                                                <div className="col-6 mb-3 email">
                                                    <h6>Email</h6>
                                                    <p>{user.email}</p>
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <h6>Phone Number</h6>
                                                    <p className="text-muted">123 456 789</p>
                                                </div>
                                            </div>
                                            <h6>Past Trips</h6>
                                            <hr className="mt-0 mb-4" />
                                            <div className="row pt-1">
                                                <div className="col-6 mb-3">
                                                    <h6>Meals Delivered</h6>
                                                    <p className="text-muted">34</p>
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <h6>Miles traveled</h6>
                                                    <p className="text-muted">150</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </body>
    )
}