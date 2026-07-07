import TaskDetails from "./TaskDetails";

const MainContent = ({ tasks, selectedTaskId }) => {
  const selectedTask = tasks.find((task) => task.id === selectedTaskId);

  if (!selectedTask) {
    return (
      <main>
        <p>Please select a task from the sidebar.
          <br/>
          OR
          <br/>
          Click the "Add Task" button to create a new task.
          <button>Add Task</button>
        </p>
      </main>
    );
  }

  return (
    <main>
      <TaskDetails task={selectedTask} />
    </main>
  );
};

export default MainContent;