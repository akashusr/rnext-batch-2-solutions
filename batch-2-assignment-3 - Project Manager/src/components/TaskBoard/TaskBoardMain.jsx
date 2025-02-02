import { categoryStyles } from "../../categoryStyles";
import DeleteAlertPopup from "../../ui/AlertPopup";
import { useTask } from "../hooks/useTask";
import AddTaskModal from "./AddTaskModal";
import TaskCard from "./TaskCard/TaskCard";
import TopBar from "./TopBar";

const TaskBoardMain = () => {
  const { tasks, searchQuery, showModal, sortOrder, confirmDelete } = useTask();

  // Helper function to sort tasks based on category and sort order and also filter based on title
  const getSortedFilterTasksByCategory = (tasks, category, sortOrder) => {
    return tasks
      .filter(
        (task) =>
          task.category === category &&
          task?.title?.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) =>
        sortOrder === "asc"
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date)
      );
  };

  // define categories
  const categories = ["todo", "onProgress", "done", "revised"];

  return (
    <>
      {showModal && <AddTaskModal />}
      {confirmDelete && <DeleteAlertPopup />}
      <TopBar />
      <div className='-mx-2 mb-6 flex flex-wrap'>
        {categories.map((category) => {
          const sortedData = getSortedFilterTasksByCategory(
            tasks,
            category,
            sortOrder[category]
          );
          return (
            <TaskCard
              key={category}
              title={category}
              bgColor={categoryStyles[category]?.bgColor}
              textColor={categoryStyles[category]?.textColor}
              taskData={sortedData}
            />
          );
        })}
      </div>
    </>
  );
};

export default TaskBoardMain;
