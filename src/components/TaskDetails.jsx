import React from 'react';

const TaskDetails = ({ task }) => {
  return (
    <main>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p><strong>Status:</strong> {task.status}</p>
    </main>
  );
};

export default TaskDetails;