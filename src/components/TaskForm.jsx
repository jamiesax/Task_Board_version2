import { useState, useEffect } from 'react';
import classes from './TaskForm.module.css';


const initialFormData = {
    title: "",
    description: "",
    status: "todo",
    };

const TaskForm = ({ onSubmit, mode, task }) => {
        
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
  if (mode === "edit") {
    setFormData({ ...task });
  }
}, [task, mode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
      onSubmit(formData);
    setFormData(initialFormData);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <div className={classes.field}>
        <label>
        Title:
        <input type="text" name="title" 
        required
        value={formData.title} onChange={handleChange} />
      </label>
      </div>

      <div className={classes.field}>
        <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleChange} required />
      </label>
      </div>

      <div className={classes.field}>
        <label>
        Status:
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </label>
      </div>

      

      <button type="submit">{mode === 'edit' ? 'Edit Task' : 'Add Task'}</button>

    </form>
  );
};

export default TaskForm;