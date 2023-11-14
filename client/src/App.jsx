// App.js

import React, { useState } from 'react';
import TaskList from './Component/TaskList';
import AddTaskPanel from './Component/AddTaskPanel';
import './App.css'; // Підключення файлу стилів

const App = () => {
  const [todo, setTodo] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [done, setDone] = useState([]);

  const handleAddTask = (newTask, listName) => {
    if (listName === 'todo') {
      setTodo([...todo, newTask]);
    } else if (listName === 'inProgress') {
      setInProgress([...inProgress, newTask]);
    } else if (listName === 'done') {
      setDone([...done, newTask]);
    }
  };

  return (
    <div className='background'>
    <div className='all-block'>
      <div className="task-list"> 
        <h2>To Do</h2>
        <AddTaskPanel onAddTask={(task) => handleAddTask(task, 'todo')} />
        <TaskList tasks={todo} />
      </div>
      <div className="task-list"> 
        <h2>In Progress</h2>
        <AddTaskPanel onAddTask={(task) => handleAddTask(task, 'inProgress')} />
        <TaskList tasks={inProgress} />
      </div>
      <div className="task-list">
        <h2>Done</h2>
        <AddTaskPanel onAddTask={(task) => handleAddTask(task, 'done')} />
        <TaskList tasks={done} />
      </div>
    </div>
    </div>
  );
};

export default App;
