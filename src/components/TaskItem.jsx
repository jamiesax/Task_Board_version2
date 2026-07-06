
const TaskItem = ({ task, onTaskSelect, selectedTaskId }) => {

  const isSelected = task.id === selectedTaskId;


  return (
    <li onClick={() => onTaskSelect(task.id)} className= {isSelected ? 'selectedTask' : ''}>
      {task.title}
    </li>
  );
};

export default TaskItem;