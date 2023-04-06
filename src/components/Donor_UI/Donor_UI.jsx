import Donor_Header from '../Donor_Header/Donor_Header.jsx';
import './Donor_UI.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
// import ReactDOM from 'react-dom'
import React, { useRef, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';


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


export default function Donor_UI () {
  const navigate = useNavigate();
  const tasksRef = firestore.collection('tasks');
  const [formValue, setFormValue] = useState({ title: '', quantity: '', description: '', availability: ''});
  const [loading, setLoading] = useState(false);

  function UpcomingTasks() {
      const [tasks, setTasks] = useState([]);

      useEffect(() => {
        const unsub = auth.onAuthStateChanged((authObj) => {
          unsub();
          if (authObj) {
            setLoading(true);
            async function fetchTasks() {
                const taskCollection = collection(firestore, 'tasks');
                const que = query(taskCollection, where('uid', '==', auth.currentUser.uid));
                const snapshot = await getDocs(que);
                const taskData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setTasks(taskData);
              }
              fetchTasks();
          } else {
            console.log("not logged in");
            setLoading(false);
          }
        });
      },[]);
         

      return (
        <div className="col card upcoming-trips mt-3">
          <FontAwesomeIcon icon={faPlusCircle} size="2xl" />
          <p></p>
          <div className="card-body">
            <h5 className="card-title">YOUR POSTED TASKS</h5>
            {tasks.map((task) => (
              <div key={task.id} className="row py-3 border-bottom">
                <div className="col">
                  <div className="card-title my-0 mb-2 h6">{task.date}</div>
                  <p className="small m-0">Time: {task.availability}</p>
                </div>
                <div className="col">
                  <button><u>{task.status}</u></button>
                </div>
                <div className="col">
                  <button className='chatbubbles'><a href="chat.html"><FontAwesomeIcon icon={faComment} color="black" size="2xl" /></a></button>
                </div>
                <div className='col'>
                  <p className="small m-0">Title: {task.title} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    const sendTask = async (e) => {
      navigate("/donorui");
      e.preventDefault();
      await tasksRef.add({
          title: formValue.title,
          quantity: formValue.quantity,
          description: formValue.description,
          availability: formValue.availability,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          uid: auth.currentUser.uid,
          status:'available'
      })
      setFormValue({ title: '', quantity: '', description: '', availability: '' });
  }


    return (
      <body>
          <Donor_Header />
          <section className="push"></section>
<div className="row restaurant-cards"> {/* CARDS */}  
<div className="col card create-task mt-3 mx-4"> {/* FIRST CARD */}
<FontAwesomeIcon icon={faClipboardCheck} size="2xl" />
  <p></p>
  <div className="card-body">
    <div className="row">
      <h5 className="card-title">CREATE NEW TASK</h5>
    </div>
    <form id="form" className="row" onSubmit={sendTask}>
      <label htmlFor="title"><b>Donation Title:</b></label>
      <input type="text" onChange={(e) => setFormValue({ ...formValue, title: e.target.value })} placeholder="Give a name for your donation." name="title" required />
      <label htmlFor="quantity"><b>Quantity:</b></label>
      <input type="text" onChange={(e) => setFormValue({ ...formValue, quantity: e.target.value })} placeholder="How many servings (roughly)?" name="quantity" required />
      <label htmlFor="description"><b>Description:</b></label>
      <input type="text" onChange={(e) => setFormValue({ ...formValue, description: e.target.value })} placeholder="Provide a brief description of what you're donating." name="description" required />
      <p> </p>
      <p> </p>
      <label htmlFor="availability">When can this donation be picked up?</label>
      <select name="availability" onChange={(e) => setFormValue({ ...formValue, availability: e.target.value })} id="availability">
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
</div> {/*END FIRST CARD*/}
<UpcomingTasks/>

</div>


      </body>
  )
}

