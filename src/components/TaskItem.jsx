import classes from "./TaskItem.module.css";
import StatusBadge from "./UI/StatusBadge";

const TaskItem = ({ task, onTaskSelect, selectedTaskId }) => {

  const isSelected = task.id === selectedTaskId;


  return (
    <li onClick={() => onTaskSelect(task.id)}
      className={`${classes.item} ${isSelected ? classes.selected : ""}`} >
      <div className={classes.content}>
        <h3>{task.title}</h3>

        <StatusBadge status={task.status} />
      </div>
    </li>
  );
};

export default TaskItem;