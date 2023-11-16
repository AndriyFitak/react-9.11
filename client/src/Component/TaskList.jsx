// TaskList.js

import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDeleteTask }) => (
  <ul>
    {tasks.map((task, index) => (
      <Task key={index} task={task} onDelete={onDeleteTask} />
    ))}
  </ul>
);

export default TaskList;
