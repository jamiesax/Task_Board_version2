import TaskDetails from "./TaskDetails";
import { useState } from "react";
import TaskForm from "./TaskForm";
import classes from "./MainContent.module.css";
import Button from "./UI/Button";

const MainContent = ({ tasks, selectedTaskId, onAddTask, onUpdateTask, onDeleteTask, setMode, mode }) => {
  const selectedTask = tasks.find((task) => task.id === selectedTaskId);


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
      <main className={classes.mainContent}>
        <div className={classes.emptyState}>
          <h2>No task selected</h2>

          <p>
            Select a task from the sidebar or create a new one to get started.
          </p>

          <Button variant="primary" onClick={openCreateForm}>
            Create Task
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className={classes.mainContent}>
      {mode === 'edit' && (
        <TaskForm mode={mode} task={selectedTask} onSubmit={handleUpdateTask} setMode={setMode} />
      )}

      {mode === 'create' && (
        <TaskForm mode={mode} task={selectedTask} onSubmit={handleCreateTask} setMode={setMode} />
      )}

      {mode === 'view' && selectedTask && (
        <TaskDetails task={selectedTask} onEdit={openEditForm} onDelete={onDeleteTask} />
      )}
    </main>
  );
};

export default MainContent;