import TaskItem from "./TaskItem";

const TasksList = ({ tasks, onTaskSelect, selectedTaskId }) => {
  return (
    <ul>
     {tasks.map(task => (
       <TaskItem
         key={task.id}
         task={task}
         onTaskSelect={onTaskSelect}
         selectedTaskId={selectedTaskId}
       />
     ))}
      
    {/* //  <li onClick={() => onTaskSelect(task.id)} key = {task.id}>
    //    {task.title}
    //  </li> */}
    </ul>
  );
};

export default TasksList;