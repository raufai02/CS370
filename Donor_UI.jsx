import Donor_Header from '../Donor/Donor_Header.jsx';
import './Donor_UI.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'

import ReactDOM from 'react-dom'

//const element = <FontAwesomeIcon icon={faClipboardCheck} />


export default function Donor_UI () {

    
    return (

        
        <body>

            
            <Donor_Header />
            <p>s</p>
            <p> ad</p>
<div className="row restaurant-cards"> {/* CARDS */}
  <div className="col card create-task mt-3 mx-4"> {/* FIRST CARD */}
  <FontAwesomeIcon icon={faClipboardCheck} size="2xl" />
    <p></p>
    <div className="card-body">
      <div className="row">
        <h5 className="card-title">CREATE NEW TASK</h5>
      </div>
      <form id="form" className="row">
        <label htmlFor="title"><b>Donation Title:</b></label>
        <input type="text" placeholder="Give a name for your donation." name="title" required />
        <label htmlFor="quantity"><b>Quantity:</b></label>
        <input type="text" placeholder="How many servings (roughly)?" name="quantity" required />
        <label htmlFor="description"><b>Description:</b></label>
        <input type="text" placeholder="Provide a brief description of what you're donating." name="description" required />
        <p> </p>
        <p> </p>
        <label htmlFor="availability">When can this donation be picked up?</label>
        <select name="availability" id="availability">
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
        </select>
        <p> </p>
        <p> </p>
        <button id="post" type="submit">POST</button>
      </form>
      <div className="row button">
        <button>NOTIFY <br />VOLUNTEERS</button>
      </div>
    </div>
  </div>
  <div className="col card upcoming-trips mt-3"> {/* SECOND CARD */}
    <FontAwesomeIcon icon={faPlusCircle} size="2xl" />
    <p></p>
    <div className="card-body">
      <h5 className="card-title">ONGOING TASKS</h5>
      <div className="row py-3 border-bottom">
        <div className="col">
          <div className="card-title my-0 mb-2 h6">Friday, March 17th</div>
          <p className="small m-0">Time: 2:30 pm</p>
        </div>
        <div className="col">
          <button><u>See details</u></button>
        </div>
        <div className="col">
            <button className='chatbubbles'><a href="chat.html"><FontAwesomeIcon icon={faComment} color="black" size="2xl" /></a></button>
        </div>
      </div>
      <div className="row py-3 border-bottom">
        <div className="col">
          <div className="card-title my-0 mb-2 h6">Saturday, March 18th</div>
          <p className="small m-0">Time: 2:30 pm</p>
        </div>
        <div className="col">
          <button><u>See details</u></button>
        </div>
        <div className="col">
          <button className='chatbubbles'><a href="chat.html"><FontAwesomeIcon icon={faComment} color="black" size="2xl" /></a></button>
        </div>
      </div>
      <div className="row py-3 border-bottom">
        <div className="col">
          <div className="card-title my-0 mb-2 h6">Sunday, March 19h</div>
          <p className="small m-0">Time: 2:30 pm</p>
        </div>
        <div className="col">
          <button><u>See details</u></button>
        </div>
        <div className="col">
            <button className='chatbubbles'><a href="chat.html"><FontAwesomeIcon icon={faComment} color="black" size="2xl" /></a></button>
        </div>
      </div>
    </div>
  </div>
</div>


        </body>
    )
}