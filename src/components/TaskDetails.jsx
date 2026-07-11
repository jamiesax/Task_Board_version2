import classes from './TaskDetail.module.css';
import Button from './UI/Button';
import StatusBadge from './UI/StatusBadge';

const TaskDetails = ({ task, onEdit, onDelete }) => {
  return (
    <section className={classes.details}>
      <header className={classes.header}>
        <h1>{task.title}</h1>

        <StatusBadge status={task.status} />
      </header>

      <div className={classes.description}>
        <h2>Description</h2>
        <p>{task.description}</p>
      </div>

      <div className={classes.actions}>
        <Button variant="primary" onClick={onEdit}>
          Edit
        </Button>

        <Button variant="danger" onClick={() => onDelete(task.id)}>
          Delete
        </Button>
      </div>
    </section>
  );
};

export default TaskDetails;