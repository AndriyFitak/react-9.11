// App.js

import React, { useState } from 'react';
import TaskList from './Component/TaskList';
import AddTaskPanel from './Component/AddTaskPanel';
import './App.css'; // Підключення файлу стилів

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleDeleteTask = (taskToDelete) => {
    const newTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(newTasks);
  };

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
    setTasks([...tasks, newTask]);
  };
  

  return (
    <div className='background'>
    <div className='all-block'>
      <div className="task-list"> 
        <h2>To Do</h2>
        <AddTaskPanel onAddTask={(task) => handleAddTask(task, 'todo')} />
        <TaskList tasks={todo} onDeleteTask={handleDeleteTask} />
      </div>
      <div className="task-list"> 
        <h2>In Progress</h2>
        <AddTaskPanel onAddTask={(task) => handleAddTask(task, 'inProgress')} />
        <TaskList tasks={inProgress} onDeleteTask={handleDeleteTask} />
      </div>
      <div className="task-list">
        <h2>Done</h2>
        <AddTaskPanel onAddTask={(task) => handleAddTask(task, 'done')} />
        <TaskList tasks={done} onDeleteTask={handleDeleteTask} />
      </div>
      
    </div>
    </div>
  );
};

export default App;
