import SearchBar from "./SearchBar";
import StatusFilter from "./StatusFilter";
import TaskList from "./TaskList";
import classes from "./Sidebar.module.css";
import { useState } from "react";
import Button from "./UI/Button";

const Sidebar = ({ tasks, onTaskSelect, selectedTaskId, setMode }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    const matchesSearchTerm = task.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesStatusFilter =
      statusFilter === "all" || task.status === statusFilter;

    return matchesSearchTerm && matchesStatusFilter;
  });

  const hasTasks = tasks.length > 0;
  const hasFilteredTasks = filteredTasks.length > 0;

  return (
    <aside className={classes.sidebar}>
      <header className={classes.header}>
        <h1>Task Board</h1>
        <p>Manage your work</p>
      </header>

      <section className={classes.controls}>
        <Button
          variant="primary"
          onClick={() => setMode("create")}
        >
          + New Task
        </Button>

        <StatusFilter
          statusFilter={statusFilter}
          onFilterChange={setStatusFilter}
        />

        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
      </section>

      {hasFilteredTasks && (
        <p className={classes.taskCount}>
          Showing {filteredTasks.length}{" "}
          {filteredTasks.length === 1 ? "task" : "tasks"}
        </p>
      )}

      <div className={classes.listContainer}>
        <TaskList
          tasks={filteredTasks}
          hasTasks={hasTasks}
          onTaskSelect={onTaskSelect}
          selectedTaskId={selectedTaskId}
        />
      </div>
    </aside>
  );
};

export default Sidebar;