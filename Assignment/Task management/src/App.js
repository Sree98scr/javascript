import React from 'react'
import './App.css';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Form from './form.js';
import TaskList from './TaskList.js';
import Task from './Task.js';



function App() {
  return (
    <div className='Task Management'>
    <h1>Task Management App</h1>
   
<Router>
  <Routes>
   
  <Route path="/tasks/:id" element={<Task />} />
  <Route path="/" element={<TaskList />} />
          <Route path="/new-task" element={<Form />} />
          
  </Routes>
  </Router>

 
   
      
    </div>
  );
}

export default App;
