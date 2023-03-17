import React, { useRef, useState } from 'react';
import './App.css';
import Post from './components/Post.js';
import NewPost from './components/NewPost';
import PostsList from './components/PostsList';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TaskDetails from './TaskDetails.js';

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


function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>LIVE TASKS</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />} 
      </section>
      {/* if user is logged in show the ChatRoom component, else the sign in page!*/}

    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}
// chatroom is a PostsList



function ChatRoom() {
  const dummy = useRef();
  const tasksRef = firestore.collection('tasks'); // collect the tasks from the database!
  const query = tasksRef.orderBy('createdAt').limit(25);

  const [tasks] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState({ address: '', time: '', message: ''});

  const [taskStatus, setTaskStatus ] = useState('available'); 

  function changeTaskStatus() { // handle clicking 'accept'!!!
      setTaskStatus('in-progress');
  }

  const sendTask = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await tasksRef.add({
      address: formValue.address,
      time: formValue.time,
      message: formValue.message,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
      status:'available' // default status!
    })

    setFormValue({ address: '', time: '', message: '' });
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {tasks && tasks.map(task => <ChatTask key={task.id} task={task} />)}

      <span ref={dummy}></span>

    </main>

    
    <form onSubmit={sendTask}>

     <input value={formValue.address} onChange={(e) => setFormValue({ ...formValue, address: e.target.value })} placeholder="Address" />
      <input value={formValue.time} onChange={(e) => setFormValue({ ...formValue, time: e.target.value })} placeholder="Time" />
      <input value={formValue.message} onChange={(e) => setFormValue({ ...formValue, message: e.target.value })} placeholder="Message" />
      
      <button type="submit" disabled={!formValue.address || !formValue.time || !formValue.message}>POST</button>

    </form>
  </>)
}
function StatusComponent(props) {
  const { status } = props;

  return (
    <div className={`task ${status}`}>
      <p>{status}</p>
    </div>
  );
}
function ChatTask(props) {
  const { task } = props;
  const { address, time, message, status, uid, photoURL } = task;
 // let taskClass = status
  const taskClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  const [showModal, setShowModal] = useState(false);

  const [taskStatus, setTaskStatus] = useState(status);


  const handleAcceptClick = () => {
    setTaskStatus('in-progress');
    setShowModal(false);
  };

  const handleRejectClick = () => {
    setTaskStatus('available');
    setShowModal(false);
  };

  const modalStyle = {
  display: showModal ? 'flex' : 'none',
  justifyContent: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 999,
};
  return (
    <>
      <div
        className={`task ${taskStatus}`}
        onClick={() => setShowModal(true)}
      >
        <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
        <div className={`task ${taskStatus}`}>
          <ul>
            <li><strong>Address:</strong> {address}</li>
            <li><strong>Time:</strong> {time}</li>
            <li><strong>Message:</strong> {message}</li>
          </ul>
        </div>
        <StatusComponent status={taskStatus} />
      </div>
      <div style={modalStyle}>
        <div>
          <p className={`modal`}>Do you want to accept this task?</p>
          <button onClick={handleAcceptClick}>Accept</button>
          <button onClick={handleRejectClick}>Reject</button>
        </div>
      </div>
    </>
  );
}




export default App;


