import React, { useState } from 'react';


import Task from './Task';

function Form() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1, isComplete: false }]);
  };

  const updateTask = (taskId, newValue) => {
    setTasks(tasks.map(task => (task.id === taskId ? { ...task, ...newValue } : task)));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const completeTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, isComplete: !task.isComplete } : task
    ));
  };

  return (
    <div className="TaskList">
      <h1>Get Things Done.</h1>
      <input type="text"/>
      <button onClick={addTask}>Add task</button>
      <div className="tasks">
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            completeTask={completeTask}
            removeTask={removeTask}
            updateTask={updateTask}
          />
        ))}
      </div>
      
    </div>
  );
}

export default Form;
