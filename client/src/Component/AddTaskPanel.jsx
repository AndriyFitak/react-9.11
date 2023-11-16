import React, { useState } from 'react';


const AddTaskPanel = ({ onAddTask }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');

  const handleAddTask = () => {
    const newTask = {
      name: taskName,
      description: taskDescription,
      date: taskDate,
    };

    onAddTask(newTask);
    setTaskName('');
    setTaskDescription('');
    setTaskDate('');
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Add Task</button>

      {isModalOpen && (
        <div className="modal-container">
          <div className="modal">
            <input
              type="text"
              placeholder="Task Name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Task Description"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
            <input
              type="text"
              placeholder="Task Date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>
            <button onClick={() => setModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTaskPanel;
