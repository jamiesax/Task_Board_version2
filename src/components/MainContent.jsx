import TaskDetails from "./TaskDetails";

const MainContent = ({ selectedTask }) => {
  return (
    <>
     <main>
       <TaskDetails task={selectedTask} />
     </main>
    </>
  );
};

export default MainContent;