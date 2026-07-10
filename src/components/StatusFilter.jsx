import classes from './StatusFilter.module.css';

const StatusFilter = ({ onFilterChange, statusFilter }) => {
  return (
    <div className={classes.filter}>
      <label htmlFor="status-filter">Status</label>

      <select id="status-filter" onChange={(e) => onFilterChange(e.target.value)} value={statusFilter}>
        <option value="all">All</option>
        <option value="todo">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Completed</option>
      </select>
    </div>
  );
};

export default StatusFilter;