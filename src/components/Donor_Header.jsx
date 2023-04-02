import '../Header/Header.css';
import {Link} from "react-router-dom";

function Donor_Header(props){
    return(
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
            <div className="container-fluid">
                <div className="navbar-brand"><Link to='/'>MealSwipes</Link></div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> {/* Hamburguer Menu */}
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/donorui'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/restinfo'>Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/signin'>History</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/restreviews'>Write a Review</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Donor_Header;