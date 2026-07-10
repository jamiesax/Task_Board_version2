import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { useState } from 'react';
import './App.css';
import { tasks as initialTasks } from './data/task.js';

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  function handleTaskSelect(taskId) {
    setSelectedTaskId(taskId);
  };

  function handleAddTask(newTask) {
  const task = {
    ...newTask,
    id: Date.now(),
  };

  setTasks(prevTasks => [...prevTasks, task]);
  setSelectedTaskId(task.id);
}


  function handleUpdateTask(updatedTask) {
    setTasks(prevTasks => prevTasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    ));
  }


  function handleDeleteTask(taskId) {
    setTasks(prev => prev.filter(task => task.id !== taskId));

    setSelectedTaskId(prev => (prev === taskId ? null : prev));
}


  return (
    <div className="App">
      <Sidebar tasks = {tasks} onTaskSelect={handleTaskSelect} selectedTaskId={selectedTaskId} />
      <MainContent tasks={tasks} selectedTaskId={selectedTaskId} onAddTask={handleAddTask} onUpdateTask={handleUpdateTask} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
