import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { useState, useEffect } from 'react';
import './App.css';
import { tasks as initialTasks } from './data/task.js';

function App() {
  const STORAGE_KEY = "task-board-v2";
  const [mode, setMode] = useState("view");
  const [tasks, setTasks] = useState(() => {
  const retrievedTasks = localStorage.getItem(STORAGE_KEY);

      if (retrievedTasks) {
        return JSON.parse(retrievedTasks);
      }
      
      return [];});

  const [selectedTaskId, setSelectedTaskId] = useState(null);

  useEffect(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }, [tasks]);

  function handleTaskSelect(taskId) {
    setSelectedTaskId(taskId);
    setMode("view");
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
    setMode("view");
}


  return (
    <div className="App">
      <Sidebar tasks = {tasks} 
      onTaskSelect={handleTaskSelect} 
      selectedTaskId={selectedTaskId} 
      setMode={setMode} />

      <MainContent tasks={tasks} 
      selectedTaskId={selectedTaskId} 
      onAddTask={handleAddTask} 
      onUpdateTask={handleUpdateTask} 
      onDeleteTask={handleDeleteTask} 
      setMode={setMode} mode={mode} />
    </div>
  );
}

export default App;
