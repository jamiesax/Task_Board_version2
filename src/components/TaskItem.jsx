import classes from "./TaskItem.module.css";

const TaskItem = ({ task, onTaskSelect, selectedTaskId }) => {

  const isSelected = task.id === selectedTaskId;


  return (
    <li onClick={() => onTaskSelect(task.id)}
      className={`${classes.item} ${isSelected ? classes.selected : ""}`} >
      <div className={classes.content}>
        <h3>{task.title}</h3>

        <span className={`${classes.badge} ${classes[task.status]}`}>
          {task.status}
        </span>
      </div>
    </li>
  );
};

export default TaskItem;