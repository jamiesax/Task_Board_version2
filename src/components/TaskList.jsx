import TaskItem from "./TaskItem";
import classes from "./TaskList.module.css";

const TasksList = ({ tasks, onTaskSelect, selectedTaskId }) => {

  return (
    <ul className={classes.list}>
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