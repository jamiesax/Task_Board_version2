import classes from './TaskDetail.module.css';

const TaskDetails = ({ task, onEdit, onDelete }) => {
  return (
    <section className={classes.details}>
      <header className={classes.header}>
        <h1>{task.title}</h1>

        <span className={`${classes.badge} ${classes[task.status]}`}>
          {task.status}
        </span>
      </header>

      <div className={classes.description}>
        <h2>Description</h2>
        <p>{task.description}</p>
      </div>

      <div className={classes.actions}>
        <button className="btn-primary" onClick={onEdit}>
          Edit
        </button>

        <button className="btn-danger" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </section>
  );
};

export default TaskDetails;