import './Donor_UI.css';
import { db } from "../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useCol } from "react-bootstrap/Col";
import { useEffect, useRef, useState } from "react";
import { collection, query, where, orderBy, limit, getDocs } from "firebase/firestore";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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


function StatusComponent(props) {
    const { status } = props;

    return (
        <div className={`task ${status}`}>
            <p>{status}</p>
        </div>
    );
}

function Tasks(props) {
    const { task } = props;
    const { address, createdAt, description, status, uid, photoURL, quantity, title, availability } = task;

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
        display: showModal ? 'left' : 'none',
        justifyContent: 'left',
        position: 'fixed',
        top: 100,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999,
    };

    const minsAgo = (oldDate) => {
        const currentDate = new Date();
        const diff = (currentDate - oldDate) / 60000;
        let result = 0;
        if (diff > 60) {
            result += Math.floor(diff / 60);
            return result + " hours ago";
        }
        else return Math.floor(diff) + " minutes ago";
    }

    return (
        <>

            <div className="row py-3 border-bottom">
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
                                    <button onClick={() => setShowModal(true)}>Details:</button>
                                </div>
            </div>
            <Modal
                show={showModal}
                onHide={handleRejectClick}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Description</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <span className="taskDescription">{task.description}</span>
                    <Button variant="secondary" onClick={handleRejectClick}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default function Timeline() {
    const dummy = useRef();
    const q = query(collection(db, "tasks"), where("status", "==", "available"), orderBy("createdAt"),
        limit(25));

    const [loading, error] = useCollectionData(q, { idField: 'id' });

    if (error) {
        console.error(error.message);
    }

    const [taskStatus, setTaskStatus] = useState('available');

    function changeTaskStatus() { // handle clicking 'accept'!!!
        setTaskStatus('in-progress');
    }


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
        }, []);

    return (
        <>
        <FontAwesomeIcon icon={faPlusCircle} size="2xl" />
                <p></p>
        <div className="card-body">
                    <h5 className="card-title">YOUR POSTED TASKS</h5>
            {tasks ? tasks && tasks.map(task => <Tasks key={task.id} task={task} />) : 'Loading...'}
            <span ref={dummy}></span>
        </div>
        </>
    )
}


/*

// import ReactDOM from 'react-dom'
import React, { useRef, useState, useEffect } from 'react';
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




export default function Timeline() {



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
            top: 100,
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
        }, []);


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









    return (
        <>
            <UpcomingTasks></UpcomingTasks>
        </>
    )
}

*/