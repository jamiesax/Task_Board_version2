import SearchBar from "./SearchBar";
import StatusFilter from "./StatusFilter";
import TaskList from "./TaskList";

const Sidebar = ({ tasks, onTaskSelect, selectedTaskId }) => {
  return (
     <aside>
        <StatusFilter />
       <SearchBar />
       <TaskList tasks={tasks} onTaskSelect={onTaskSelect} selectedTaskId={selectedTaskId} />
     </aside>
  );
};

export default Sidebar;