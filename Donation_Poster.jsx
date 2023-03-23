import Donor_Header from '../Donor/Donor_Header.jsx';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './Donation_Poster.css';


import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


firebase.initializeApp({
    // your config
    apiKey: "AIzaSyDPrvNRiqlpUh4Tlqh3lrBTZOqwmvTg6QI",
    authDomain: "mealswipes-f0902.firebaseapp.com",
    projectId: "mealswipes-f0902",
    storageBucket: "mealswipes-f0902.appspot.com",
    messagingSenderId: "1016636753973",
    appId: "1:1016636753973:web:cf9bc5028c130674a6097c",
    measurementId: "G-E1M9GX8M3E"
  })
  
  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const analytics = firebase.analytics();

  

export default function Donation_Poster(){

    const navigate = useNavigate();
    // const handleSubmit = event => { // replaced the handleSubmit with the const sendTast
      //  navigate("/donortimeline");
    // }
    
    const tasksRef = firestore.collection('tasks'); // collect the tasks from the database!
    const [formValue, setFormValue] = useState({ title: '', quantity: '', description: '', availability: ''});
    const sendTask = async (e) => {
        navigate("/donortimeline"); // moved this code from the old submit button event handler

        e.preventDefault();
    
        await tasksRef.add({ // this code adds the form data to the backend database under the 'task' collection
          title: formValue.title,
          quantity: formValue.quantity,
          description: formValue.description,
          availability: formValue.availability
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          status:'available' // default status!
        })
    
        setFormValue({ title: '', quantity: '', description: '', availability: '' });
        //dummy.current.scrollIntoView({ behavior: 'smooth' });
      }

    return(
        <>
        <body>
            <div className="col section-header my-2 mx-0">Post a donation:</div>
            <Donor_Header num={2}/>
            <div className="signin_container">
                    <form id="donationposter" onSubmit={sendTask}> {/*changed the onsubmit to send task and added onChange = setFormValue to each form*/ }
                        <label htmlFor="title"><b>Donation Title:</b></label>
                      
                        <input id="sititle" type="text" onChange={(e) => setFormValue({ ...formValue, title: e.target.value })} placeholder="Enter a title for you donation." name="title" required />
                        <label htmlFor="quantity"><b>Quantity:</b></label>
                        <input id="siquantity" type="text" onChange={(e) => setFormValue({ ...formValue, quantity: e.target.value })} placeholder="How many servings of food are you donating (roughly)?" name="quantity" required />
                        <label htmlFor="description"><b>Description of Donation:</b></label>
                        <input id="sidescription" type="text" onChange={(e) => setFormValue({ ...formValue, description: e.target.value })} placeholder="Please provide a brief description of what you're donating." name="description" required />
                        <p></p>
                        <p></p>
                        <p></p>
                        <label htmlFor="availability"><b>When do you want this donation to expire?</b></label>
                        <p></p>
                        {/* in my app, i never used a select drop down, so I don't know if the onChange function will work here or not... */}
                        <select name="availability" onChange={(e) => setFormValue({ ...formValue, address: e.target.value })} id="availability" required>

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
                            {/* this button is only clickable if all the forms are filled out*/}
                            <button type="submit" disabled={!formValue.title || !formValue.description || !formValue.quantity || !formValue.availability}>POST</button>
                    </form>
                </div>
        </body>
        </>
    )
}