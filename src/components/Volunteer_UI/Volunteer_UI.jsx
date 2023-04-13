import VHeader from '../Volunteer_Header/Volunteer_Header_Home.jsx';
import './Volunteer_UI.css';
import { Link } from 'react-router-dom';
//<FilePerson className="centerFile"/>

export default function Volunteer_UI(){
    return(
        <body>
            <VHeader num={4}/>
            <section className="push"></section>
        

            <div className="row volunteer-cards"> {/* CARDS */}
                {/* SECOND CARD */}
                <div className="col card next-trips mt-3 mx-4">
                    <i className="bi bi-clipboard-check" />
                    <div className="card-body">
                        <div className = "card-header">
                            <i id = "profileicon"className="fa-solid fa-user"/>
                            <h5 className="card-title">PENDING TRIPS</h5>
                        </div>
                        <div className="row py-3 border-bottom">
                            <div className="col">
                                <div className="card-title my-0 mb-2 h6">Friday, March 17th</div>
                                <p className="small m-0">Time: 2:30 pm</p>
                            </div>
                            <div className="col buttons">
                                <button><a className="startchat" href="chat.html"><i className="fas fa-comment-dots"/></a></button>
                                <button className="viewmap"><i className="fas fa-location-pin" /></button>
                                <button className="accept"><i className="fas fa-check" /></button>
                                <button className="reject"><i className="fas fa-times" /></button>
                            </div>
                        </div>
                        <div className="row py-3 border-bottom">
                            <div className="col">
                                <div className="card-title my-0 mb-2 h6">Saturday, March 18th</div>
                                <p className="small m-0">Time: 2:30 pm</p>
                            </div>
                               <div className="col buttons">
                                <button><a className="startchat" href="chat.html"><i className="fas fa-comment-dots"/></a></button>
                                <button className="viewmap"><i className="fas fa-location-pin" /></button>
                                <button className="accept"><i className="fas fa-check" /></button>
                                <button className="reject"><i className="fas fa-times" /></button>
                            </div>
                        </div>
                        <div className="row py-3 border-bottom">
                            <div className="col">
                                <div className="card-title my-0 mb-2 h6">Sunday, March 19h</div>
                                <p className="small m-0">Time: 2:30 pm</p>
                            </div>
                            <div className="col buttons">
                                <button><a className="startchat" href="chat.html"><i className="fas fa-comment-dots"/></a></button>
                                <button className="viewmap"><i className="fas fa-location-pin" /></button>
                                <button className="accept"><i className="fas fa-check" /></button>
                                <button className="reject"><i className="fas fa-times" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row"> {/* MAP */}
                <div className="col section-header my-2 mx-0">
                <div className="container-fluid map-container-2">
                    <iframe src="https://maps.google.com/maps?q=chicago&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} allowFullScreen />
                </div>
                </div>
            </div>
        </body>
             
                   
    )
}


