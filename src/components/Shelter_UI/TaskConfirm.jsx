import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {doc, updateDoc} from "firebase/firestore";
import {db} from "../../firebase";
import React, {useEffect} from "react";


const TaskConfirm = props => {
    const closeOnEscapeKeyDown = (e) =>{
        if((e.charCode || e.keyCode) === 27){
            props.onClose()
        }
    }
    useEffect(() => {
        document.body.addEventListener('keydown', closeOnEscapeKeyDown)
        return function cleanup(){
            document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
        }
    }, [])


    if(!props.show) return null;

    async function handleAccept () {
        const newTaskRef = doc(db, "tasks", props.taskRef);
        const data = {
            status: "completed"
        }

        props.onClose();

        await updateDoc(newTaskRef, data)
            .then(() => {
                console.log("Updated")
            })
            .catch(error => {
                console.log(error);
            })
    }

    return(
        <Modal
            show={props.show}
            onHide={props.onClose}
            backdrop="static"
            keyboard={false}
            onClick={e => {
                e.stopPropagation();
            }}
        >
            <Modal.Header>
                <Modal.Title>Have You Received This Delivery?</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button onClick={handleAccept} variant="primary" style={{backgroundColor: '#87B692', borderColor: '#87B692'}}>
                    Yes
                </Button>
                <Button variant="secondary" onClick={props.onClose} style={{backgroundColor: 'crimson', borderColor: 'crimson'}}>
                    Not Yet
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default TaskConfirm;


/*




 */