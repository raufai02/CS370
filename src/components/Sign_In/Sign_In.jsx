import Header from '../Header/Header.jsx';
import './Sign_In.css';
import {Link} from "react-router-dom";
import volunteer from './volunteer.png';



export default function Sign_In(){
    return(
        <body>
            <Header num={3}/>
            <section id="section2">
                <div className="col section-header my-2 mx-0">LOG IN FORM</div>
                <div className="imgcontainer">
                    <img src={volunteer} alt={"avatar"} className={"avatar"} />
                </div>
                <div className="signin_container">
                    <form id="signin" action="donorTimeline.html">
                        <label htmlFor="uname"><b>Username</b></label>
                        <input id="siusername" type="text" placeholder="Enter Username" name="uname" required />
                        <label htmlFor="psw"><b>Password</b></label>
                        <input id="sipass" type="password" placeholder="Enter Password" name="psw" required />
                        <button type="submit">Login</button>
                    </form>
                    <label>
                        <input type="checkbox" defaultChecked="checked" name="remember" /> Remember me
                    </label>
                </div>
                <div className="container">
                <span className="psw">FORGOT <a className="forgotpass" href="#">PASSWORD?</a></span>
                <p>NOT A MEMBER? SIGN UP <Link to='/volsignup'>HERE</Link> </p>
                </div>
            </section>
        </body>
    )
}