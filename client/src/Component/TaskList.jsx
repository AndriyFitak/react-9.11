import React from 'react';
import Task from './Task';

const TaskList = ({ tasks }) => (
  <ul>
    {tasks.map((task, index) => (
      <Task key={index} task={task} />
    ))}
  </ul>
);

export default TaskList;
