import React, { useState } from 'react';

function Task({ task, completeTask, removeTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState(task.text);

  const handleComplete = () => {
    completeTask(task.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    updateTask(task.id, { text: input });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setInput(task.text);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleRemove = () => {
    removeTask(task.id);
  };

  return (
    <div className={`Task ${task.isComplete ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="Task">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
          />
          <button className="task-button" onClick={handleUpdate}>
            Save
          </button>
          <button className="task-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      ) : (
        <div className="Task">
          <div className="task-text" onClick={handleComplete}>
            {task.text}
          </div>
          <div className="task-buttons">
            <button className="task-button" onClick={handleEdit}>
              Edit
            </button>
            <button className="task-button" onClick={handleRemove}>
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Task;
