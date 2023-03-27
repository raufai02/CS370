import VHeader from '../Volunteer_Header/Volunteer_Header.jsx';
import './V_Profile_Info.css';
import {FilePerson} from 'react-bootstrap-icons';
//<FilePerson className="centerFile"/>

export default function V_Profile_Info(){
    return(
        <body>
            <VHeader num={5}/>
            <section className="vh-100 profile-info">
                <div className="container py-5 h-100">
                    <div className="row backarrow"><a href="volunteer.html"><i className="bi bi-arrow-left" /></a></div>
                    <div className="row d-flex justify-content-center align-items-center h-100 mt-0">
                        <div className="col col-lg-6 mb-4 mb-lg-0">
                            <div className="card mb-3 profile-card">
                                <div className="row g-0">
                                    <div className="col-md-4 gradient-custom text-center text-white profile-pic">
                                        <img src="../MS_images/contact_image.png" className="img-fluid my-5" />
                                        <p>Marie Horwitz</p>
                                        <p>Volunter 1</p>
                                        <button type="button" className="btn btn-outline-dark">Edit Profile</button>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body p-4">
                                            <h6>Information</h6>
                                            <hr className="mt-0 mb-4" />
                                            <div className="row pt-1">
                                                <div className="col-6 mb-3 email">
                                                    <h6>Email</h6>
                                                    <p>info@example.com</p>
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