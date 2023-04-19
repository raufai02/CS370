import volunteer from './volunteer.png';
import Header from '../Header/Header.jsx';
import './Sign_In.css';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { signInWithEmailAndPassword, setPersistence, browserSessionPersistence} from "firebase/auth";
import { db } from "../../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';



export default function Sign_In() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();

        setPersistence(auth, browserSessionPersistence)
            .then(() => {
                // Existing and future Auth states are now persisted in the current
                // session only. Closing the window would clear any existing state even
                // if a user forgets to sign out.
                // ...
                // New sign-in will be persisted with session persistence.
                signInWithEmailAndPassword(auth, email, password);
                handleSubmit();
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    const [authUser, setAuthUser] = useState(null);
    const [role, setRole] = useState('');

    //use the role variable to navigate to correct user page

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                userRole(user).then((rl) => {
                    setRole(rl)
                    setAuthUser(user)
                });
            } else {
                setAuthUser(null);
                setRole(null);
            }
        });

        return () => {
            listen();
        }
    }, []);

    async function userRole(authUser) {
        const docRef = doc(db, "users", authUser.uid);
        const docSnap = await getDoc(docRef);
        return String(docSnap.data().role);

    }

    // This function "handleSubmit" allows us to submit data and link to a new page
    const navigate = useNavigate();

    const handleSubmit = event => {

        // Redirect to volunteer ui

        if (role == "volunteer") {
            navigate('/volunteerui');
        }
        if (role == "donor") {
            navigate('/donorui');
        }
        if (role == "shelter") {
            navigate('/shelui');
        }

    };


    return (
        
        <body>
            <Header num={3} />
            <section id="section2">
                <div className="col section-header my-2 mx-0">LOG IN FORM</div>
                <div className="imgcontainer">
                    <img src={volunteer} alt={"avatar"} className={"avatar"} />
                </div>
                <div className="signin_container">
                    <form id="signin" onSubmit={signIn}>
                        <label htmlFor="uname"><b>Username</b></label>
                        <input id="email" type="email" placeholder="Enter Email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="psw"><b>Password</b></label>
                        <input id="sipass" type="password" placeholder="Enter Password" name="psw" required value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button type="submit">Login</button>
                    </form>
                    <label>
                        <input type="checkbox" defaultChecked="checked" name="remember" /> Remember me
                    </label>
                </div>
                <div className="container">

                    
                    <span className="signup">NOT A <Link to='/onboarding'>MEMBER?</Link> </span>
                </div>
            </section>
        </body>
    )
}