import './Volunteer_UI.css';
import { db } from "../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useCol } from "react-bootstrap/Col";
import { useEffect, useRef, useState } from "react";
import { collection, query, where, orderBy, limit, getDocs } from "firebase/firestore";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faMapLocationDot, faCheck } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


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
                    <div className="card-title my-0 mb-2 h6">{`Posted: ${minsAgo(createdAt)}`}</div>
                    <div className="card-title my-0 mb-2 h6">{`Available at: ${availability}`}</div>
                    <div className="card-title my-0 mb-2 h6">{`Title: ${title}`}</div>
                    <div className="card-title my-0 mb-2 h6">{`Quantity: ${quantity}`}</div>
                </div>
                <div className="col buttons">
                    <button className='chatbubbles'><a href="chat.html"><FontAwesomeIcon icon={faComment} color="white" size="2xl" /></a></button>
                    <button className="viewmap"><FontAwesomeIcon icon={faMapLocationDot} size="2xl" /></button>
                    <button className="accept" onClick={() => setShowModal(true)}><FontAwesomeIcon icon={faCheck} color="white" size="2xl" /></button>
                </div>
            </div>
            <Modal
                show={showModal}
                onHide={handleRejectClick}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Job</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="primary" style={{ backgroundColor: '#87B692', borderColor: '#87B692' }} onClick={handleAcceptClick}>
                        Accept
                    </Button>
                    <Button variant="secondary" onClick={handleRejectClick}>
                        Cancel
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

    const [tasks, loading, error] = useCollectionData(q, { idField: 'id' });

    if (error) {
        console.error(error.message);
    }

    const [taskStatus, setTaskStatus] = useState('available');

    function changeTaskStatus() { // handle clicking 'accept'!!!
        setTaskStatus('in-progress');
    }




    return (
        <div>
            {tasks ? tasks && tasks.map(task => <Tasks key={task.id} task={task} />) : 'Loading...'}
            <span ref={dummy}></span>
        </div>
    )
}