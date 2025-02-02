import { useReducer, useState } from "react";
import { toast } from "react-toastify";
import { TaskContext } from "../context";
import {
  ADD_TASK,
  DELETE_TASK,
  SEARCH_QUERY,
  TOGGLE_SORT_ORDER,
  UPDATE_TASK,
} from "../reducers/actions";
import { initialTask, taskReducer } from "../reducers/taskReducer";

const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialTask);
  const [taskToUpdate, setTasksToUpdate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(null);

  // handle add or update task
  const onEditAddTask = (newTask, isAddMode) => {
    dispatch({
      type: isAddMode ? ADD_TASK : UPDATE_TASK,
      payload: newTask,
    });
    toggleModal(false);
  };

  //Delete task handler
  const onDeleteTask = (task) => {
    setConfirmDelete(task);
  };
  // Confirm Delete task handler
  const onConfirmDeleteTask = () => {
    if (confirmDelete) {
      dispatch({
        type: DELETE_TASK,
        payload: confirmDelete,
      });
      toast.success(
        `Task "${confirmDelete.title}" has been deleted successfully!`
      );
      setConfirmDelete(null);
    }
  };

  // Edit task handler
  const onEditTask = (e, task) => {
    e.stopPropagation();
    setTasksToUpdate(task);
    toggleModal(true);
  };

  //handle search
  const onSearch = (searchQuery) => {
    dispatch({
      type: SEARCH_QUERY,
      payload: searchQuery,
    });
  };

  // handle toggle sort for a specific category
  const onToggleSort = (category) => {
    dispatch({
      type: TOGGLE_SORT_ORDER,
      payload: { category },
    });
  };

  //handle toggle modal
  const toggleModal = (shouldShow) => {
    setShowModal(shouldShow);
    if (!shouldShow) setTasksToUpdate(null);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        sortOrder: state.sortOrder,
        searchQuery: state.searchQuery,
        onEditAddTask,
        onEditTask,
        onDeleteTask,
        confirmDelete,
        setConfirmDelete,
        onConfirmDeleteTask,
        taskToUpdate,
        showModal,
        toggleModal,
        onToggleSort,
        onSearch,
      }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
