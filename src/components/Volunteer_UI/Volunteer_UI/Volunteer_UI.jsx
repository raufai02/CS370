import VHeader from '../Volunteer_Header/Volunteer_Header.jsx';
import './Volunteer_UI.css';
import {FilePerson} from 'react-bootstrap-icons';
import Timeline from "./Timeline";
//<FilePerson className="centerFile"/>

export default function Volunteer_UI(){
    return(
        <body>
            <VHeader num={4}/>
            <section className="push"></section>
        

            <div className="row volunteer-cards"> {/* CARDS */}
                {/* SECOND CARD */}
                <div className="col card next-trips mt-3 mx-4">
                    <div className="card-body">
                        <h5 className="card-title">Available Jobs</h5>
                        <Timeline/>
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


