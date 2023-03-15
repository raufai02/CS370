import React, { useRef, useState } from 'react';
import './App.css';

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

function ChatRoom() {
  const dummy = useRef();
  const tasksRef = firestore.collection('tasks');
  const query = tasksRef.orderBy('createdAt').limit(25);

  const [tasks] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState({ address: '', time: '', message: '' });


  const sendTask = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await tasksRef.add({
      address: formValue.address,
      time: formValue.time,
      message: formValue.message,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
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

      <button type="submit" disabled={!formValue.address || !formValue.time || !formValue.message}>🕊️</button>

    </form>
  </>)
}


function ChatTask(props) {
  const { address, time, message, uid, photoURL } = props.task;

  const taskClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <div className={`task ${taskClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <div>
        <p><strong>Address:</strong> {address}</p>
        <p><strong>Time:</strong> {time}</p>
        <p><strong>Message:</strong> {message}</p>
      </div>
    </div>
  );
}
// function ChatMessage(props) {
//   const { text, uid, photoURL } = props.message;

//   const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

//   return (<>
//     <div className={`message ${messageClass}`}>
//       <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
//       <p>{text}</p>
//     </div>
//   </>)
// }


export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
