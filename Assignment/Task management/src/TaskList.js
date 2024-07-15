import React from 'react';
import { Link } from 'react-router-dom';



function TaskList() {
 

  return (
    <div className="TaskList">
      <h1>Get Things Done.</h1>
      
     
      <Link to="/new-task">Add New Task</Link>
    </div>
  );
}

export default TaskList;
