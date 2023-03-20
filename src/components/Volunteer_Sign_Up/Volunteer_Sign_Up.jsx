import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

import Header from '../Header/Header.jsx';
import './Volunteer_Sign_Up.css';

export default function Volunteer_Sign_Up(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [address, setAddress] = useState('');



    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                console.log(userCredential.user.uid);
                return setDoc(doc(db, "users", userCredential.user.uid),{
                    role: "volunteer",
                    name: name,
                    phoneNum: phoneNum,
                    address: address
                });
            }).then((userCredential) => {
        })
            .catch((error) => {
                console.log(error);
            });
    }

    return(
        <body>
            <Header num={4}/>
            <section id="section3" className="container-fluid"> {/*!--CONTACT FORM --*/}
                <div className="row">
                    <div className="col-md-3"> {/*!--LEFT COLUMN --*/}
                        <div className="contact-info">
                            <img className="contactpic" src="MS_images/Volunteer.jpg"/>
                            <h1>VOLUNTEER SIGN-UP</h1>
                            <h2>Sign up to help!</h2>
                        </div>
                    </div>

                    <div className="col-md-9"> {/*!--RIGHT COLUMN --*/}
                        <div className="contact-form">
                            <form id="Vsignup" action="" onSubmit={signUp}>
                            {/*!--NAME--*/}
                                <label className="form-label col-sm-2" htmlFor="fname">Full Name *:</label>
                                <input
                                    type="text" className="form-control" id="fname" placeholder="Name" required
                                    value={name} onChange={(e) => setName(e.target.value)}>
                                </input>


                            {/*!--PASSWORD--*/}
                                <label className="form-label col-sm-2" htmlFor="pass">Password*:</label>
                                <input
                                    type="password" className="form-control" id="pass" placeholder="Password" required
                                    value={password} onChange={(e) => setPassword(e.target.value)}>
                                </input>

                            {/*!--EMAIL ADDRESS --*/}
                                <label className="form-label col-sm-2" htmlFor="email">Email *:</label>
                                <input
                                    type="email" className="form-control" id="email" placeholder="Email" required
                                    value={email} onChange={(e) => setEmail(e.target.value)}>
                                </input>


                            {/*!--PHONE NUMBER --*/}
                                <label className="form-label col-sm-2" htmlFor="tel">Phone Number *:</label>
                                <input
                                    type="tel" className="form-control" id="phone" placeholder="Phone Number"
                                    required value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)}>
                                </input>

                            {/*!--ADDRESS--*/}
                                <label className="form-label col-sm-2" htmlFor="add">Address *:</label>
                                <input
                                    type="text" className="form-control" id="address" placeholder="Address" required
                                    value={address} onChange={(e) => setAddress(e.target.value)}>
                                </input>

                            {/*!--COMMENTS--*/}
                                <label className="form-label col-sm-2" htmlFor="comment">Comments:</label>
                                <textarea className="form-control" rows="5" id="comment"></textarea>

                            {/*!--CHECKBOX--*/}
                                <input type="checkbox" className="form-check-input" id="TeryC" required></input>
                                    <label
                                        className="form-check-label" htmlFor="TeryC">Accept Terms and Conditions
                                        *.
                                    </label>

                            {/*!--SEND--*/}
                                <button id="submit" type="submit">Send</button>

                            </form>
                        </div>
                        </div>
                    </div>
        </section>

        </body>
    )
}