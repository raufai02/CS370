import React from 'react';

function TaskDetails(props) {
  const { task } = props;

  function handleAccept() {
    
  }

  return (
    <div className="task-details">
      <h2>Task Details</h2>
      <ul>
        <li><strong>Address:</strong> {task.address}</li>
        <li><strong>Time:</strong> {task.time}</li>
        <li><strong>Message:</strong> {task.message}</li>
        <li><strong>Status:</strong> {task.status}</li>
      </ul>
      <button onClick={handleAccept}>Accept Task</button>
    </div>
  );
}

export default TaskDetails
