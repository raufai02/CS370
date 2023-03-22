import Donor_Header from '../Donor/Donor_Header.jsx';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './Donation_Poster.css';

export default function Donation_Poster(){

    const navigate = useNavigate();
    const handleSubmit = event => {
        navigate("/donortimeline");
    }

    return(

        <body>
            <div className="col section-header my-2 mx-0">Post a donation:</div>
            <Donor_Header num={2}/>
            <div className="signin_container">
                    <form id="donationposter" onSubmit={handleSubmit}>
                        <label htmlFor="title"><b>Donation Title:</b></label>
                        <input id="sititle" type="text" placeholder="Enter a title for you donation." name="title" required />
                        <label htmlFor="quantity"><b>Quantity:</b></label>
                        <input id="siquantity" type="text" placeholder="How many servings of food are you donating (roughly)?" name="quantity" required />
                        <label htmlFor="description"><b>Description of Donation:</b></label>
                        <input id="sidescription" type="text" placeholder="Please provide a brief description of what you're donating." name="description" required />
                        <p></p>
                        <p></p>
                        <p></p>
                        <label htmlFor="availability"><b>When do you want this donation to expire?</b></label>
                        <p></p>
                        <select name="availability" id="availability" required>

                            <option value="12PM">12:00 PM</option>
                            <option value="1PM">1:00 PM</option>
                            <option value="2PM">2:00 PM</option>
                            <option value="3PM">3:00 PM</option>
                            <option value="4PM">4:00 PM</option>
                            <option value="5PM">5:00 PM</option>
                            <option value="6PM">6:00 PM</option>
                            <option value="7PM">7:00 PM</option>
                            <option value="8PM">8:00 PM</option>
                            <option value="9PM">9:00 PM</option>
                            <option value="10PM">10:00 PM</option>
                            <option value="11PM">11:00 PM</option>
                            <option value="12AM">12:00 AM</option>
                            <option value="1AM">1:00 AM</option>
                            <option value="2AM">2:00 AM</option>
                    
                            <p> </p>
                            </select>
                  
                            <button type="submit">Submit</button>
                    </form>
                </div>
        </body>
    )
}