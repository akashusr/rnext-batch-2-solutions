import { initialTaskData } from "../data/tasks";
import {
  ADD_TASK,
  DELETE_TASK,
  SEARCH_QUERY,
  TOGGLE_SORT_ORDER,
  UPDATE_TASK,
} from "./actions";

const initialTask = {
  tasks: initialTaskData,
  sortOrder: {
    todo: "desc", // Default to 'desc' for latest tasks first
    onProgress: "desc",
    done: "desc",
    revised: "desc",
  },
  searchQuery: "",
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return { ...state, tasks: [...state.tasks, action.payload] };
    }
    case UPDATE_TASK: {
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    }
    case DELETE_TASK: {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    }
    case TOGGLE_SORT_ORDER: {
      const { category } = action.payload;
      return {
        ...state,
        sortOrder: {
          ...state.sortOrder,
          [category]: state.sortOrder[category] === "asc" ? "desc" : "asc",
        },
      };
    }
    case SEARCH_QUERY: {
      return {
        ...state,
        searchQuery: action.payload,
      };
    }
    default:
      return state;
  }
};

export { initialTask, taskReducer };
