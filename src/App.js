import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { useState } from 'react';
import { tasks as initialTasks } from './data/task.js';

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  function handleTaskSelect(taskId) {
    setSelectedTaskId(taskId);
  };

  return (
    <div className="App">
      <Sidebar tasks = {tasks} onTaskSelect={handleTaskSelect} selectedTaskId={selectedTaskId} />
      <MainContent />
    </div>
  );
}

export default App;
