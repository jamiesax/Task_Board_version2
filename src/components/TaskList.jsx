import TaskItem from "./TaskItem";
import classes from "./TaskList.module.css";

const TasksList = ({ tasks, onTaskSelect, selectedTaskId, hasTasks }) => {

  if (tasks.length === 0) {
  return (
    <div className={classes.emptyState}>
      <h3>
        {hasTasks ? "No tasks found" : "No tasks yet"}
      </h3>

      <p>
        {hasTasks
          ? "No tasks match your current search or filter."
          : "Create your first task to get started."}
      </p>
    </div>
  );
}

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