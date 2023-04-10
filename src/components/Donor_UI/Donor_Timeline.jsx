
// import ReactDOM from 'react-dom'
import React, { useRef, useState, useEffect} from 'react';
import { collection, getDocs, query, where, orderBy, limit } from 'firebase/firestore';
import { db } from "../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


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




export default function Timeline(){

    

    function UpcomingTasks() {

        const [showModal, setShowModal] = useState(false);

        const handleGetDescription = () => {
            setShowModal(true);
        }

        const handleRejectClick = () => {
            setShowModal(false);
        };

        const modalStyle = {
            display: showModal ? 'flex' : 'none',
            justifyContent: 'center',
            position: 'fixed',
            top:100,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
        };






        const [tasks, setTasks] = useState([]);
  
        useEffect(() => {
          const unsub = auth.onAuthStateChanged((authObj) => {
            unsub();
            if (authObj) {
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
            }
          });
        },[]);
           
  
        return (
          <>
          <FontAwesomeIcon icon={faPlusCircle} size="2xl" />
            <p></p>
            <div className="card-body">
              <h5 className="card-title">YOUR POSTED TASKS</h5>
              {tasks.map((task) => (
                <div key={task.id} className="row py-3 border-bottom">
                  <div className="col">
                    <p className="small m-0">Available by: {task.availability}</p>
                  </div>
                  <div className="col">
                    <button>Status: {task.status}</button>
                  </div>
                  <div className="col">
                    <button className='chatbubbles'><a href="chat.html"><FontAwesomeIcon icon={faComment} color="black" size="2xl" /></a></button>
                  </div>
                  <div className='col'>
                    <p className="small m-0">Title: {task.title}</p>
                  </div>
                  <div className="col">
                    <button onClick={() => handleGetDescription()}>Details:</button>
                  </div>
                </div>
              ))}
            </div>
            <Modal
                show={showModal}
                onHide={handleRejectClick}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Details</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <p>God</p>

                    <Button variant="secondary" onClick={handleRejectClick}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
            
          </>
            
          
        );
      }



    
    




    return(
        <>
        <UpcomingTasks></UpcomingTasks>
        </>
    )
}
