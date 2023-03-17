import Post from './Post.js'
import NewPost from './NewPost.js'
import Modal from './Modal.js'

import { useState } from 'react';

import classes from './PostsList.module.css';
function PostsList() {

    const [modalIsVisible, setModalVisible ] = useState(true); 
    const [enteredBody, setEnteredBody] = useState('');

    const [enteredAuthor, setEnteredAuthor] = useState('');

    function hideModalHandler() {
        setModalVisible(false);
    }

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }
    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }
    
    return (
        <>
            {modalIsVisible ? (
                <Modal onClose={hideModalHandler}>
                    <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
                </Modal> 
            ) : false} 
            <ul className={classes.posts}>
                <Post address = {enteredAuthor} time="8:00" message={enteredBody}/>
                <Post address = "there" time="9:00 AM" message="pizza" />
            </ul>
            
        </>
    );
}

export default PostsList