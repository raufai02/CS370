import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {collection, doc, limit, orderBy, query, updateDoc, where} from "firebase/firestore";
import {auth, db} from "../../firebase";
import React, {useEffect, useState} from "react";
import {useCollectionData} from "react-firebase-hooks/firestore";
/*
const handleAcceptClick = async () => {
        try{
            const docRef = doc(db, "tasks", ref);
            const data = { status: "in-progress"};
            await updateDoc(docRef, data);
        }catch(error){
            console.error('Error updating task status: ', error)
        }
        setShowModal(false);
    };
 */

const ShelterOption = props => {

    return(
        <option value=props.ref>{`${props.name}, ${props.address}`}</option>
    )
}

const ShelterSelect = props => {
    const [formValue, setFormValue] = useState({ shelter: ''});

    const q = query(collection(db, "users"), where("role", "==", "shelter"), where("status", "==", "open"),
        limit(25));

    const [shelters, loading, error] = useCollectionData(q, { idField: 'id' });

    const handleAccept = async (e) => {
        try{
            const docRef = doc(db, "tasks", props.ref);
            const data = {
                status: "in-progress",
                driver: auth.currentUser.uid,
                shelter: formValue.shelter
            };
            await updateDoc(docRef, data);
        }catch(error){
            console.error('Error updating task status: ', error)
        }
        props.onClose();
    }

    const modalStyle = {
        display: props.show ? 'flex' : 'none',
        justifyContent: 'center',
        position: 'fixed',
        top:100,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999,
    };

    if(!props.show){
        return null;
    }

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

    return(
    <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
                Please Select Which Shelter You Will Drop the Food At
            </div>
            <div className="modal-body">
                <form onSubmit={handleAccept}></form>
                <label>Open Shelters</label>
                <select name = "shelter" onChange={(e) => setFormValue({ ...formValue, shelter: e.target.value })} id="shelter">
                    {shelters ? shelters && shelters.map(shelter => <ShelterOption key={shelter.id} shelter={shelter} />) : 'Loading...'}
                </select>
            </div>
            <div className="modal-footer">
                <Button variant="secondary" onClick={props.onClose}>
                    Cancel
                </Button>
            </div>
        </div>
    </div>
    )
}

export default ShelterSelect