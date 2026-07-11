import classes from "./StatusBadge.module.css";

const statusConfig = {
  todo: {
    label: "To Do",
    className: classes.todo,
  },
  "in-progress": {
    label: "In Progress",
    className: classes.inProgress,
  },
  done: {
    label: "Completed",
    className: classes.done,
  },
};

const StatusBadge = ({ status, ...rest }) => {
  const { label, className } = statusConfig[status];

  return (
    <span
      {...rest}
      className={`${classes.badge} ${className}`}
    >
      {label}
    </span>
  );
};

export default StatusBadge;