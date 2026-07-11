import { useState, useEffect } from 'react';
import classes from './TaskForm.module.css';
import Button from './UI/Button';


const initialFormData = {
    title: "",
    description: "",
    status: "todo",
    };

const TaskForm = ({ onSubmit, setMode, mode, task }) => {
        
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
      <h2 className={classes.title}>
        {mode === "edit" ? "Edit Task" : "Create New Task"}
      </h2>

      <div className={classes.field}>
        <label htmlFor='Title'>Title</label>

        <input type="text" name="title" 
        required
        value={formData.title} onChange={handleChange} />
      
      </div>

      <div className={classes.field}>
        <label htmlFor='Description'>Description</label>
        <textarea name="description" value={formData.description} onChange={handleChange} required />
      
      </div>

      <div className={classes.field}>
        <label htmlFor='Status'>Status</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        
      </div>

      <div className={classes.actions}>
        <Button
          variant="secondary"
          type="button"
          onClick={() => setMode("view")}
        >
          Cancel
        </Button>

        <Button variant="primary" type="submit">
          {mode === "edit" ? "Save Changes" : "Create Task"}
        </Button>
      </div>

    </form>
  );
};

export default TaskForm;