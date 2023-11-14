import React from 'react';

const Task = ({ task }) => (
  <li>
    <strong>{task.name}</strong> - {task.description}
  </li>
);

export default Task;
