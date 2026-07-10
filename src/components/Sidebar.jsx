import SearchBar from "./SearchBar";
import StatusFilter from "./StatusFilter";
import TaskList from "./TaskList";
import classes from "./Sidebar.module.css";
import { useState } from "react";

const Sidebar = ({ tasks, onTaskSelect, selectedTaskId }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    const matchesSearchTerm = task.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatusFilter = statusFilter === "all" || task.status === statusFilter;

    return matchesSearchTerm && matchesStatusFilter;
  });

  return (
     <aside className={classes.sidebar}>
      <header className={classes.header}>
        <h1>Task Board</h1>
        <p>Manage your work</p>
      </header>

      <StatusFilter onFilterChange={setStatusFilter}
       statusFilter={statusFilter} />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <TaskList
        tasks={filteredTasks}
        onTaskSelect={onTaskSelect}
        selectedTaskId={selectedTaskId}
      />
    </aside>
  );
};

export default Sidebar;