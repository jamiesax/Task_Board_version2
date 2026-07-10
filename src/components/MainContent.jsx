import TaskDetails from "./TaskDetails";
import { useState } from "react";
import TaskForm from "./TaskForm";

const MainContent = ({ tasks, selectedTaskId, onAddTask, onUpdateTask, onDeleteTask }) => {
  const selectedTask = tasks.find((task) => task.id === selectedTaskId);

  const [mode, setMode] = useState("view");

  function openCreateForm() {
    setMode("create");
  }

  function openEditForm() {
    setMode("edit");

  }

  function handleCreateTask(newTask) {
    onAddTask(newTask);
    setMode("view");
}


  function handleUpdateTask(newTask) {
    onUpdateTask(newTask);
    setMode("view");
}

  if (!selectedTask && mode === 'view') {
    return (
       <main className="main-content"> 
       <p>Please select a task from the sidebar.
          <br/>
          OR
          <br/>
          Click the "Add Task" button to create a new task.
        </p>
          <button onClick={openCreateForm}>Add Task</button>
      </main>
    );
  }

  return (
    <main className="main-content">
      {mode === 'edit' && (
        <TaskForm mode={mode} task={selectedTask} onSubmit={handleUpdateTask} />
      )}

      {mode === 'create' && (
        <TaskForm mode={mode} task={selectedTask} onSubmit={handleCreateTask} />
      )}

      {mode === 'view' && selectedTask && (
        <TaskDetails task={selectedTask} onEdit={openEditForm} onDelete={onDeleteTask} />
      )}
    </main>
  );
};

export default MainContent;