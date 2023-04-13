import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css';

class Header extends Component{

    state = {clicked : false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render() {
        return(
        <nav>
            <div className="navbar-brand"><Link to= "/">MealSwipes</Link></div>
            <div id = "navbar" className = {this.state.clicked ? "#navbar active": "#navbar"}>
                <ul>
                    <li className="nav-item">
                        <Link to='/donorui'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="active" to='/donorinfo'>Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/donorui'>History</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/donorreviews'>Write a Review</Link>
                    </li>
                </ul>
            </div>
            <div id = "mobile" onClick = {this.handleClick}>
                <i id = "bar" className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
            </div>
        </nav>
        )
    }
}

export default Header;