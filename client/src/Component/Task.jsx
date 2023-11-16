// Task.js

import React from 'react';

const Task = ({ task, onDelete }) => (
  <li>
    <strong>{task.name}</strong> - {task.description} - {task.date}
    <button onClick={() => onDelete(task)}>Delete</button>
  </li>
);

export default Task;
